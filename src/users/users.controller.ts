import { Controller, Get } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UserService) {}
    
    @Get("getAll")
    async getAll():Promise<User[]> {
        return await this.userService.findAll()
    }
}
