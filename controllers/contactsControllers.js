import * as contactsServices from "../services/contactsServices.js";

import {
    updateContactSchema,
    createContactSchema,
} from "../schemas/contactsSchemas.js";

import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
    try {
        const contact =
            await contactsServices.listContacts();
        res.json(contact);
    } catch (error) {
        next(error);
    }
};

export const getOneContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result =
            await contactsServices.getContactById(id);
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const deleteContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contactsServices.removeContact(
            id
        );
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const createContact = async (req, res, next) => {
    try {
        const { error } = createContactSchema.validate(
            req.body
        );
        if (error) {
            throw HttpError(400, error.message);
        }
        const { name, email, phone } = req.body;
        const result = await contactsServices.addContact(
            name,
            email,
            phone
        );
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

export const updateContact = async (req, res, next) => {
    try {
        console.log(req.body);
        const { error } = updateContactSchema.validate(
            req.body
        );
        if (error) {
            throw HttpError(400, error.message);
        }
        const { id } = req.params;
        const result = await contactsServices.updateById(
            id,
            req.body
        );
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};

export const favoriteContact = async (req, res, next) => {
    try {
        const { error } = updateContactSchema.validate(
            req.body
        );
        if (error) {
            throw HttpError(400, error.message);
        }
        const { id } = req.params;
        const result =
            await contactsServices.updateStatusContact(
                id,
                req.body
            );
        if (!result) {
            throw HttpError(404, "Not found");
        }
        res.json(result);
    } catch (error) {
        next(error);
    }
};
