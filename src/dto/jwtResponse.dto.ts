import { UserDto } from "./user.dto";

export class JwtResponse extends UserDto {
  readonly iat: number;
  readonly exp: number;
}