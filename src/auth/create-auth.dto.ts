// Here we are creating the DTO {Data Transfer Object} for transferring the data  

import { IsString, IsInt } from "class-validator";

export class CreateAuthDto{
    @IsString() readonly name:string;

    @IsInt() readonly price:number;
}