import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PaltanWorldSty.module.css'
import Banner1 from './PaltanWorld1.png'
import Banner2 from './PaltanWorld2.png'
import image3 from './PaltanWorld3.png'
import image4 from './PaltanWorld4.png'

const PaltanWorld = () => {
  return (
    <>
      <div className={classes.PaltanWorldContainer}>
        <div className={classes.BannerContainer}>
          <img className={classes.Banner1} src={Banner1} alt="PaltanWorld Banner" />
          <img className={` ${classes.Banner2}`} src={Banner2} alt="PaltanWorld Banner" />
        </div>

        <div className={` d-flex flex-wrap ${classes.PaltanWorldContent}`}>
        <Link className={` col-md-6 ${classes.WorldLink}`} style={{textDecoration:"none"}} to='/PaltanTv'>
            <div className={` col-md-12 ${classes.World}`} style={{ backgroundImage: `url(${image3})` }}>
              <div className={classes.outer}>
                <div className={classes.inner}>
                  <h3>Puneri tv</h3>
                </div>
              </div>
            </div>
          </Link>
          <Link className={` col-md-6 ${classes.WorldLink}`} style={{textDecoration:"none"}} to='/Gallery'>
            <div className={` col-md-12 ${classes.World}`} style={{ backgroundImage: `url(${image4})` }}>
              <div className={classes.outer}>
                <div className={classes.inner}>
                  <h3>Gallery</h3>
                </div>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </>
  )
}

export default PaltanWorld
