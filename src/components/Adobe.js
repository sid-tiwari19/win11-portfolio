import React, { useState, useEffect, useContext } from "react";
import minimize from "../img/squares.png";
import PortContext from "../context/PortContext";
import ZoomableImage from "./Zoomable";

const Adobe = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const context = useContext(PortContext);
  const {
    isModalOpen,
    setIsModalOpen,
    mini,
    setMini,
    setIconOrder,
    iconOrder,
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
    const modal = document.getElementById("adobe");
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
      {isModalOpen.includes(8) && !mini.includes(8) && (
        <div
          id="adobe"
          className="custom-modal"
          onMouseDown={handleMouseDown}
          style={{
            margin: "0",
            padding: "0",
            ...modalDimensions,
            position: "absolute",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#EAEAEA",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              <img
                src={require("../img/adobe_top.png")}
                alt=""
                style={{
                  width: isButton2Clicked ? "60vw" : "90vw",
                  paddingTop: isButton2Clicked ? "1vh" : "0.1vh",
                }}
              />
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
            >
              <button
                className="btn btn-ot"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 8]);
                }}
              >
                <i class="bi bi-dash-lg"></i>
              </button>
              <button
                className="btn btn-ot"
                style={{ height: "6vh", width: "50px" }}
                onClick={handleButton2Click}
              >
                {!isButton2Clicked ? (
                  <img src={minimize} alt="" style={{ width: "12px" }} />
                ) : (
                  <i class="bi bi-stop"></i>
                )}
              </button>
              <button
                className="btn btn-cls"
                style={{ height: "6vh" }}
                onClick={() => {
                  setIsModalOpen(isModalOpen.filter((item) => item !== 8));
                  setIconOrder(
                    iconOrder.filter((item) => item !== "adobe.png")
                  );
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div style={{ borderBottom: "0.1px solid #E1E1E1" }}>
            <img
              src={require("../img/adobe_2nd.png")}
              style={{ width: isButton2Clicked ? "70vw" : "100vw" }}
              alt=""
            />
          </div>
          <div
            className="modal-footer"
            onMouseDown={handleFooterMouseDown}
            style={{
              margin: "0",
              padding: "0",
              height: isButton2Clicked ? "69.2vh" : "80.3vh",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              backgroundColor: "#F5F5F5",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "10px",
              }}
            >
              <img
                src={require("../img/adobe_float.png")}
                style={{ height: isButton2Clicked ? "25vh" : "32vh" }}
                alt=""
              />
            </div>
            <ZoomableImage
              isButton2Clicked={isButton2Clicked}
              imageUrl={require("../img/sid_tpc (1).png")}
            />
            <div style={{ position: "absolute", bottom: "0", right: "0.8vw" }}>
              <img
                src={require("../img/adobe_right.png")}
                alt=""
                style={{ height: isButton2Clicked ? "69.5vh" : "80.5vh" }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Adobe;
