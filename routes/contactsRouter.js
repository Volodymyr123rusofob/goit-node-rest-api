import express from "express";
import {
    getAllContacts,
    getOneContact,
    deleteContact,
    createContact,
    favoriteContact,
    updateContact,
} from "../controllers/contactsControllers.js";

import isValidId from "../middlewares/isValidId.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", isValidId, getOneContact);

contactsRouter.delete("/:id", isValidId, deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", isValidId, updateContact);

contactsRouter.patch(
    "/:id/favorite",
    isValidId,
    favoriteContact
);

export default contactsRouter;
