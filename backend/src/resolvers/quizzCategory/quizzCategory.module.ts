import { PrismaModule } from './../../prisma/prisma.module';
import { QuizzCategoryResolver } from './quizzCategory.resolver';
import { Module } from '@nestjs/common';
import { QuizzCategoryService } from '../../services/quizzCategory.service';
import { PasswordService } from '../../services/password.service';

@Module({
    imports: [PrismaModule],
    providers: [QuizzCategoryResolver, QuizzCategoryService],
})
export class QuizzCategoryModule {}
