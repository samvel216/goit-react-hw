const contacts = require("./contacts");
const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const contactsList = await contacts.listContacts();
            console.log(contactsList)
            break;

        case "get":
            const getContactById = await contacts.getContactById(id);
            console.log(getContactById)
            break;

        case "add":
            const addContact = await contacts.addContact(id);
            console.log(addContact)
            break;

        case "remove":
            const removeContact = await contacts.removeContact(name, email, phone);
            console.log(removeContact)
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

invokeAction(argv);