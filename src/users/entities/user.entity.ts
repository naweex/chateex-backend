import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractEntity } from 'src/common/database/abstract.entity';

@Schema({ versionKey: false })
@ObjectType()
export class User extends AbstractEntity {
  @Prop()
  @Field()//just allowed to email to have Field,dont use for password for more security.
  email: string;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
