import { Controller, Body, Post, Get } from "@nestjs/common";
import { JwtService } from "src/services/jwt.service";
import { UserDto } from "src/dto/user.dto";
import { UserLoginDto } from "src/dto/userLogin.dto";

@Controller("jwt")
export class AuthController {
  constructor(private readonly jwtService: JwtService) { }

  @Post()
  public getJwt(@Body() userDto: UserDto): string {
    return this.jwtService.generateJwt(userDto);
  }

  @Post("/decode")
  public async readJwt(@Body() userLoginDto: UserLoginDto): Promise<UserDto> {
    return await this.jwtService.readJwt(userLoginDto.jwt);
  }
}