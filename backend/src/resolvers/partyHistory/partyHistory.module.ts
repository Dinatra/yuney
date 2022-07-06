import { PrismaModule } from './../../prisma/prisma.module';
import { PartyHistoryResolver } from './partyHistory.resolver';
import { Module } from '@nestjs/common';
import { PasswordService } from '../../services/password.service';
import {PartyHistoryService} from "../../services/partyHistory.service";

@Module({
  imports: [PrismaModule],
  providers: [PartyHistoryResolver, PartyHistoryService, PasswordService],
})
export class PartyHistoryModule {}
