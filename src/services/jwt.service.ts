import { sign, verify } from 'jsonwebtoken';
import { Injectable } from "@nestjs/common";
import { UserDto } from "src/dto/user.dto";

@Injectable()
export class JwtService {
  private readonly wouldBeSecretVar: string = "2ri0j3g223jg0jg23g32g32g2gsadg";

  public generateJwt(userDto: UserDto): string {
    const { username, name, age } = userDto;
    return sign({
      username,
      name,
      age,
    }, this.wouldBeSecretVar, { expiresIn: '1h' });
  }

  public async readJwt(token: string) {
    try {
    return await verify(token, this.wouldBeSecretVar);
    } catch (e) {
      throw e;
    }
  }
}