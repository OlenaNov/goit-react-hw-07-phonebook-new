import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Label, SubmitContact } from "./ContactForm.styled";
import { addContactThunk } from "redux/operations";

const ContactForm = () => {
        const dispatch = useDispatch();
        const contacts = useSelector(state => state.contacts.items);
        
        const controllingUniqueness = (name) => {
          return contacts.some(contact => contact.name === name)
        };

        const handleSubmit = e => {
                e.preventDefault();

                const form = e.target;
                const name = e.target.elements.name.value;
                const phone = e.target.elements.phone.value;
                if(controllingUniqueness(name)) {
                        Notify.warning(`${name} is already in contacts`);
                        return;
                };
                const dataContact = {
                        name,
                        phone,
                };
                
                dispatch(addContactThunk({ ...dataContact }))
                form.reset();
                };

                return (
                        <Form onSubmit={handleSubmit}>
                                <Label> Name
                                        <Input type="text"
                                                name="name"
                                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                                required 
                                                />
                                </Label>
                                <Label> Number
                                        <Input
                                        type="tel"
                                        name="phone"
                                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                        required
                                        />
                                </Label>
                                <SubmitContact type="submit">Add contact</SubmitContact>
                        </Form>
                )
    };

    export default ContactForm;