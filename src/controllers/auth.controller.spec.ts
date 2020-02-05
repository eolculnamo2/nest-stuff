import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { UserDto } from '../dto/user.dto';
import { JwtService } from '../services/jwt.service';

describe('AppController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [JwtService],
    }).compile();

    authController = app.get<AuthController>(AuthController);
  });

  describe('jwt', () => {
    it('Should return JWT"', () => {
      const data: UserDto =  { username: "rob", name: "bert", age: 28, };
      const jwt = authController.getJwt(data);

      expect(jwt).not.toBe(null);
      expect(typeof jwt).toBe('string');
    });

    it ('should return correct decoded data', async () => {
      const data: UserDto =  { username: "rob", name: "bert", age: 28, };
      const jwt = authController.getJwt(data);
      const decoded = await authController.readJwt({ username: 'rob', jwt});

      expect(decoded.username).toBe('rob');
      expect(decoded.name).toBe('bert');
      expect(decoded.age).toBe(28);
    })
  });
});
