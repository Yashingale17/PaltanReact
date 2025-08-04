import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation"; 
import "animate.css";
import axios from 'axios';
import classes from './SinglePlayerSty.module.css';
import SPBanner from './SPBanner.png';
import SPBanner2 from './SPBanner2.png';
import SinglePlayerHead from '../../Components/SinglePlayerHead/SInglePlayerHead';
import Coro from '../SinglePlayerCoro/Coro';

const Loader = () => (
  <div className={classes.loaderContainer}>
    <div className={classes.loader}></div>
  </div>
);

const PlayerDetail = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayer = async () => {
      try {
        const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_player?id=${id}`);
        setPlayer(response.data[0]);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching player details:', error);
      }
      setLoading(false);
    };

    fetchPlayer();
  }, [id]);

  const raidStrikeRate = player ? (player.total_ponints_earned / player.Matches_played) * 10 : 0;
  const tackleStrikeRate = player ? (player.total_tacle_points / player.Matches_played) * 10 : 0;

  return (
    <div className={classes.MainContainer}>
      <div className={classes.SinglePlayerBanner}>
        <img className={classes.bannerF} src={SPBanner} alt="Player Banner" />
        <img className={classes.bannerS} src={SPBanner2} alt="Player Banner" />
      </div>
      {loading ? (
        <Loader />
      ) : player ? (
        <>
          <div className={classes.PlayerDetails}>
            <div className={`container d-flex ${classes.DetailContainer}`}>
              <div style={{ "--animate-duration": "1s" }} className={`animate__animated animate__fadeInLeft ${classes.playerImage}`}>
                <img src={player.full_image} loading='lazy' alt="Single player Image" />
              </div>
              <div className={` px-3 animate__animated animate__fadeInRight ${classes.PlayerD}`}>
                <div className={` d-flex ${classes.Top}`}>
                  <div className={classes.TopOne}>
                    <SinglePlayerHead Text="jersey no." info={player.jersey_no} />
                  </div>
                  <div className={classes.TopTwo}>
                    <SinglePlayerHead Text="position" info={player.position} />
                  </div>
                </div>
                <div className={classes.detailBorder}></div>
                <div className={classes.Vitals}>
                  <SinglePlayerHead Text="vitals" />
                </div>
                <div className={classes.PersonalDetail}>
                  <table>
                    <tbody>
                      <tr>
                        <td className={classes.title}>Name</td>
                        <td className={classes.detail}>{player.name}</td>
                      </tr>
                      <tr>
                        <td className={classes.title}>Date of birth</td>
                        <td className={classes.detail}>{player.date_of_birth}</td>
                      </tr>
                      <tr>
                        <td className={classes.title}>Nationality</td>
                        <td className={classes.detail}>{player.nationality}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.StatsCon}>
            <div className='container'>
              <h2 style={{ "--animate-duration": "2.5s" }} className='animate__animated animate__bounceIn'>statistics</h2>
            </div>

            <div className={classes.OverFall}>
              <div className={classes.PlayerTitle}>
                <h3>overall</h3>
              </div>

              <div style={{ "--animate-duration": "2.5s" }} className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                <h4>{player.Matches_played}</h4>
                <h5>Matches Played</h5>
              </div>
              <div style={{ "--animate-duration": "2.5s" }} className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                <h4>{player.total_ponints_earned}</h4>
                <h5>Total Points earned</h5>
              </div>
              <div style={{ "--animate-duration": "2.5s" }} className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                <h4>{player.most_points_in_a_match}</h4>
                <h5>Most points in a match</h5>
              </div>
              <div style={{ "--animate-duration": "2.5s" }} className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                <h4>{player.not_out_percentage}</h4>
                <h5>Not out percentage</h5>
              </div>
            </div>

            <div className={classes.Raid}>
              <div className={classes.PlayerTitle}>
                <h3>Raid</h3>
              </div>

              <div className={classes.CircleRight}>
                <div className={classes.RaidCenter}>
                  <div className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                    <h4>{player.no_of_super_raids}</h4>
                    <h5>No of Superraids</h5>
                  </div>
                  <div className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                    <h4>{player.super_10s}</h4>
                    <h5>Super 10s</h5>
                  </div>
                  <div className={`'animate__animated animate__bounceIn px-3 ${classes.overFallinfo}`}>
                    <h4>{player.avg_raid_points}</h4>
                    <h5>Avg. Raid Points</h5>
                  </div>
                </div>
                <div className={classes.RaidRight}>
                  <div className={`px-3 ${classes.rightCircle}`}>
                    <div className={classes.CircularProgress}>
                      <div className={classes.circleTxt}>
                        Total Raid
                        <br />
                        <span>{player.total_ponints_earned}</span>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 ${classes.rightLeft}`}>
                    <div className={classes.rightleftOuter}>
                      <div className={classes.rightleftInner}>
                        <h6>{raidStrikeRate.toFixed(1)}%</h6>
                        <p>
                          Raid Strike
                          <br />
                          Rate
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Coro />
        </>
      ) : (
        <p>Player not found</p>
      )}
    </div>
  );
};

export default PlayerDetail;
