const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
    try {
        const result = await fs.readFile(contactsPath);
        return JSON.parse(result);
    } catch (err) {
        console.error(err.message);
    }
}

async function getContactById(contactId) {
    try {
        const contacts = await listContacts();
        contacts.map((element) => {
            if (Number(element.id) === contactId) {
                console.log(element);
                return element;
            }
        })
    } catch (err) {
        console.error(err.message);
    }
}

async function removeContact(contactId) {
    try {
        const contacts = await listContacts();
        // contacts.filter(element => Number(element.id) === contactId);
        contacts.splice(contactId - 1, 1);
    } catch (err) {
        console.error(err.message);
    }
}
async function addContact(name, email, phone) {
    try {
        const contacts = await listContacts();
        const lastElementIndex = contacts.length + 1;
        contacts.push({
            id: `${lastElementIndex}`,
            name: `${name}`,
            email: `${email}`,
            phone: `${phone}`
        })
    } catch (err) {
        console.error(err.message);
    }
}
module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};


