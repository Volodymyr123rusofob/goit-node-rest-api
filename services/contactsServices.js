// !=================
// import fs from "fs/promises";
// import path from "path";
// import { nanoid } from "nanoid";
// const contactsPath = path.resolve("db", "contacts.json");

// const updateContacts = (contacts) =>
//     fs.writeFile(
//         contactsPath,
//         JSON.stringify(contacts, null, 2)
//     );
import Contact from "../models/Contacts.js";
// !=================

// @=================
export const listContacts = () => Contact.find();

// export const listContacts = async () => {
//     const contact = await fs.readFile(contactsPath);
//     return JSON.parse(contact);
// };
// @=================

// $=================
export const getContactById = async (contactId) => {
    const data = await Contact.findById(contactId);
    return data;
};

// export const getContactById = async (contactId) => {
//     const contacts = await listContacts();
//     const contact = contacts.find(
//         (item) => item.id === contactId
//     );
//     return contact || null;
// };
// $=================
// %=================
export const addContact = (name, email, phone) =>
    Contact.create({ name, email, phone });

// export const addContact = async (name, email, phone) => {
//     const contacts = await listContacts();
//     const newContact = {
//         id: nanoid(),
//         name,
//         email,
//         phone,
//     };
//     contacts.push(newContact);
//     await updateContacts(contacts);
//     return newContact;
// };
// %=================
// ^=================

export const removeContact = (contactId) =>
    Contact.findByIdAndDelete(contactId);

// export const removeContact = async (contactId) => {
//     const contacts = await listContacts();
//     const contact = contacts.findIndex(
//         (item) => item.id === contactId
//     );
//     if (contact === -1) {
//         return null;
//     }
//     const [result] = contacts.splice(contact, 1);
//     updateContacts(contacts);
//     return result;
// };
// ^=================
// &=================

export const updateById = (id, data) =>
    Contact.findByIdAndUpdate(id, data);
// export const updateById = async (id, data) => {
//     const contacts = await listContacts();
//     const index = contacts.findIndex(
//         (item) => item.id === id
//     );
//     if (index === -1) {
//         return null;
//     }
//     contacts[index] = { ...contacts[index], ...data };
//     await updateContacts(contacts);

//     return contacts[index];
// };
// &=================
export const updateStatusContact = (id, body) =>
    Contact.findByIdAndUpdate(id, body);
