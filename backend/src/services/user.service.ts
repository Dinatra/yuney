import { PrismaService } from './../prisma/prisma.service';
import { Injectable, BadRequestException } from '@nestjs/common';
import { PasswordService } from './password.service';
import { ChangePasswordInput } from '../resolvers/user/dto/change-password.input';
import { UpdateUserInput } from '../resolvers/user/dto/update-user.input';
import { updateUsersTeams } from '../resolvers/user/dto/updateUsersTeams.input';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private passwordService: PasswordService
  ) {}

  updateUser(userId: string, newUserData: UpdateUserInput) {
    return this.prisma.user.update({
      data: newUserData,
      where: {
        id: userId,
      },
    });
  }

  async changePassword(
    userId: string,
    userPassword: string,
    changePassword: ChangePasswordInput
  ) {
    const passwordValid = await this.passwordService.validatePassword(
      changePassword.oldPassword,
      userPassword
    );

    if (!passwordValid) {
      throw new BadRequestException('Invalid password');
    }

    const hashedPassword = await this.passwordService.hashPassword(
      changePassword.newPassword
    );

    return this.prisma.user.update({
      data: {
        password: hashedPassword,
      },
      where: { id: userId },
    });
  }

    updateUsersTeams(id: string, team: updateUsersTeams) {

        return this.prisma.user.update({
          where: {
            id : id
          },
          data: {
            teams: {connect: {id : team.teamId}}
          },
        })
    }

  deleteUsersTeams(id: string, teams: updateUsersTeams) {

    return this.prisma.user.update({
      where: {
        id : id
      },
      data: {
        teams: {disconnect: {id : teams.teamId}}
      },
    })

  }
}
