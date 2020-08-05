import React from "react";
import Card from "react-bootstrap/Card";
import "./ProgramCard.css";
import { appConstants } from "../../contants";

const ProgramCard = (props) => {
  return (
    <Card
      style={{
        width: "17rem",
        display: "inline-flex",
        margin: "0.5rem",
        minHeight: "20rem",
      }}
    >
      <Card.Img variant="top" src={props.program.links.mission_patch} />
      <Card.Body>
        <Card.Title>{props.program.mission_name}</Card.Title>
        <span className="card-subtext">
          <strong>{appConstants.program["missionId"]}</strong>
          <ul>
            {props.program.mission_id &&
              props.program.mission_id.map((item) => (
                <li key={item}>{item}</li>
              ))}
          </ul>
        </span>
        <span className="card-subtext">
          <strong>{appConstants.program["year"]}</strong>
          {props.program.launch_year}
        </span>
        <span className="card-subtext">
          <strong>{appConstants.program["launch"]}</strong>
          {props.program.launch_success &&
            props.program.launch_success.toString()}
        </span>
        <span className="card-subtext">
          <strong>{appConstants.program["land"]}</strong>
          {props.program.first_stage &&
            props.program.first_stage.cores[0].land_success.toString()}
        </span>
      </Card.Body>
    </Card>
  );
};

export default ProgramCard;
