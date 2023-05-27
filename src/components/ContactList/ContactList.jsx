import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { List, ElementContact } from "./ContactList.styled";
import Contact from "components/Contact/Contact";

const ContactList = () => {
    const contacts = useSelector(selectVisibleContacts);

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
