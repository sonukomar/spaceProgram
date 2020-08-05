import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header.js'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './Components/Filter/Filter';
import ProgramCard from './Components/Program/ProgramCard';
import {appConstants} from './contants';

const URL = appConstants.landing['URL'];

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
      (error) => {
        console.log(error);
      }
    )
}
  return (
    <>
      
      <div className="container-fluid">
        <div className="row">
          <Header headertext={appConstants.landing['heading']}/>
        </div>
        <div className="row">
          <div className="col-md-2 filterDiv">
            <Filter getData={generateURL}/>
          </div>
          <div className="col-md-10 programDiv">
            {
              resultData.map(item => 
                <ProgramCard program={item} key={item}/>
              )
            }
          </div>
        </div>
          <center> <h2>{appConstants.landing['developer']}</h2></center>
      </div>
    </>
  );
}

export default App;
