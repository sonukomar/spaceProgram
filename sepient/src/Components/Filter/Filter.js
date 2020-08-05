import React from 'react';
import './Filter.css';
import Button from 'react-bootstrap/Button';
import {appConstants} from '../../contants';

const yearButton = appConstants.filter.years;
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
        props.getData(filters)
    }
    return(
        <div className="filter">
            <p id="filterSpan" data-testid="filter">{appConstants.filter['filterText']}</p>
        
            {   yearButton.map(year => 
                    <Button key={year}onClick={selectYear} variant="primary">{year}</Button>
                )
            }
        
            <br /><br />
           <p id="launch">{appConstants.filter['launch']}</p>
        <Button data-testid="launch-true "onClick={selectLunch} variant="primary">{appConstants.filter['true']}</Button>
           <Button data-testid="launch-false" onClick={selectLunch} variant="primary">{appConstants.filter['false']}</Button> 
           <br /><br />
        <p id="launch">{appConstants.filter['land']}</p>
           <Button data-testid="land-true "onClick={selectLand} variant="primary">{appConstants.filter['true']}</Button>
           <Button data-testid="land-false"onClick={selectLand} variant="primary">{appConstants.filter['false']}</Button> 
        </div>
    )
}

export default Filter;