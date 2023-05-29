import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from "./Filter.styled";
import { selectFilter } from "redux/selectors";
import { filterContacts } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const visibleContacts = e => {
        dispatch(filterContacts(e.target.value));
    };

    return (
        <FilterInput
            name="filter"
            type="text"
            value={filter}
            onChange={visibleContacts}
            placeholder='' 
        />
    );
};

export default Filter;
