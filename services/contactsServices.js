import Contact from "../models/Contacts.js";

export const listContacts = () => Contact.find();

export const getContactById = async (contactId) => {
    const data = await Contact.findById(contactId);
    return data;
};

export const addContact = (name, email, phone) =>
    Contact.create({ name, email, phone });

export const removeContact = (contactId) =>
    Contact.findByIdAndDelete(contactId);

export const updateById = (id, data) =>
    Contact.findByIdAndUpdate(id, data);

export const updateStatusContact = (id, body) =>
    Contact.findByIdAndUpdate(id, body);
