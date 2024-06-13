import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRightAlt } from '@fortawesome/free-solid-svg-icons';
import "./ReviewCard.scss";


export default function ReviewCard(props) {
  const maxNumOfStars = 5;
  const numOfGrayStars = maxNumOfStars - props.numOfStars;
  
  const grayStars = Array(numOfGrayStars).fill(
    <FontAwesomeIcon icon={faStar} className="gray-star" style={{color:"gray"}} />
  );
  
  const yellowStars = Array(props.numOfStars).fill(
    <FontAwesomeIcon icon={faStar} className="yellow-star" style={{color:"#f1c644"}} />
  ).reverse(); // Reverse the yellow stars array

  return (
    <div className='review_card col-3'>
      <div className='stars'>
        {yellowStars.concat(grayStars)} {/* Concatenate yellowStars before grayStars */}
      </div>
      <p>{props.description}</p>

      <div className='reviewerDetails col-12'>
        <div className='reiewerImg col-3'>
          <img src={props.img} alt="Reviewer" />
        </div>
        <div className='reviewInf col-8'>
          <span>{props.name}</span>
          <p>{props.job}</p>
        </div>

        <div className='faQuote'>
          <FontAwesomeIcon icon={faQuoteRightAlt} />
        </div>

      </div>

    </div>
  );
}
