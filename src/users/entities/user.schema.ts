import { Prop, Schema } from "@nestjs/mongoose";
import { AbstractDocument } from "src/common/database/abstract.schema";

@Schema({versionKey : false})
export class UserDocument extends AbstractDocument { 
    @Prop()
    email : string;
    @Prop()
    password : string;
}