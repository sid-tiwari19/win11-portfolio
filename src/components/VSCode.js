import React, { useState, useEffect, useContext } from "react";
import vsc from "../img/vs_top.png";
import minimize from "../img/vs_min.png";
import PortContext from "../context/PortContext";
import side from "../img/vs_side.png";
import bot from "../img/vs_bot.png";
import cpp from "../img/cpp.png";
import py from "../img/py.webp";
import js from "../img/js.png";

const VSCode = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const context = useContext(PortContext);
  const {
    isModalOpen,
    setIsModalOpen,
    mini,
    setMini,
    iconOrder,
    setIconOrder,
  } = context;

  const [modalDimensions, setModalDimensions] = useState({
    width: "100vw",
    height: "93vh",
    top: "0",
    left: "0",
  });

  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
    // eslint-disable-next-line
  }, [isDragging]);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    setIsDragging(true);
    setDragOffset({
      x: e.clientX - e.target.getBoundingClientRect().left,
      y: e.clientY - e.target.getBoundingClientRect().top,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    const modal = document.getElementById("vsc");
    if (!modal || !isDragging) return;

    const maxX = window.innerWidth - modal.clientWidth;
    const maxY = window.innerHeight - modal.clientHeight;

    let x = e.clientX - dragOffset.x;
    let y = e.clientY - dragOffset.y;

    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));

    modal.style.left = x + "px";
    modal.style.top = y + "px";
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleFooterMouseDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleButton2Click = () => {
    if (isButton2Clicked) {
      setModalDimensions({
        width: "100vw",
        height: "93vh",
        top: "0",
        left: "0",
      });
    } else {
      setModalDimensions({
        width: "70vw",
        height: "80vh",
        top: "50px",
        left: "70px",
      });
    }
    setIsButton2Clicked(!isButton2Clicked);
  };

  return (
    <>
      {isModalOpen.includes(3) && !mini.includes(3) && (
        <div
          id="vsc"
          className="custom-modal"
          onMouseDown={handleMouseDown}
          style={{
            margin: "0",
            padding: "0",
            ...modalDimensions,
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "#505050",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              <img
                src={vsc}
                alt=""
                style={{
                  width: isButton2Clicked ? "60vw" : "90vw",
                }}
              />
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <button
                className="btn btn-vs"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 3]);
                }}
              >
                <i
                  class="bi bi-dash-lg"
                  style={{
                    color: "white",
                  }}
                ></i>
              </button>
              <button
                className="btn btn-vs"
                style={{ height: "6vh", width: "50px" }}
                onClick={handleButton2Click}
              >
                {!isButton2Clicked ? (
                  <img src={minimize} alt="" style={{ width: "20px" }} />
                ) : (
                  <i
                    class="bi bi-stop"
                    style={{
                      color: "white",
                    }}
                  ></i>
                )}
              </button>
              <button
                className="btn btn-cls"
                style={{ height: "6vh" }}
                onClick={() => {
                  setIsModalOpen(isModalOpen.filter((item) => item !== 3));
                  setIconOrder(iconOrder.filter((item) => item !== "code.png"));
                }}
              >
                <i
                  class="bi bi-x-lg"
                  style={{
                    color: "white",
                  }}
                ></i>
              </button>
            </div>
          </div>
          <div
            className="modal-footer"
            onMouseDown={handleFooterMouseDown}
            style={{
              margin: "0",
              padding: "0",
              height: isButton2Clicked ? "74vh" : "87vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <img
                  src={side}
                  style={{
                    margin: "0",
                    height: isButton2Clicked ? "72.6vh" : "85vh",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  padding: "20px",
                  fontFamily: "Georgia, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "white",
                  height: isButton2Clicked ? "72.3vh" : "84.3vh",
                  overflow: "auto",
                  backgroundColor: "#1E1E1E",
                  width: isButton2Clicked ? "56.5vw" : "84.2vw",
                  textAlign: "left",
                }}
              >
                <h3>Programming langaunages:</h3>
                <br />
                <div>
                  <img
                    src={cpp}
                    alt=""
                    style={{ width: "150px", margin: "0 50px" }}
                  />
                  <img
                    src={require("../img/c.png")}
                    alt=""
                    style={{ width: "85px", margin: "0 50px" }}
                  />

                  <img
                    src={py}
                    style={{ width: "85px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={js}
                    alt=""
                    style={{ width: "80px", margin: "0 50px" }}
                  />
                  <img
                    src={require("../img/matlab.jpg")}
                    style={{ width: "100px", margin: "0 50px" }}
                    alt=""
                  />
                </div>
                <br />
                <h3>Web Development:</h3>
                <br />
                <div>
                  <img
                    src={require("../img/html.png")}
                    style={{ width: "90px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/css.png")}
                    style={{ width: "70px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/react.png")}
                    style={{ width: "140px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/node.png")}
                    style={{ width: "110px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/express.png")}
                    style={{
                      width: "150px",
                      marginTop: isButton2Clicked ? "70px" : "0",
                      marginLeft: "50px",
                    }}
                    alt=""
                  />
                </div>
                <br />
                <br />
                <h3>DataBases:</h3>
                <br />
                <div>
                  <img
                    src={require("../img/mysql.png")}
                    style={{ width: "90px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/mongo.png")}
                    style={{ width: "100px", margin: "0 50px" }}
                    alt=""
                  />
                </div>
                <br />
                <br />
                <h3>Data Analysis and Visualization:</h3>
                <br />
                <div>
                  <img
                    src={require("../img/Pandas_logo.svg.png")}
                    style={{ width: "150px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/1200px-NumPy_logo_2020.svg.png")}
                    style={{ width: "100px", margin: "0 50px" }}
                    alt=""
                  />
                  <img
                    src={require("../img/mat.png")}
                    style={{ width: "150px", margin: "0 50px" }}
                    alt=""
                  />
                </div>
                <br />
                <br />
              </div>
            </div>
            <div style={{ margin: "0" }}>
              <img
                src={bot}
                style={{
                  margin: "0",
                  width: isButton2Clicked ? "70vw" : "100vw",
                  transform: "translateY(-1.4vh)",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VSCode;
