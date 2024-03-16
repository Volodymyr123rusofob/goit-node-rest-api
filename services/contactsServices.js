import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
const contactsPath = path.resolve("db", "contacts.json");

const updateContacts = (contacts) =>
    fs.writeFile(
        contactsPath,
        JSON.stringify(contacts, null, 2)
    );

export const listContacts = async () => {
    const contact = await fs.readFile(contactsPath);
    return JSON.parse(contact);
};

export const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find(
        (item) => item.id === contactId
    );
    return contact || null;
};

export const addContact = async (name, email, phone) => {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
};

export const removeContact = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.findIndex(
        (item) => item.id === contactId
    );
    if (contact === -1) {
        return null;
    }
    const [result] = contacts.splice(contact, 1);
    updateContacts(contacts);
    return result;
};

export const updateById = async (id, data) => {
    const contacts = await listContacts();
    const index = contacts.findIndex(
        (item) => item.id === id
    );
    if (index === -1) {
        return null;
    }
    contacts[index] = { ...contacts[index], ...data };
    await updateContacts(contacts);

    return contacts[index];
};
