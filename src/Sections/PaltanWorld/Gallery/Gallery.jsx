import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import classes from './GallerySty.module.css';
import textbg from './galleryBanner2.png';
import player from './galleryBanner3.png';
import image3 from '../../PaltanWorld/PaltanWorld3.png';
import image5 from '../../PaltanWorld/PaltanWorld5.png';
import image6 from '../../PaltanWorld/PaltanWorld6.png';
import PaltanWorldSwitch from '../../../Components/PaltanWordSwitch/PaltanWorldSwitch';

const Gallery = () => {
  const [defaultid, setdefaultid] = useState(7);
  const [SeasonData, setSeasonData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const FetchSeason = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://appy.trycatchtech.com/v3/puneri_paltan/gallary_list?cat_id=${defaultid}`
        );
        console.log('API Response:', response.data);
        // If response.data contains { status, data: [...] }, use response.data.data
        setSeasonData(response.data.data || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setSeasonData([]);
      }
      setLoading(false);
    };
    FetchSeason();
  }, [defaultid]);

  return (
    <div>
      <div className={classes.GalleryBanner}>
        <div className={classes.GalleryContainer}>
          <div className={classes.bannerLeft}>
            <div className={classes.left}>
              <div className={classes.LeftContent}>
                <div className={classes.content}>
                  <img className={classes.moveUpAnimation} src={textbg} alt="bg" />
                  <h1 className={classes.playerAnime}>Gallery</h1>
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
                  <li className="px-3 py-2 border rounded" onClick={() => setdefaultid(7)}>Season 11</li>
                  <li className="px-3 py-2 border rounded" onClick={() => setdefaultid(4)}>Season 8</li>
                  <li className="px-3 py-2 border rounded" onClick={() => setdefaultid(3)}>Season 7</li>
                  <li className="px-3 py-2 border rounded" onClick={() => setdefaultid(1)}>Season 5</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>

        <Container fluid className={`px-3 ${classes.SeasonContent}`}>
          <Row className="d-flex">
            {loading ? (
              <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '200px' }}>
                <Spinner
                  animation="border"
                  role="status"
                  style={{ color: '#ff7500', width: '3rem', height: '3rem' }}
                />
              </div>
            ) : Array.isArray(SeasonData) && SeasonData.length > 0 ? (
              SeasonData.map((season, index) => (
                <Col sm={12} md={12} lg={6} key={index} className="mb-4 p-0">
                  <Link style={{ textDecoration: "none" }} to={`/GImage/${season.id}`}>
                    <div className={`px-3 ${classes.seasonContentBox}`}>
                      <div className={classes.img}>
                        <img
                          src={season.main_image || 'https://via.placeholder.com/600x400?text=No+Image'}
                          alt={season.name || 'Gallery Image'}
                        />
                      </div>
                      <div style={{ marginTop: '5px', marginBottom: '40px' }} className={classes.titles}>
                        <h3>{season.name || 'Untitled'}</h3>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))
            ) : (
              <div className="text-center w-100 py-5">
                <p>No gallery items found.</p>
              </div>
            )}
          </Row>
        </Container>
      </div>

      <PaltanWorldSwitch
        image1={image3}
        image2={image6}
        image3={image5}
        h2="wallpapers"
        h3="blogs"
        h1="Paltan TV"
        path1="/PaltanTv"
        path2="/"
        path3="/"
      />
    </div>
  );
};

export default Gallery;
