import React, { useEffect, useRef, useState } from "react";
import account from "../img/account.png";
import sleep from "../img/icons8-half-moon-32.png";
import restart from "../img/icons8-restart-30.png";

export const StartButton = (props) => {
  const [hover, setHover] = useState(0);
  const sclick = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      sclick.current.focus();
    }, 500);
  }, [props.search]);

  const handleClick = () => {
    setTimeout(() => {
      window.location.reload();
    }, 9000);
  };

  const images = [
    "board.png",
    "calculator.png",
    "calendar.png",
    "edge.png",
    "mail.png",
    "maps.png",
    "msoffice.png",
    "onenote.png",
    "outlook.png",
    "skype.png",
    "snip.png",
    "teams.png",
    "terminal.png",
    "tips.png",
    "todo.png",
    "voice.png",
    "winWord.png",
    "soltaire.png",
    "store.png",
    "taskmanager.png",
  ];

  const Icons = ({ icon }) => {
    return (
      <button
        className="btn"
        style={{
          width: "85px",
          textAlign: "center",
          padding: "0",
          fontSize: "15px",
          margin: "10px",
        }}
      >
        <img
          src={require(`../img/${icon}`)}
          style={{ width: "35px", margin: "5px" }}
          alt=""
        />
        <br />
        {icon.slice(0, -4)}
      </button>
    );
  };

  return (
    <div style={{ width: "auto" }}>
      <div
        className="modal modal-start fade"
        id="start"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog dialog-start ">
          <div className="modal-content">
            <div
              className="modal-body start-body"
              style={{ alignContent: "center" }}
            >
              <form className="d-flex my-4 mx-4" role="search">
                <input
                  className="form-control  start-search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  ref={sclick}
                  style={{
                    borderRadius: "30px",
                    paddingLeft: "40px",
                    height: "5vh",
                    zIndex: "99999",
                  }}
                />
              </form>
              <div style={{ display: "block" }}>
                {images.map((icon) => (
                  <Icons icon={icon} />
                ))}
              </div>
            </div>
            <div className="modal-footer footer-start ">
              <button
                className="btn"
                onMouseOut={() => {
                  setHover(0);
                }}
                onMouseOver={() => {
                  setHover(1);
                }}
                style={{
                  boxShadow: hover === 1 ? "1px 1px 20px -2px #333" : "none",
                  padding: "0",
                }}
              >
                <img
                  src={account}
                  alt=""
                  style={{
                    width: "25px",
                    border: "0.5px solid black",
                    borderRadius: "50%",
                    transform: "translate(0,-3px)",
                  }}
                />
                <span
                  style={{
                    margin: "0 10px",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                  }}
                >
                  Sid
                </span>
              </button>
              <div className="dropdown">
                <button
                  className="btn "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onMouseOut={() => {
                    setHover(0);
                  }}
                  onMouseOver={() => {
                    setHover(2);
                  }}
                  style={{
                    boxShadow: hover === 2 ? "1px 1px 20px -2px #333" : "none",
                    padding: "0",
                  }}
                >
                  <i
                    className="bi bi-power"
                    style={{
                      fontSize: "20px",
                      padding: "5px",
                      paddingBottom: "7px",
                    }}
                  ></i>
                </button>
                <ul className="dropdown-menu">
                  <li>
                    {/* eslint-disable-next-line  */}
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#sleep"
                    >
                      <img
                        src={sleep}
                        style={{ width: "19px", margin: "0 5px" }}
                        alt=""
                      />
                      Sleep
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line  */}
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#shut"
                    >
                      <i
                        className="bi bi-power"
                        style={{
                          fontSize: "20px",
                          padding: "5px",
                          paddingBottom: "7px",
                          fontWeight: "500",
                        }}
                      ></i>
                      Shut down
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line  */}
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#shut"
                      onClick={handleClick}
                    >
                      <img
                        src={restart}
                        style={{ width: "19px", margin: "0 5px" }}
                        alt=""
                      />
                      Restart
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
