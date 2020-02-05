import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthController } from './controllers/auth.controller';
import { AppService } from './app.service';
import { JwtService } from './services/jwt.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, JwtService],
})
export class AppModule {}
