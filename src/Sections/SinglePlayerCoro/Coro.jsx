import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CoroSty.module.css";
import { getCategory1Players, getCategory2Players, getCategory3Players } from "../../Store/Action/Player-action";

const Coro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { category1, category2, category3 } = useSelector((state) => state.players);

  const allPlayers = [...(category1 || []), ...(category2 || []), ...(category3 || [])];

  useEffect(() => {
    dispatch(getCategory1Players());
    dispatch(getCategory2Players());
    dispatch(getCategory3Players());
  }, [dispatch]);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= allPlayers.length - 2 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [allPlayers.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= allPlayers.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allPlayers.length - 2 : prevIndex - 1
    );
  };

  return (
    <div className={classes.SinglePlayerCoro}>
      <div className={`${classes.otherPlayersCoro}`}>
        <div className={`col-md-12 ${classes.OtherPlayers}`}>
          <h2>Other Players</h2>
        </div>

        <div className={`col-md-10 mx-auto px-3`}>
          <div className={classes.coroContent}>
            {allPlayers.length > 1 && (
              <div className={classes.Corousel}>
                <button className={classes.navButton} onClick={prevSlide}>
                  ❮
                </button>
                <Link
                  to={`/player/${allPlayers[currentIndex]?.id}`}
                  style={{ textDecoration: "none" }}
                  onClick={() => window.scrollTo({top:0 , behavior:"smooth"})}
                >
                  <div className={classes.PlayerDetail}>
                    <div className={classes.NameDetail}>
                      <h3 className={classes.Fname}>
                        {allPlayers[currentIndex]?.name?.split(" ")[0]}
                      </h3>
                      <h3 className={classes.Sname}>
                        {allPlayers[currentIndex]?.name?.split(" ").slice(1).join(" ")}
                      </h3>
                      <h5 className={classes.Position}>
                        {allPlayers[currentIndex]?.position}
                      </h5>
                    </div>
                    <div className={classes.Image}>
                      <img
                        src={allPlayers[currentIndex]?.full_image}
                        alt={allPlayers[currentIndex]?.name}
                      />
                    </div>
                  </div>
                </Link>
                <Link
                  to={`/player/${allPlayers[currentIndex + 1]?.id}`}
                  className={classes.activeA}
                  style={{ textDecoration: "none" }}
                  onClick={() => window.scrollTo({top:0 , behavior:"smooth"})}
                >
                  <div className={`${classes.Active} ${classes.PlayerDetail} ${classes.PlayerDetail1}`}>
                    <div className={classes.NameDetail}>
                      <h3 className={classes.Fname}>
                        {allPlayers[currentIndex + 1]?.name?.split(" ")[0]}
                      </h3>
                      <h3 className={classes.Sname}>
                        {allPlayers[currentIndex + 1]?.name?.split(" ").slice(1).join(" ")}
                      </h3>
                      <h5 className={classes.Position}>
                        {allPlayers[currentIndex + 1]?.position}
                      </h5>
                    </div>
                    <div className={classes.Image}>
                      <img
                        src={allPlayers[currentIndex + 1]?.full_image}
                        alt={allPlayers[currentIndex + 1]?.name}
                      />
                    </div>
                  </div>
                </Link>

                <button className={classes.navButton1} onClick={nextSlide}>
                  ❯
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coro;
