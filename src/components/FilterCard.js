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
            <div className="relative flex  justify-center items-center h-10  lg:w-full">
            <div className=" bg-white gap-x-3 gap-y-2 p-5 flex flex-1 flex-wrap  justify-start items-center w-full lg:w-7/12 max-w-4xl h-28 lg:h-20 rounded-md shadow-lg">
                { filters.map(filter => 
                    <FilterItem 
                    item={filter} 
                    key={filter} 
                    />
                )}

                    <p className="lg:px-2 lg:m-2 clear_style hover:underline cursor-pointer" onClick={clearJobsFilter}>Clear</p>
            
            </div>       
            
            </div>
      ): null}
        </>
    );
}
 
export default FilterCard;