import React from 'react'
import classes from './singlePHead.module.css'

const SinglePlayerHead = ({Text , info}) => {
  return (
    <div className={classes.Container}>
      <h5>{Text}</h5>
      <h6>{info}</h6>
    </div>
  )
}

export default SinglePlayerHead
