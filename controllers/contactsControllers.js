import {
    listContacts,
    getContactById,
    // addContact,
    removeContact,
} from "../services/contactsServices.js";

import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res) => {
    try {
        res.json({
            status: "success",
            code: 200,
            data: {
                contact: await listContacts(),
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const getOneContact = async (req, res) => {
    try {
        const { id } = req.params;
        const oneContact = await getContactById(id);
        if (!oneContact) {
            throw HttpError(404, "Not found");
        }
        res.json({
            status: "success",
            code: 200,
            data: {
                oneContact,
            },
        });
    } catch (error) {
        const { status = 500, message = "Server error" } =
            error;
        res.status(status).json({ message });
    }
};

export const deleteContact = (req, res) => {
    // removeContact,
};

export const createContact = (req, res) => {
    // addContact,
};

export const updateContact = (req, res) => {};
