import * as Joi from 'joi';

export const BookSchema = Joi.object({
    name:Joi.string().required(),
    author: Joi.string().max(10),
    country : Joi.string(),
    language: Joi.string(),
    page: Joi.number(),
    year: Joi.number(),
    stockAmount: Joi.number().default(0)
}).options({
    abortEarly:false
})
