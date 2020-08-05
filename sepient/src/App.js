import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter/Filter';
import ProgramCard from './Components/Program/ProgramCard';

const URL = 'https://api.spaceXdata.com/v3/launches?limit=50';

function App() {

const [resultData, setResultData] = useState([]);

useEffect(() => {
    fetchData();
},[])

const generateURL = (data) => {
  let url ;
  if(data.date && data.launch && data.land){
    url = URL+'launch_success='+data.launch+'land_success='+data.land+'launch_year='+data.date;
  }
  else if(data.date){
    url = URL+'&'+'launch_year='+data.date;
  }
  else if(data.land){
    url = URL+'&'+'land_success='+data.land;
  }
  else if(data.launch){
    url = URL+ '& '+'launch_success='+data.launch;
  }
  else{
    url = URL;
  }

  fetchData(url);
}

const fetchData = (url = URL) => {
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        setResultData(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        alert('error');
      }
    )
}
  return (
    <>
      
      <div className="container-fluid">
        <div className="row">
          <Header headertext={'SpaceX Launch Programs'}/>
        </div>
        <div className="row">
          <div className="col-md-2 filterDiv">
            <Filter getData={generateURL}/>
          </div>
          <div className="col-md-10 programDiv">
            {
              resultData.map(item => 
                <ProgramCard program = {item}/>
              )
            }
          </div>
        </div>
       <center> <h2>Developed By: Sonu Kumar</h2></center>
      </div>
    </>
  );
}

export default App;
