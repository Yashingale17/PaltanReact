import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AOS from "aos";
import Slider from 'react-slick';
import classes from './PlayersCoroSty.module.css';
import style from './merchandiseSty.module.css'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { getCategory1Players, getCategory2Players, getCategory3Players } from "../../Store/Action/Player-action";
import merchardise from './merchandiseImg1.png'
import Ticket from './TIcketImg1.png'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PlayersCoro = () => {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  const category1Players = useSelector((state) => state.players.category1);
  const category2Players = useSelector((state) => state.players.category2);
  const category3Players = useSelector((state) => state.players.category3);

  const [players, setPlayers] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    dispatch(getCategory1Players());
    dispatch(getCategory2Players());
    dispatch(getCategory3Players());
  }, [dispatch]);

  useEffect(() => {
    const allPlayers = [...(category1Players || []), ...(category2Players || []), ...(category3Players || [])];

    const uniquePlayers = allPlayers.filter(
      (player, index, self) => index === self.findIndex((p) => p.id === player.id)
    );

    setPlayers(uniquePlayers);
  }, [category1Players, category2Players, category3Players]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1350,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Ensures animation happens only once
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className={classes.SliderSection}>
        <div className={`container-fluid ${classes.ContentContainer}`}>
          <div className={`col-md-4 col-sm-12 col-12 ${classes.Title}`}>
            <div className={classes.outerTi}>
              <div className={classes.InnerTi}>
                <h2>Players</h2>
              </div>
            </div>
          </div>

          <div className={`col-lg-8 col-md-12 col-sm-12 col-12 px-0 ${classes.SpecificW}`}>
            <div className={classes.sliderContainer}>
              <button className={classes.pre} onClick={() => sliderRef.current?.slickPrev()}>
                <FaCaretLeft />
              </button>

              <div className={classes.SilkList}>
                <Slider ref={sliderRef} {...settings} className={classes.SilkCon}>
                  {players.map((player, index) => {
                   const [firstName = '', ...lastName] = (player.name || '').split(/\s+/);
                    const isLeftActive = index === currentSlide % players.length;
                    return (
                      <div key={player.id} className={`${classes.sliderItem} ${isLeftActive ? classes.activeSlide : ''}`}>
                         <Link style={{ textDecoration: "none" }} to={`/player/${player.id}`}>
                         <div className={classes.playerDetails}>
                          <div className={classes.div}>
                            <div className={classes.playerimg}>
                              <img
                                src={player.profile_image}
                                alt={player.name}
                                loading="lazy"
                                style={{ opacity: isLeftActive ? 1 : 0.4, transform: isLeftActive ? 'scale(1.1)' : 'scale(1)' }}
                              />
                            </div>
                            <div className={classes.PlayerName}>
                              <h3 style={{ textAlign: 'center' }} className={classes.FName}>{firstName}</h3>
                              <h3 style={{ textAlign: 'center' }} className={classes.SName}>{lastName.join(" ")}</h3>
                              <h5 style={{ textAlign: 'center' }} className={classes.Position}>{player.position}</h5>
                            </div>
                          </div>
                        </div>
                         </Link>
                      </div>
                    );
                  })}
                </Slider>
              </div>

              <button className={classes.next} onClick={() => sliderRef.current?.slickNext()}>
                <FaCaretRight />
              </button>
            </div>
          </div>

          <Link to='/Players'>
            <div className={`col-md-8 col-sm-7 ${classes.knowMoreBtn}`}>
              <button>Enter</button>
            </div>
          </Link>
        </div>
        <div className={style.merchandiseTicketSction}>
          <div className={`${style.Container}`}>
            <div className={style.ContentContainer}>
              <div className={style.left}>
                <div className={style.MImage}>
                  <img src={merchardise} alt="merchardise" />
                </div>
              </div>
              <div className={style.right}>
                <img src={Ticket} alt="Ticket" />
              </div>
              <a href="https://in.bookmyshow.com/" target='_blank'>
                <div data-aos="fade-right" className={style.BuyTicket}>
                  <button>Buy Tickets <FaCaretRight /></button>
                </div>
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default PlayersCoro;