import { PrismaModule } from './../../prisma/prisma.module';
import { QuizzResolver } from './quizz.resolver';
import { Module } from '@nestjs/common';
import { QuizzService } from '../../services/quizz.service';
import { PasswordService } from '../../services/password.service';
import {UserService} from "../../services/user.service";

@Module({
  imports: [PrismaModule],
  providers: [QuizzResolver, QuizzService, PasswordService,UserService],
})
export class QuizzModule {}
