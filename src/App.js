import React, {useEffect} from 'react';

import Header from './components/Header';
import JobCard from './components/JobCard';
import FilterCard from './components/FilterCard';

import ListingData from './data/data.json';

//Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {


  return (
    <Provider store={store}>
      
      <div>
        <Header/>
        
        <FilterCard/>
  
        <JobCard/>
       
      </div>
    </Provider>
  );
}

export default App;
