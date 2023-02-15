import { Controller, Get,Param,Post,Body,Put,Delete, UsePipes } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Auth } from "./auth.interface"; 
import { CreateAuthDto } from "./create-auth.dto";
import { ValidationPipe } from "src/common/validation.pipe";

@Controller('auth')
export class AuthController {
    // here it will intentiate by it's own from service and tell the controller about the access
    constructor(private readonly authService: AuthService) {
        // *** we are calling the function like this form auth.service.ts

    }
    // @@@@@@@@@@@@ we can also write above thing as 
    // authService:AuthService;
    // constructor(authService:AuthService){
    //     this.authService = authService
    // }

    // &&& Creating "post" request for signup and login 
    @Post('signup')
    signup() {
        return this.authService.signup();
    }
    @Post('signin')
    signin() {
        return this.authService.signin();
    }
    // @Get()
    // getauthor() {
    //     return this.authService.getauthor();
    // }
    // @Get(':id')
    // getauthor(@Param() params){
    //     console.log('get a single author',params.id);
    //     return this.authService.getauthor().filter(a=>a.id==params.id);
    // }

    // @Post()
    // createauthor(@Body() author:authorDto){

    // }

    @Get()
    async findAll(): Promise<string[]> {
        return this.authService.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe()) // using the dto,validation
    async create(@Body() createItemDto: CreateAuthDto){
        this.authService.create(createItemDto);
    }
}