import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { BaseModel } from './base.model';
import {Team} from "./team.model";

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

registerEnumType(Role, {
  name: 'Role',
  description: 'User role',
});

@ObjectType()
export class User extends BaseModel {
  email             : string;
  firstname?        : string;
  lastname?         : string;
  role              : Role;
  teams             : Team[];
  @HideField()
  password          : string;
}
