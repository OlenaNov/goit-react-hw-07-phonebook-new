import { useSelector } from "react-redux";
import { getFilteredContacts } from "redux/selectors";
import { List, ElementContact } from "./ContactList.styled";
import Contact from "components/Contact/Contact";

const ContactList = () => {
    const contacts = useSelector(getFilteredContacts);

    return (
        <List>
            {contacts.map(contact => (
                <ElementContact key={contact.id}>
                    <Contact contact={contact} />
                </ElementContact>
            ))}
        </List>
    )
};

export default ContactList;
