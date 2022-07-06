import { PrismaModule } from './../../prisma/prisma.module';
import { QuizzQuestionResolver } from './quizzQuestion.resolver';
import { Module } from '@nestjs/common';
import { QuizzQuestionService } from '../../services/quizzQuestion.service';

@Module({
    imports: [PrismaModule],
    providers: [QuizzQuestionResolver, QuizzQuestionService],
})
export class QuizzQuestionModule {}
