import React from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';

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


    const [width, setWidth] = useState(0);

    //Responsive
    useLayoutEffect(() => {
        function updateWidth(){
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidth);
        updateWidth();
    }, )



    const Skills = ({skill})=>(<div className="tag rounded-md p-1 px-2 m-2 ">
        <button onClick={() => addFeatureFilter(skill)}>
            {skill}
        </button>
    </div>)

    const rules = `bg-white ${featured ? 'featured-item' : ''}  w-full lg:w-10/12 p-4 my-10 shadow-lg flex md:justify-center items-center`;
    

    return ( 
        <>

            {width <= 1023 ?(
                <div className='relative lg:static w-11/12 lg:max-w-4xl '>
                    <div className={rules}>
                        <div className="absolute left-9 top-0">
                                    <img src={logo} alt={company} className='h-12'/>
                        </div>

                    <div className="flex flex-col  px-4 py-2 ">
                        <div className="flex md:flex-grow w-full">
                            <p className="mr-2 flex justify-center items-center company_name">{company}</p>
                            {job.new ? <p className="tags new-tag rounded-xl px-2 p-1 mr-1">new!</p> : null}
                        {featured ? <p className="tags featured rounded-xl px-2 p-1">featured</p> : null}
                        </div>
                        <p className="main-heading my-2 position_name">{position}</p>
                        <div className="flex justify-start  md:flex-grow md:justify-between  border-b-2 border-black border-solid md:border-none">
                            <small className="text-gray-900 mr-5 md:mr-0">{postedAt}</small>
                            <small className="text-gray-900 mr-5 md:mr-0">{contract}</small>
                            <small className="text-gray-900">{location}</small>
                        </div>
                         {width <=767 && (
                                <div className="tags flex flex-wrap w-full">
                                {[role, level, ...languages, ...tools].map(skill => 
                                
                                    <Skills
                                        key={skill}
                                        skill={skill}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                   {width >=768 && (
                        <div className="tags flex flex-1 justify-end">
                        {[role, level, ...languages, ...tools].map(skill => 
                        
                            <Skills
                                key={skill}
                                skill={skill}
                            />
                        )}
                    </div>
                   )}
                </div>
                </div>
            ):(<div className={rules}>
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
            </div>)}
        </>
     );
}
 
export default Card;