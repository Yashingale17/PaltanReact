import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PaltanWorldSwitchSty.module.css'


const PaltanWorldSwitch = ({ image1, image2, image3, h1, h2, h3 , path1 , path2 ,path3 }) => {
  return (
    <div>

      <div className={`container-fluid ${classes.Containerr}`}>
        <div className={classes.Overlay}>
        </div>
        <div className={`row ${classes.SwitchLink}`}>
          <div className={`col-md-4 ${classes.switchLinkContent}`} style={{ padding: "0" }}>
            <Link style={{ textDecoration: "none" }} to={path1}>
              <div className={`${classes.switchImg}`} style={{ backgroundImage: `url(${image1})` }}>
                <div className={classes.switch}>
                  <h4>{h1}</h4>
                </div>
              </div>
            </Link> 
          </div>


          <div className="col-md-4" style={{ padding: "0" }}>
            <Link style={{ textDecoration: "none" }} to={path2}>
              <div className={`${classes.switchImg}`} style={{ backgroundImage: `url(${image2})` }}>
                <div className={classes.switch}>
                  <h4>{h2}</h4>
                </div>
              </div>
            </Link>
          </div>

          <div className={`col-md-4`} style={{ padding: "0" }}>
            <Link style={{ textDecoration: "none" }} to={path3}>
              <div className={`${classes.switchImg}`} style={{ backgroundImage: `url(${image3})` }}>
                <div className={classes.switch}>
                  <h4>{h3}</h4>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaltanWorldSwitch
