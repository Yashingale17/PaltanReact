// src/components/PageNotFound.js
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import classes from './PNF.module.css';

const PageNotFound = () => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>
        <FaExclamationTriangle size={100} color="red"/>
      </div>
      <h1 className={classes.heading}>404</h1>
      <p className={classes.message}>Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className={classes.link}>Go Back to Homepage</a>
    </div>
  );
}
export default PageNotFound;