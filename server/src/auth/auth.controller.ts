import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto';
import { HttpAdapterHost } from '@nestjs/core';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Get('test')
    test(){
        return this.authService.test();
    }

    @HttpCode(HttpStatus.CREATED)
    @Post('signup')
    signup(@Body() user:UserDTO){
        return this.authService.signup(user);
    }
    

}
