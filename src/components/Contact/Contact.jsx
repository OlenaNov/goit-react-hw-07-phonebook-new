import { deleteContact } from "redux/operations";
import { DeleteItem, Name, Number } from "./Contact.styled";
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
                <>
                    <Name>{contact.name}</Name>
                    <Number>{contact.number}</Number>
                    <DeleteItem type="button" onClick={handleDelete}>x</DeleteItem>
                </>
    )
};

export default Contact;