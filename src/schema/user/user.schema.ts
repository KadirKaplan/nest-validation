import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as bcrypt from 'bcrypt';
@Schema()
export  class User {
    @Prop({required: true})
    name: string
    @Prop()
    surname: string
    @Prop({required:true})
    email : string
    @Prop({required: true})
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User);


