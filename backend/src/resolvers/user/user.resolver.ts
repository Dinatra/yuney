import { PrismaService } from './../../prisma/prisma.service';
import { GqlAuthGuard } from '../../guards/gql-auth.guard';
import {
  Resolver,
  Query,
  Parent,
  Mutation,
  Args,
  ResolveField,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { UserEntity } from '../../decorators/user.decorator';
import { User } from '../../models/user.model';
import { ChangePasswordInput } from './dto/change-password.input';
import { UserService } from 'src/services/user.service';
import { UpdateUserInput } from './dto/update-user.input';
import {Team} from "../../models/team.model";
import { updateUsersTeams } from './dto/updateUsersTeams.input';

@Resolver((of) => User)
@UseGuards(GqlAuthGuard)
export class UserResolver {
  constructor(
    private userService: UserService,
    private prisma: PrismaService
  ) {}

  @Query((returns) => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => User)
  async updateUser(
    @UserEntity() user: User,
    @Args('data') newUserData: UpdateUserInput
  ) {
    return this.userService.updateUser(user.id, newUserData);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => User)
  async updateUsersTeams(
      @UserEntity() user: User,
      @Args('data') teams : updateUsersTeams
  ) {
    return this.userService.updateUsersTeams(user.id, teams);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => User)
  async deleteUsersTeams(
      @UserEntity() user: User,
      @Args('data') teams : updateUsersTeams
  ) {
    return this.userService.deleteUsersTeams(user.id, teams);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => User)
  async changePassword(
    @UserEntity() user: User,
    @Args('data') changePassword: ChangePasswordInput
  ) {
    return this.userService.changePassword(
      user.id,
      user.password,
      changePassword
    );
  }

  // @ResolveField('teams')
  // teams(@Parent() user: User) {
  //   return this.prisma.team.findMany({ where: { id: Team.id } });
  // }
}
