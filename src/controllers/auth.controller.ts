import { Controller, Body, Post, Get } from "@nestjs/common";
import { JwtService } from "../services/jwt.service";
import { UserDto } from "..//dto/user.dto";
import { UserLoginDto } from "../dto/userLogin.dto";
import { JwtResponse } from "../dto/jwtResponse.dto";

@Controller("jwt")
export class AuthController {
  constructor(private readonly jwtService: JwtService) { }

  @Post()
  public getJwt(@Body() userDto: UserDto): string {
    return this.jwtService.generateJwt(userDto);
  }

  @Post("/decode")
  public async readJwt(@Body() userLoginDto: UserLoginDto): Promise<JwtResponse> {
    return await this.jwtService.readJwt(userLoginDto.jwt);
  }
}