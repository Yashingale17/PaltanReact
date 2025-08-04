import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import classes from './PaltanWSty.module.css';
import paltanWorld from './PW2.png';
import paltanWorld2 from './PW3.png';
import dustLeft from './PW6.png';
import RightDust from './PW5.png';
import blind from './PW4.png';

const PaltanW = () => {

  const { ref: PWAnimateH1, inView: PWAnimateH1InView } = useInView({ threshold: 0.1, triggerOnce: false });
  const { ref: PWAnimateH2, inView: PWAnimateH2InView } = useInView({ threshold: 0.1, triggerOnce: true });

  const { ref: dusts, inView: dustInVIew } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      <section className={classes.PaltanWSection}>
        <div className={classes.ContainerWorld}>
          <div className={`container-fluid`}>
            <div className={`row`}>
              <div className={`col-12 px-0`}>
                <img ref={PWAnimateH2} src={paltanWorld} className={PWAnimateH2InView ? `${classes.ResponsivePaltanW1}` : ''} alt="Pro Kabaddi" />
                <img className={`${classes.blind}`} src={blind} alt="Pro Kabaddi" />
                <img className={classes.ResponsivePaltanW2} src=
                  {paltanWorld2} alt="Pro kabaddi Responsive" />


                <img ref={dusts}
                  className={dustInVIew ? `${classes.RightDust} ${classes.dustAnimate}` : classes.LeftDust} src={RightDust} alt="Right dust" />


                <img ref={dusts}
                  className={dustInVIew ? `${classes.LeftDust} ${classes.dustAnimate}` : classes.LeftDust} src={dustLeft} alt="Left dust" />


                <div className={`${classes.WorldTxt}`}>
                  <h2 ref={PWAnimateH1} className={PWAnimateH1InView ? classes.Animate : ''}>PALTAN</h2>
                  <h2 ref={PWAnimateH1} className={PWAnimateH1InView ? `${classes.Animate2} ${classes.WhiteTxt}` : classes.WhiteTxt}>World</h2>
                  <Link to='PaltanWorld'>
                    <div className={`${classes.newsBtn}`}>
                      <button>Enter</button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}

export default PaltanW;
