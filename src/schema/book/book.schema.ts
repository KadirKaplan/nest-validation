import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";

@Schema()

export class Book {
    @Prop({ required: true })
    name: string;
    @Prop()
    author : string;
    @Prop()
    country : string;
    @Prop()
    language: string;
    @Prop()
    page : Number;
    @Prop()
    year : Number;
    @Prop({default: 0 , required: true})
    stockAmount: Number
}

export const BookSchema = SchemaFactory.createForClass(Book);