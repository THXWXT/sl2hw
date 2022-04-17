import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/services/user/user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get('/1')
    async thanawatcall1(): Promise<any>{
        return this.userService.thanawat1();
    }
    @Get('/2')
    async thanawtcall2(): Promise<any>{
        return this.userService.two();
    }
    @Get('/3')
    async thanawatcall3(): Promise<any>{
        return this.userService.three();
    }
    @Get('/4')
    async thanawatcall4(): Promise<any>{
        return this.userService.four();
    }
    @Get('/5')
    async thanawatcall5(): Promise<any>{
        return this.userService.five();
    }
    @Get('/6')
    async thanawatcall6(): Promise<any>{
        return this.userService.six();
    }
    @Get('/7')
    async thanawatcall7(): Promise<any>{
        return this.userService.seven();
    }
}
