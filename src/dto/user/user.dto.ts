import * as Joi from 'Joi';


export const UserSchema = Joi.object({
    name: Joi.string(),
    surname : Joi.string(),
    email: Joi.string(),
    password : Joi.string().min(6)
})