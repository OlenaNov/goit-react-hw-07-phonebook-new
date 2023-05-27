import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from "./Filter.styled";
import { statusFilters } from "redux/constants";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from 'redux/filterSlice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectStatusFilter);

    const handleFilter = e => {
        if(e.target.value.trim()) {
            dispatch(setStatusFilter(e.target.value));
            return;
        };
        dispatch(setStatusFilter('all'));
    };

    return (
        <FilterInput 
            type="text"
            onChange={ handleFilter(e => statusFilters)} 
        />
    );
};

export default Filter;
