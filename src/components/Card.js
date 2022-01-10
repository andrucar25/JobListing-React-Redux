import React from 'react';

//REDUX
import { useSelector, useDispatch } from 'react-redux';
import {addFilterJobFeatureAction, updateJobsFeatureAction} from '../actions/jobsActions';

const Card = ({job}) => {

    const dispatch = useDispatch();

    const filters = useSelector( state => state.jobs.filters);

    const {company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = job;



    //Agregar el feature al filtro
    const addFeatureFilter=(skill = null) =>{
        if (!filters.includes(skill) && skill !== null)
        featureFilter(skill);
        updateJobsFilter(skill)
    }

    //Llamar a la funcion del action que agregara el feature al filtro
    const featureFilter = (skill) => dispatch(addFilterJobFeatureAction(skill));

    //Llamar a la funcion del action que actualizara los trabajos segun el feature del filtro
    const updateJobsFilter = (skill) => dispatch(updateJobsFeatureAction(skill));




    const Skills = ({skill})=>(<div className="tag rounded-md p-1 px-2 m-2 ">
        <button onClick={() => addFeatureFilter(skill)}>
            {skill}
        </button>
    </div>)

    const rules = `bg-white ${featured ? 'featured-item' : ''} max-w-4xl p-4 mb-10 shadow-lg flex justify-center items-center`;
    
    return ( 
        <>

            <div className={rules}>
                <div className="flex p-2">
                            <img src={logo} alt={company}/>
                </div>

                <div className="flex flex-col  px-4 py-2">
                    <div className="flex flex-grow">
                        <p className="mr-2 flex justify-center items-center company_name">{company}</p>
                        {job.new ? <p className="tags new-tag rounded-xl px-2 p-1 mr-1">new!</p> : null}
                    {featured ? <p className="tags featured rounded-xl px-2 p-1">featured</p> : null}
                    </div>
                    <p className="main-heading my-2 position_name">{position}</p>
                    <div className="flex flex-grow justify-between">
                        <small className="text-gray-900">{postedAt}</small>
                        <small className="text-gray-900">{contract}</small>
                        <small className="text-gray-900">{location}</small>
                    </div>
                </div>
                <div className="tags flex flex-1 justify-end">
                    {[role, level, ...languages, ...tools].map(skill => 
                    
                        <Skills
                            key={skill}
                            skill={skill}
                        />
                    )}
                </div>
            </div>
        </>
     );
}
 
export default Card;