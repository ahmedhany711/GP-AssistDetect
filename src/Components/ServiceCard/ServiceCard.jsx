import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./ServiceCard.scss";
<<<<<<< HEAD
=======
// import ServiceDetailsPage from "../../Components/Pages/ServiceDetailsPage/ServiceDetailsPage";
// import ServiceDetails from "../../Components/ServiceDetails/ServiceDetails";
import { Link } from "react-router-dom";
>>>>>>> 8e28f0b407a25b7122303b83c3a5f28aa3de6d59

export default function ServiceCard(props) {
  return (
    <div className="serviceCard col-3">
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
      <h5 className="col-12">{props.title}</h5>
      <p>{props.description}</p>

      <div id="readMore">
        <p>READ MORE</p>
        <span>
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </div>
    </div>
  );
}
