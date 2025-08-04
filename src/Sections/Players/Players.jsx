import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import classes from './PlayersSty.module.css';
import style from './PlayerSectionSty.module.css';
import 'animate.css';
import textBg from './textbgPlayers.png';
import BannerPlayer from './Playerpng.png';
import { getCategory1Players, getCategory2Players, getCategory3Players } from '../../Store/Action/Player-action';
import { Row, Col } from 'react-bootstrap';
import PlayerTitleComp from '../../Components/PlayerTitle/PlayerTitleComp';
import Tilt from '../../Components/Tilt/Tilt';

const PlayersComp = () => {
  const dispatch = useDispatch();
  const { category1, category2, category3 } = useSelector((state) => state.players);

  useEffect(() => {
    dispatch(getCategory1Players());
    dispatch(getCategory2Players());
    dispatch(getCategory3Players());
  }, [dispatch]);

  return (
    <div className={classes.PlayersContainer}>
      <div className={classes.PlayerBanner}>
        <div className={classes.bannerContainer}>
          <div className={classes.bannerLeft}>
            <div className={classes.left}>
              <div className={classes.LeftContent}>
                <div className={classes.content}>
                  <img className={classes.moveUpAnimation} src={textBg} alt="bg" />
                  <h1 className={classes.playerAnime}>PLAYERS</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bannerRight}>
            <div className={classes.RightContent}>
              <div className={classes.content}>
                <img className={classes.moveUpAnimation} src={BannerPlayer} alt="BannerPlayer Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.playersSection}>
        <div className={style.overLay}></div>
        <div className={style.RaiderSection}>
          <PlayerTitleComp Title="Raider" />

          <div className={`px-3 ${style.RaidersContainer}`}>
            <div className={style.Raiders}>
              <Row className={`w-100 ${style.rowCon}`}>
                {Array.isArray(category1) && category1.length > 0 ? (
                  category1.map((player, index) => {
                    const delay = `${1 + index * 0.5}s`;
                    const playerName = player.name?.split(' ') || [];
                    const firstName = playerName[0] || '';
                    const lastName = playerName.slice(1).join(' ');

                    return (
                      <Col
                        key={player.id}
                        sm={12} md={5} lg={5} xl={4}
                        className={`mb-4 d-flex justify-content-center ${style.colcon}`}
                      >
                        <Link style={{ textDecoration: "none" }} to={`/player/${player.id}`}>
                          <Tilt>
                            <div className={style.playerCard} style={{ animationDelay: delay }}>
                              <div className={style.PlayerImage}>
                                <img src={player.profile_image} alt="player" className="img-fluid" />
                              </div>
                              <div className={style.playerName}>
                                <h3 className={style.firstName}>{firstName}</h3>
                                <h3 className={style.LastName}>{lastName}</h3>
                                <h5 className={style.playerRole}>{player.position}</h5>
                              </div>
                            </div>
                          </Tilt>
                        </Link>
                      </Col>
                    );
                  })
                ) : (
                  <p>No players available.</p>
                )}
              </Row>

            </div>
          </div>
        </div>
      </div>

      <div className={style.playersSection}>
        <div className={style.DefenderSection}>
          <PlayerTitleComp Title="Defender" />
          <div className={`px-3 ${style.DefenderContainer}`}>
            <div className={style.Defender}>
              <Row className={`w-100 ${style.rowCon}`}>
                {Array.isArray(category2) && category2.length > 0 ? (
                  category2.map((player, index) => {
                    const delay = `${1 + index * 0.5}s`;

                    const playerName = player?.name?.split(' ') || [];
                    const firstName = playerName[0] || '';
                    const lastName = playerName.slice(1).join(' ');

                    return (
                      <Col
                        key={player.id}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={4}
                        className={`mb-4 d-flex justify-content-center ${style.colcon}`}
                      >
                        <Link style={{ textDecoration: "none" }} to={`/player/${player.id}`}>
                          <Tilt>
                            <div className={style.playerCard} style={{ animationDelay: delay }}>
                              <div className={style.PlayerImage}>
                                <img
                                  src={player.profile_image || 'https://via.placeholder.com/300x300?text=No+Image'}
                                  alt="player"
                                  className="img-fluid"
                                  loading="lazy"
                                />
                              </div>
                              <div className={style.playerName}>
                                <h3 className={style.firstName}>{firstName}</h3>
                                <h3 className={style.LastName}>{lastName}</h3>
                                <h5 className={style.playerRole}>{player.position || 'Unknown'}</h5>
                              </div>
                            </div>
                          </Tilt>
                        </Link>
                      </Col>
                    );
                  })
                ) : (
                  <p className="text-center w-100 py-4">No players found.</p>
                )}
              </Row>

            </div>
          </div>
        </div>
      </div>

      <div className={style.playersSection}>
        <div className={style.overLay}></div>
        <div className={style.AllSection}>
          <PlayerTitleComp Title="All Rounder" />

          <div className={`px-3 ${style.AllContainer}`}>
            <div className={style.AllRounder}>
              <Row className={`w-100 ${style.rowCon}`}>
                {Array.isArray(category3) && category3.length > 0 ? (
                  category3.map((player, index) => {
                    const delay = `${1 + index * 0.5}s`;

                    const playerName = player?.name?.split(' ') || [];
                    const firstName = playerName[0] || '';
                    const lastName = playerName.slice(1).join(' ');

                    return (
                      <Col
                        key={player.id}
                        sm={12}
                        md={5}
                        lg={5}
                        xl={4}
                        className={`mb-4 d-flex justify-content-center ${style.colcon}`}
                      >
                        <Link style={{ textDecoration: "none" }} to={`/player/${player.id}`}>
                          <Tilt>
                            <div className={style.playerCard} style={{ animationDelay: delay }}>
                              <div className={style.PlayerImage}>
                                <img
                                  src={player.profile_image || 'https://via.placeholder.com/300x300?text=No+Image'}
                                  alt="player"
                                  className="img-fluid"
                                />
                              </div>
                              <div className={style.playerName}>
                                <h3 className={style.firstName}>{firstName}</h3>
                                <h3 className={style.LastName}>{lastName}</h3>
                                <h5 className={style.playerRole}>{player.position || 'N/A'}</h5>
                              </div>
                            </div>
                          </Tilt>
                        </Link>
                      </Col>
                    );
                  })
                ) : (
                  <p className="text-center w-100 py-4">No players found.</p>
                )}
              </Row>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersComp;
