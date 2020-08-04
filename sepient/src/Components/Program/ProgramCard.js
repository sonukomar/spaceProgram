import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './ProgramCard.css';


const ProgramCard = (props) => {
    return (
        <Card style={{width:'17rem',display:'inline-flex',margin:'0.5rem',minHeight:'20rem' }}>
            <Card.Img variant="top" src={props.program.links.mission_patch} />
            <Card.Body>
                 <Card.Title>{props.program.mission_name}</Card.Title>
                <span className='card-subtext'>
                    <strong>Mission ids:</strong> 
                    <ul>
                    {props.program.mission_id && props.program.mission_id.map( item => <li>{item}</li> )} 
                    </ul>
                    
                </span>
                <span className='card-subtext'>
                    <strong>Launch Year:</strong> {props.program.launch_year} 
                </span>
                <span className='card-subtext'>
                    <strong>Successful Launch:</strong> {props.program.launch_success && props.program.launch_success.toString()}
                </span>
                <span className='card-subtext'>
                    <strong>Successful Landing:</strong> {props.program.first_stage && props.program.first_stage.cores[0].land_success.toString()}
                </span>
            </Card.Body>
        </Card>
    )

}

export default ProgramCard;
