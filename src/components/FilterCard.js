import React from 'react';

import FilterItem from './FilterItem';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import {clearJobsFilterAction} from '../actions/jobsActions';



const FilterCard = () => {

    const dispatch = useDispatch();

    const filters = useSelector( state => state.jobs.filters);

    //Limpiar filtros
    const clearJobsFilter = () => dispatch(clearJobsFilterAction());
    

    return (  
        <>
         {filters.length >= 1 ? (
            <div className="relative flex justify-center items-center h-10 w-full">
            <div className=" bg-white p-5 flex flex-1 justify-start items-center w-7/12 max-w-4xl h-20 rounded-md shadow-lg">
                { filters.map(filter => 
                    <FilterItem 
                    item={filter} 
                    key={filter} 
                    />
                )}

                    <p className="px-2 m-2 clear_style hover:underline cursor-pointer" onClick={clearJobsFilter}>Clear</p>
            
            </div>       
            
            </div>
      ): null}
        </>
    );
}
 
export default FilterCard;