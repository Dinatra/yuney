import { PrismaModule } from './../../prisma/prisma.module';
import { QuizzAnswerResolver } from './quizzAnswer.resolver';
import { Module } from '@nestjs/common';
import {QuizzAnswerService} from "../../services/quizzAnswer.service";

@Module({
    imports: [PrismaModule],
    providers: [QuizzAnswerResolver, QuizzAnswerService],
})
export class QuizzAnswerModule {}
