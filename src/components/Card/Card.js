/**
 * Author: Ved Dwivedi <ved2dwivedi@gmail.com>
 *
 * React
 *
 * This file contains the card component, please don't use it for production. 
 *
 * Copyright ©  2020-present. All rights reserved.
 *
 */

import React from 'react';
import { StarRating } from '../Star/starRating';
import css from './Card.module.css';

const Card = (props) => {
  const { prodItem } = props;

  return (
    <div className={css.gridItem}>

      {prodItem.promoted ? <div className={css.promotedTag}>
          <div className={css.content}>
            PROMOTED
          </div>
        </div>  : null}

      <div className={css.displayImage}>
        <div className={css.ratingDiv}> 
          <span><b>{prodItem.rating}</b>/5</span>
          <div>{prodItem.rating_remarks}</div>
        </div>
        <div className={css.tagDiv}>
        {(prodItem && prodItem.tags ? prodItem.tags : []).map((item, index) => {
           return <span className={css.tags}>
              {item} 
            </span> 
          })}
        </div>
        <div className={css.rankingDiv}>
          # {prodItem.ranking}
        </div>
        <img src={prodItem.image} className={css.backImg} alt={prodItem.college_name} />
      </div>

      <div className={css.descDiv}>
        <div className={css.gridDesc}>
          <div className={css.prodBrand}>
            <div>{prodItem.college_name}</div>
            <div><StarRating totalStars={5} rating={prodItem.rating} /></div>
          </div>
          <div className={css.prodTitle}>
            {(prodItem && prodItem.nearest_place ? prodItem.nearest_place : []).map((item, index) => {
            return <>
                {item} 
                {prodItem.nearest_place.length == index+1 ? null : <span> | </span>} 
              </> 
            })}
          </div>
          <div className={css.prodTitle}>
            <span className={css.matches}> 93% Match : </span>
            {prodItem.famous_nearest_places}
          </div>
          <div className={css.offerDiv}>
            <div className={css.prodTitle} style={{padding:"0.5rem", marginTop:"0rem"}}>
              {prodItem.offertext}
            </div>
          </div>
      </div>

      <div className={css.secondDiv}>
        <span className={css.prodStrikedPrice}>
            ₹ {prodItem.original_fees.toLocaleString('hi')}
        </span>
        <span className={css.discountDiv}>
          <span className={css.discImg}></span> 
          <span style={{marginLeft:"0.4rem"}}>{prodItem.discount}</span>
        </span>
        <div style={{marginTop:"0.2rem"}}>
          <span className={css.prodPrice}>{`₹ ${prodItem.discounted_fees.toLocaleString('hi')}`}</span>
        </div>
        <div className={css.feesDiv}>
          {prodItem.fees_cycle}
        </div>
        <div className={css.amentiesDiv}>
          {(prodItem && prodItem.amenties ? prodItem.amenties : []).map((item, index) => {
            return <>
              <span style={{marginLeft:"0.3rem"}}>{item} </span>
              {prodItem.amenties.length == index+1 ? null : <span style={{marginRight:"0.2rem"}}> <span className={css.discImg} style={{background :"#37b396"}}></span></span>} 
            </> 
          })}
        </div>
      </div>

      </div>
    </div>
  );
};

export default Card;
