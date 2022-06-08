// import { IsNotEmpty, IsString, IsNumber, isNotEmpty, isString } from "class-validator"
// import { ObjectId } from "mongoose"
// export class CreateBookDto {
//     @IsString()
//     @IsNotEmpty()
//     readonly name: string;
//     @IsString()
//     readonly author: string;
//     readonly country: string;
//     readonly language : string;
//     @IsNumber()
//     readonly page : Number;
//     readonly year : Number
//     @IsNumber()
//     @IsNotEmpty()
    
//     readonly stockAmount : Number

// }


export class CreateBookDto {

    public name : string;
    public author : string;
    public country : string;
    public language : string;
    public page : number;
    public year : number;
    public stockAmount : number;

}
