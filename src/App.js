import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  // initilize the tours with data
  const [tours,setTours]=useState(data)

  function removeTour(id){
    // newTours madhe tech tour yetil jyanchi id dileyya id peksha different ahe 
    const newTours=tours.filter(tour=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length===0){
      return(
        <div className="refresh">
            <h2>No Tours Left</h2>
            <button className="btn-white"  onClick={()=>setTours(data)}>
                 Refresh
            </button>
        </div>
      );
  }

  return (

    <div className="app">
    
    {/* custom component  tours*/}
    {/* passing tours in props */}
    <Tours tours={tours} removeTour={removeTour} > </Tours>
    </div>
  )
};

export default App;
