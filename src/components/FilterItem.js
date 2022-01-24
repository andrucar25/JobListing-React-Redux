import React from 'react';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import {removeFilterAction} from '../actions/jobsActions';


const FilterItem = ({item}) => {

    
    const dispatch = useDispatch();

    //Remover 1 item del filtro
    const removeFilter = (item) => dispatch(removeFilterAction(item));


    return ( 

      <>
           <div className='flex flex-row'>
           <span
                className="tag_filter rounded-l-md p-1 px-2" 
            >
                {item}
            </span>
            <div className="delete_div rounded-r-md p-3 h-2 w-2 mr-4" onClick={() => removeFilter(item)} />
           </div>
        </>
       
     );
}
 
export default FilterItem;