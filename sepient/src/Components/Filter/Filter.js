import React, { useState, useEffect } from 'react';
import './Filter.css';
import Button from 'react-bootstrap/Button'
import { propTypes } from 'react-bootstrap/esm/Image';
const yearButton = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011','2012','2013','2014','2015'

]
const filters = {};
const Filter = (props) => {

    const selectYear = (e) => {
        fetchDataFromAPI(filters.date = (e.currentTarget.innerText).toLowerCase());   
    }
    const selectLunch = (e) => {
        fetchDataFromAPI(filters.launch = (e.currentTarget.innerText).toLowerCase());
    }
    const selectLand = (e) => {
        fetchDataFromAPI(filters.land = (e.currentTarget.innerText).toLowerCase());
    }
    const fetchDataFromAPI = () => {
        debugger;
        props.getData(filters)
    }
    return(
        <div className="filter">
            <p id="filterSpan">{'Filters'}</p>
        
            {   yearButton.map(year => 
                    <Button onClick={selectYear} variant="primary">{year}</Button>
                )
            }
        
            <br /><br />
           <p id="launch">Successful Launch</p>
           <Button onClick={selectLunch} variant="primary">True</Button>
           <Button onClick={selectLunch} variant="primary">False</Button> 
           <br /><br />
           <p id="launch">Successful Landing</p>
           <Button onClick={selectLand} variant="primary">True</Button>
           <Button onClick={selectLand} variant="primary">False</Button> 
        </div>
    )
}

export default Filter;