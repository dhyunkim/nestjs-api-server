import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { InterestModule } from './interest/interest.module';

@Module({
  imports: [UserModule, PostModule, AuthModule, InterestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
