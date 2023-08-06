import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {

    constructor(private prisma:PrismaService){}
    test():String{
        return "Auth Controller testd "
    }

     async signup(user:UserDTO){
        
        try {
            const createdUSer =  await this.prisma.user.create({ data:user })
            return createdUSer

        } catch (e) {
            if (e instanceof Prisma.PrismaClientKnownRequestError) {
                console.error(e)
              if (e.code === 'P2002') {
                throw new ForbiddenException(
                    'Credentials taken',
                  );
              }
            }
            throw e
          }
        
        
    }
}
