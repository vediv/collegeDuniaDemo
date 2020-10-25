/**
 * Author: Ved Dwivedi <ved2dwivedi@gmail.com>
 *
 * React
 *
 * This file contains the ProductList componenet of demo, please don't use it for production. 
 *
 * Copyright ©  2020-present. All rights reserved.
 *
 */

import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import useIntersect from '../../useIntersect';
import data from '../../constant/sampleData';
import css from './ProductList.module.css';

const ProductList = () => {

    const [loader, setLoader] = useState(false);
    const [page, setPage] = useState(1);
    const [loadRef, entry] = useIntersect({
        rootMargin: '0px 0px 0px 0px',
        threshold: 1,
      });

    const list = (data.collegeData && data.collegeData.colleges ? data.collegeData.colleges : []).slice(0, page*10).map((item, index) => {
        return(
            <Card prodItem={item} />
        );
    });

    useEffect(() => {
        if (entry.intersectionRatio === 1) {
            setLoader(true);
            setTimeout(() => {setPage(page + 1)}, 1000); // Using setTimeout to show the loader, as per the assignment
        }
      }, [entry.intersectionRatio]);

    return(
    <>
        <div className={css.gridView}>
            {(data.collegeData && data.collegeData.colleges && data.collegeData.colleges.length) ? list : "No data Found" }
        </div>
        <div ref={loadRef}/> 
        {(data.collegeData.colleges.length > (page * 10) && loader) ? <div style={{marginTop:"1rem"}}> Loading ... </div> : null}
    </>
    );
}

export default ProductList;