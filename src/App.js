/**
 * Author: Ved Dwivedi <ved2dwivedi@gmail.com>
 *
 * React
 *
 * This file contains the homepage of demo, please don't use it for production. 
 *
 * Copyright ©  2020-present. All rights reserved.
 *
 */

import React from 'react';
import ProductList from './components/ProductList/ProductList';
import './App.css';

const App = () => {

  return(
  <div className="container">
    <span className="heading">Colleges in North India</span>
    <ProductList />
  </div>
  )
}

export default App;