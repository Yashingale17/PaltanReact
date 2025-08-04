import React from 'react'
import { useInView } from 'react-intersection-observer';
import classes from './DescSty.module.css'
import PlayersCoro from '../PlayersCoro/PlayersCoro';
import Partner1 from "./Partner1.png"
import Partner2 from "./Partner2.png"
import Partner3 from "./Partner3.png"
import Partner4 from "./Partner4.png"
import Partner5 from "./Partner5.png"
import Partner6 from "./Partner6.png"
import Partner7 from "./Partner7.png"
import Partner8 from "./Partner8.png"
import Partner9 from "./Partner9.png"
import Partner10 from "./Partner10.png"
import PaltanW from '../HomePaltanWorld/PaltanW';

const DescriptionSec = () => {
  const { ref: subscribeRef, inView: subscribeInView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const { ref: partnerRef, inView: partnerInView } = useInView({
    threshold: 0.6,
    triggerOnce: false,
  });
  const { ref: newsRef, inView: newsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  return (
    <>
      <section className={classes.MainSectionY}>
        <div className={classes.ContainerPP}>
          <div className={classes.ContentContainer}>
            <div className={classes.line}></div>
            <div className={classes.scrollDiv}>
              <h6>scroll</h6>
            </div>
            <div className={classes.OuterSec}>
              <div className={classes.InnerSec}>
                <p>
                  Puneri Paltan is currently one of the top performing teams in the Pro Kabaddi League. With a mix of unstoppable energy, honed-out skills and steely nerves, here's a force that consistently looks forward to perform better, challenge its opponents and make a difference.
                </p>
              </div>
            </div>
          </div>
          
          <PlayersCoro />
        </div>

        <PaltanW />

        <section className={classes.News}>
          <div className={`${classes.container} ${classes.NewsBanner}`}>
            <div className={`row ${classes.RowedNew}`}>
              <div className={`col-12 col-sm-12 col-md-12 ${classes.NewTxt}`}>
                <div className={classes.NewsTxtOuter}>
                  <div className={classes.NewsTxtInner}>
                    <h2
                      ref={newsRef}
                      className={newsInView ? classes.h2Animate : ''}
                    >
                      PUNERI PALTAN
                    </h2>
                    <h2 ref={newsRef}
                      className={newsInView ? `${classes.h2Animate} ${classes.subHead} ` : ''}>
                      in the NEWS
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-12 ${classes.newsBtn}`}>
              <button>Enter</button>
            </div>
          </div>
        </section>

        <div className={classes.Subscribe}>
          <div className={classes.ContainerSub}>
            <div className={`row ${classes.mainRow}`}>
              <div className={`col-md-6 col-12 col-sm-12 ${classes.title}`}>
                <h3
                  ref={subscribeRef}
                  className={subscribeInView ? classes.h3Visible : `${classes.h3Hidden} ${classes.h3Default}`}
                >
                  Subscribe to our newsletter
                </h3>

              </div>
              <div className={`col-md-4 col-12 offset-1 offset-sm-0 col-sm-8 ${classes.formGO}`}>
                <form action="Submit">
                  <div className={classes.formRow}>
                    <div className={`col-8 col-sm-10 col-md-10 ${classes.input}`}>
                      <input type="text" name='email' id='email' placeholder='Enter your email-id' />
                    </div>
                    <div className={`col-2 col-sm-2 col-md-2 ${classes.GoBtn}`}>
                      <button>Go</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.PartnerSection}>
          <div className={`${classes.container} ${classes.PartnerContainer}`}>
            <div className={`col-12 col-md-12 col-sm-12 px-0 ${classes.partnerTitle}`}>
              <h2
                ref={partnerRef}
                className={partnerInView ? classes.h2Visible : `${classes.h2hidden}`}
              >Partners</h2>
            </div>
            <div className={` d-flex justify-content-center `}>
              <div className={`col-12 col-md-2 col-sm-6 ${classes.partners}`}>
                <div>
                  <img src={Partner1} alt="Force Moters" />
                  <h6>Principal Partner</h6>
                </div>
              </div>
            </div>
            <div className={` d-flex justify-content-center `}>
              <div className={` col-md-3 col-sm-6 ${classes.partners}`}>
                <div>
                  <img src={Partner2} alt="Force Moters" />
                  <h6>Powered By</h6>
                </div>
              </div>
              <div className={` col-md-3 col-sm-6 ${classes.partners}`}>
                <div>
                  <img src={Partner3} alt="Force Moters" />
                  <h6>Associate Partner</h6>
                </div>
              </div>

            </div>
            <div className={` d-flex justify-content-center `}>
              <div className={`col-3 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner4} alt="Force Moters" />
                  <h6>Co-partner</h6>
                </div>
              </div>
              <div className={`col-3 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner5} alt="Force Moters" />
                  <h6>Co-partner</h6>
                </div>
              </div>
              <div className={`col-3 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner6} alt="Force Moters" />
                  <h6>Co-partner</h6>
                </div>
              </div>
              <div className={`col-3 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner7} alt="Force Moters" />
                  <h6>Co-partner</h6>
                </div>
              </div>
            </div>
            <div className={` d-flex justify-content-center `}>
              <div className={`col-4 col-sm-3 col-md-3 col-lg-2  ${classes.partners}`}>
                <div>
                  <img src={Partner8} alt="Force Moters" />
                  <h6>Radio partner</h6>
                </div>
              </div>
              <div className={`col-4 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner9} alt="Force Moters" />
                  <h6>Associate Partner</h6>
                </div>
              </div>
              <div className={`col-4 col-sm-3 col-md-3 col-lg-2 ${classes.partners}`}>
                <div>
                  <img src={Partner10} alt="Force Moters" />
                  <h6>Associate Partner</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default DescriptionSec
