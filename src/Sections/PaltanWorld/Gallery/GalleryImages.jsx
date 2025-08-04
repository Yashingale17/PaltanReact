import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import singleGallery2 from './singleGallery2.png';
import singleGallery3 from './galleryBanner2.png';
import classes from './GallerySty.module.css';
import style from './SingleGalSty.module.css';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const GalleryImages = () => {
  const { id } = useParams();
  const [seasonData, setSeasonData] = useState(null);
  const [loading, setLoading] = useState(true);
  window.scrollTo(0, 0);

  useEffect(() => {
    const fetchSingleGallery = async () => {
      try {
        const response = await axios.get(
          `https://appy.trycatchtech.com/v3/puneri_paltan/single_gallary?id=${id}`
        );
        console.log(response.data);
        setSeasonData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSingleGallery();
  }, [id]);

  const isLastRow = (index, totalImages) => {
    const imagesPerRow = 3;
    const remainingImages = totalImages % imagesPerRow;
    return remainingImages === 0 ? index >= totalImages - 3 : index >= totalImages - remainingImages;
  };

  return (
    <div>
      <div className={`${classes.GalleryBanner}`}>
        <div className={classes.GalleryContainer}>
          <div className={classes.bannerLeft}>
            <div className={classes.left}>
              <div className={classes.LeftContent}>
                <div className={classes.content}>
                  <img className={classes.moveUpAnimation} src={singleGallery3} alt="bg" />
                  <h1 className={classes.playerAnime}>Gallery</h1>
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.bannerRight} ${style.bannerRight}`}>
            <div className={classes.RightContent}>
              <div className={classes.content}>
                <img className={classes.moveUpAnimation} src={singleGallery2} alt="BannerPlayer Img" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.ImagesSection}>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center w-100" style={{ height: '200px' }}>
          <Spinner animation="border" role="status" style={{ color: '#ff7500', width: '3rem', height: '3rem' }} />
        </div>
        ) : (
          <>
            <h3>{seasonData?.name}</h3>
            <Container fluid className={`${style.imagesContainer}`}>
              <Row className={style.ImagesMain}>
                {seasonData && seasonData.match_images && seasonData.match_images.length > 0 ? (
                  seasonData.match_images.map((image, index) => (
                    <Col className={`py-2 px-2`} lg={4} md={6} sm={6} xs={12} key={index}>
                      <div className={`${style.imageItem} ${isLastRow(index, seasonData.match_images.length) ? style.hangingImage : ''}`}>
                        <img src={image} alt={`Match Image ${index + 1}`} className={style.image} loading='lazy' />
                      </div>
                    </Col>
                  ))
                ) : (
                  <p>No match images available.</p>
                )}
              </Row>
            </Container>
          </>
        )}
      </div>
    </div>
  );
};

export default GalleryImages;
