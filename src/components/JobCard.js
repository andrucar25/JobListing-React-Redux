import React, {useEffect} from 'react';

import Card from './Card';
import data from '../data/data.json';
//REDUX
import { useSelector, useDispatch } from 'react-redux';
import {loadJobsAction} from '../actions/jobsActions';

const JobCard = () => {
    
    const dispatch = useDispatch();

    //obtener el state
    const jobs = useSelector( state => state.jobs.jobs);
    const filters = useSelector( state => state.jobs.filters);

    //cargar los trabajos 
    const loadJobs = (data) => dispatch( loadJobsAction(data));

      //Cargar y filtrar la data 
    const modifiedData = () => {
        if(filters){
        const newData = data.filter((d) => {
        
            return filters.every((key) => {
            return (
                d.role === key ||
                d.level === key ||
                d.languages.includes(key) ||
                d.tools.includes(key)
            );
            });
        });
        loadJobs(newData);
        }else{
        loadJobs(data);
        }
    }

    useEffect(() => {
        modifiedData();

    }, [filters])


    // useEffect( ()=> {
    //     const loadJobs = () => dispatch( getJobsAction());
    //     loadJobs();

    // }, []);

 


    return ( 
        <>
         <div className="grid p-16 justify-center items-center text-gray-900">
            { jobs.map( job => 
                <Card
                key={job.id}
                job={job}
                // filtering={filterListings}
                />
            ) }
        </div>
        </>
     );
}
 
export default JobCard;