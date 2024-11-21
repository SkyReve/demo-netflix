import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CommonStateContext } from "../App";
import "./Nav.css";

function Nav(props) {
  const [isURLBannerShown, setIsURLBannerShown] = useState(false);
  const [baseURL, setBaseURL] = useState(props.baseURL);

  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { setIsClicked } = useContext(CommonStateContext);
  const navigate = useNavigate();
  const PUBLIC_URL = "";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  const goIndex = () => {
    setSearchValue("");
    setIsClicked(false);
    navigate("/");
  };

  const handleClickToResetBaseURL = () => {
    props.changeBaseURL(process.env.REACT_APP_BASE_URL);
  };

  const handleClickToChangeBaseURL = () => {
    props.changeBaseURL(baseURL);
    setIsURLBannerShown(false);
  };

  return (
    <>
      <nav className={`nav ${show && "nav__black"}`}>
        <img
          alt="Neflix logo"
          src={PUBLIC_URL + "/assets/netflix_logo.png"}
          className="nav__logo"
          onClick={() => goIndex()}
        />
        <div className="nav__right">
          <input
            value={searchValue}
            onChange={handleChange}
            className="nav__input"
            type="text"
            placeholder="영화명, TV 프로그램명"
          />

          <img
            alt="User logged"
            src={PUBLIC_URL + "/assets/netflix_profile_icon.png"}
            className="nav__avatar"
          />

          <button
            style={{ marginLeft: "5px" }}
            onClick={() => setIsURLBannerShown(true)}
          >
            BASE URL
          </button>
        </div>
      </nav>

      {isURLBannerShown && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "4px",
              display: "flex",
              flexDirection: "column",
              width: "350px",
            }}
          >
            <h3>Please change the base URL</h3>

            <input
              type="text"
              value={baseURL}
              onChange={(e) => setBaseURL(e.target.value)}
            />

            <div
              style={{
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <button onClick={() => setIsURLBannerShown(false)}>Cancel</button>

              <button onClick={() => handleClickToResetBaseURL()}>Reset</button>

              <button onClick={() => handleClickToChangeBaseURL()}>OK</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(Nav);
