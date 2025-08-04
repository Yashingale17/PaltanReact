import React from 'react'
import { Container } from 'react-bootstrap';
import classes from './FooterSty.module.css';
import FooterImg from './FootImg1.png';

const Footer = () => {
  return (
    <>
      <div className={classes.Footer}>
        <Container className={`px-2 ${classes.FooterContainer}`}>
          <div className={`d-flex justify-content-between ${classes.FooterContent}`}>
            <div className={`mt-2 px-3 ${classes.CopyRight}`}>
              <h6>Copyright © 2025 Puneri Paltan</h6>
            </div>
            <div className={` d-flex align-items-center px-3 ${classes.FooterSocial}`}>
              <a href="https://facebook.com" className="icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="icon">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="icon">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://youtube.com" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>

            <div className={` px-3 ${classes.FooterImage}`}>
              <a href="https://www.digitallatte.in/" target='blank'>
              <div className={classes.imageContent}>
                <div className={classes.imgTxt}>
                  <p>Managed</p>
                  <p>By</p>
                </div>
                <img src={FooterImg} alt="Digital" />
              </div>
              </a>  
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer
