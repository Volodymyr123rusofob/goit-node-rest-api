import Joi from "joi";

export const createContactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().optional(),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    favorite: Joi.boolean().optional(),
})
    .min(1)
    .message("Body must have at least one field");

export const updateStatusSchema = Joi.object({
    favorite: Joi.boolean().required(),
});
