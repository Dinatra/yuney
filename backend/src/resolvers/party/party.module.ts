import { PrismaModule } from './../../prisma/prisma.module';
import { PartyResolver } from './party.resolver';
import { Module } from '@nestjs/common';
import { PasswordService } from '../../services/password.service';
import {PartyService} from "../../services/party.service";

@Module({
  imports: [PrismaModule],
  providers: [PartyResolver, PartyService, PasswordService],
})
export class PartyModule {}
