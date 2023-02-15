import {Module} from '@nestjs/common'
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
 
@Module ({

    controllers:[AuthController], // importing file from auth.controller.ts
    providers:[AuthService],// importing file from auth.service.ts
    // Providers help us to handle request 
})
export class AuthModule {}