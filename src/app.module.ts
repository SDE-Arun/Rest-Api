import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { StorageModule } from './storage/storage.module';
import { MediaModule } from './media/media.module';

@Module({
  imports: [StorageModule, MediaModule],// *** we make this class in auth.module.ts
  controllers: [AppController],// *** we can add the controller here of "author" module or any other module 
  providers: [AppService],
})
export class AppModule {}
