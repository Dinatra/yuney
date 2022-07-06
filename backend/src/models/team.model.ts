import {
  Field,
  ObjectType,
  registerEnumType,
  HideField,
} from '@nestjs/graphql';
import { BaseModel } from './base.model';
import {setImmediate} from "timers";
import {User} from "./user.model";

@ObjectType()
export class Team {
  id                  : string;
  name                : string;
  biography?          : string;
  status              : boolean;
  image?              : string;
  uniqueCode          : string;
  user?               : User[]
  favorite            : boolean
}
