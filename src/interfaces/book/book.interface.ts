
import { Document } from "mongoose";
export interface IBook extends Document {
    readonly name: string;
    readonly author: string;
    readonly country: string;
    readonly language: string;
    readonly page: number;
    readonly year: number;
    readonly stockAmount: number;


}