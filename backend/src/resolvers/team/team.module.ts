import { PrismaModule } from './../../prisma/prisma.module';
import { Module } from '@nestjs/common';
import {TeamService} from "../../services/team.service";
import {TeamResolver} from "./team.resolver";

@Module({
    imports: [PrismaModule],
    providers: [TeamResolver, TeamService],
})
export class TeamModule {}
