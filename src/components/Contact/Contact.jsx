import { deleteContactThunk } from "redux/operations";
import { DeleteItem, Name, Number } from "./Contact.styled";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from "redux/selectors";

const Contact = ({ contact: { name, phone, id } }) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            <div>
                <Name>{name}</Name>
                <Number>{phone}</Number>
            </div>
            <DeleteItem type="button" onClick={() => dispatch(deleteContactThunk(id))}>x</DeleteItem>
            {isLoading && <div>Loading...</div>  }
        </>
    )
};

export default Contact;