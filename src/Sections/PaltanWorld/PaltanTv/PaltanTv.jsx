import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import classes from './PaltanTvSty.module.css';
import textbg from '../Gallery/galleryBanner2.png';
import player from './Tvbg2.png';
import PlayBtn from './Tvbg3.png';
import image4 from '../../PaltanWorld/PaltanWorld4.png';
import image5 from '../../PaltanWorld/PaltanWorld5.png';
import image6 from '../../PaltanWorld/PaltanWorld6.png';
import PaltanWorldSwitch from '../../../Components/PaltanWordSwitch/PaltanWorldSwitch';

const PaltanTv = () => {
  const [defaultTV, setDefaultTV] = useState(7);
  const [TVData, setTVData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  window.scrollTo(0, 0);

  useEffect(() => {
    const fetchTv = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=${defaultTV}`);
        setTVData(response.data);
      } catch (error) {
        console.error('Error in fetching data', error);
      }
      setLoading(false);
    };

    fetchTv();
  }, [defaultTV]);

  const handleThumbnailClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      <div className={classes.PaltanTVBanner}>
        <div className={classes.PaltanTVContainer}>
          <div className={classes.bannerLeft}>
            <div className={classes.left}>
              <div className={classes.LeftContent}>
                <div className={classes.content}>
                  <img className={classes.moveUpAnimation} src={textbg} alt="bg" />
                  <h1 className={classes.playerAnime}>
                    Punari <br /> TV
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bannerRight}>
            <div className={classes.RightContent}>
              <div className={classes.content}>
                <img className={classes.moveUpAnimation} src={player} alt="BannerPlayer Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.SeasonContiner}>
        <div className={classes.seasons}>
          <Container>
            <Row>
              <Col xs={12}>
                <ul className="m-0 p-0 d-flex flex-wrap justify-content-center align-items-center gap-3 list-unstyled text-center">
                  <li
                    className="px-3 py-2 border rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      setDefaultTV(7);
                    }}
                  >
                    Season 11
                  </li>
                  <li
                    className="px-3 py-2 border rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      setDefaultTV(6);
                    }}
                  >
                    Season 10
                  </li>
                  <li
                    className="px-3 py-2 border rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      setDefaultTV(5);
                    }}
                  >
                    Season 9
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Container fluid className={`px-3 ${classes.SeasonContent}`}>
          <Row className="d-flex">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: '200px' }}>
                <Spinner
                  animation="border"
                  role="status"
                  style={{ color: '#ff7500', width: '3rem', height: '3rem' }}
                >
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : Array.isArray(TVData) && TVData.length > 0 ? (
              TVData.map((season, index) => (
                <Col sm={12} md={6} lg={6} key={index} className="mb-4 md:mb-0 p-0">
                  <div className={`px-3 ${classes.seasonContentBox}`}>
                    <div className={classes.PlayBtn} onClick={() => handleThumbnailClick(season.url)}>
                      <img src={PlayBtn} alt="PlayBtn" />
                    </div>
                    <div className={classes.img} onClick={() => handleThumbnailClick(season.url)}>
                      <img
                        className="col-md-12"
                        src={`https://img.youtube.com/vi/${season.url}/hqdefault.jpg`}
                        alt="Thumbnail"
                      />
                    </div>
                    <div className={classes.titles}>
                      <h3>{season.name}</h3>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
              <p>No data available</p>
            )}
          </Row>
        </Container>
      </div>

      {selectedVideo && (
        <div className={classes.videoModal}>
          <div className={classes.modalContent}>
            <button className={classes.closeButton} onClick={handleCloseVideo}>
              X
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <PaltanWorldSwitch
        image1={image4}
        image2={image6}
        image3={image5}
        h2="wallpapers"
        h3="blogs"
        h1="Gallery"
        path1={'/Gallery'}
        path2={'/'}
        path3={'/'}
      />
    </div>
  );
};

export default PaltanTv;
