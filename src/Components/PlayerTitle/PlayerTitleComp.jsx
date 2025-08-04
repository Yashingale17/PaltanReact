import React from 'react'
import classes from './PlayerTitle.module.css'

const PlayerTitleComp = ({Title}) => {
  return (
    <>
      <div className={classes.PlayerTitle}>
        <h3>{Title}</h3>
      </div>
    </>
  )
}

export default PlayerTitleComp
