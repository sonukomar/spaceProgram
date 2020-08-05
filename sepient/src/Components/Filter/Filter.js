import React from 'react';
import './Filter.css';
import Button from 'react-bootstrap/Button';
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
            <p id="filterSpan" data-testid="filter">{'Filters'}</p>
        
            {   yearButton.map(year => 
                    <Button key={year}onClick={selectYear} variant="primary">{year}</Button>
                )
            }
        
            <br /><br />
           <p id="launch">Successful Launch</p>
           <Button data-testid="launch-true "onClick={selectLunch} variant="primary">True</Button>
           <Button data-testid="launch-false" onClick={selectLunch} variant="primary">False</Button> 
           <br /><br />
           <p id="land">Successful Landing</p>
           <Button data-testid="land-true "onClick={selectLand} variant="primary">True</Button>
           <Button data-testid="land-false"onClick={selectLand} variant="primary">False</Button> 
        </div>
    )
}

export default Filter;