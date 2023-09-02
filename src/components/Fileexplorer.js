import React, { useState, useEffect, useContext } from "react";
import explorer from "../img/icons8-file-explorer-48.png";
import minimize from "../img/squares.png";
import PortContext from "../context/PortContext";
import top from "../img/top.png";
import side from "../img/sidebar.png";
import search from "../img/file_search.png";
import dp from "../img/id.png";

const Fileexplorer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const context = useContext(PortContext);
  const { isModalOpen, setIsModalOpen, mini, setMini } = context;

  const [modalDimensions, setModalDimensions] = useState({
    width: "99.9vw",
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
    const modal = document.getElementById("explorer");
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
        width: "99.9vw",
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
      {isModalOpen.includes(1) && !mini.includes(1) && (
        <div
          id="explorer"
          className="custom-modal "
          onMouseDown={handleMouseDown}
          style={{
            margin: "0",
            padding: "0",
            ...modalDimensions,
            position: "absolute",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "5px 10px", fontSize: "12px" }}>
              <img
                src={explorer}
                alt=""
                style={{
                  width: "20px",
                  margin: "5px",
                  translate: "0 -2px",
                }}
              />
              <span>File Explorer</span>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
            >
              <button
                className="btn btn-ot"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 1]);
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
                  setIsModalOpen(isModalOpen.filter((item) => item !== 1));
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            <img
              src={top}
              style={{
                width: "100vw",
                margin: "0",
                padding: "0",
              }}
              alt=""
            />
          </div>

          <div
            className="modal-footer"
            onMouseDown={handleFooterMouseDown}
            style={{
              margin: "0",
              padding: "0",
              height: isButton2Clicked ? "68vh" : "82vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <div style={{ height: "5vh", margin: "0", padding: "0" }}>
              <img
                src={search}
                style={{ width: isButton2Clicked ? "70vw" : "100vw" }}
                alt=""
              />
            </div>
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
                    height: isButton2Clicked ? "65vh" : "75vh",
                    transform: "translateY(10px)",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  padding: "100px",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "auto",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.5",
                  color: "#333",
                  height: isButton2Clicked ? "61vh" : "75vh",
                }}
              >
                <img
                  src={dp}
                  style={{
                    width: "150px",
                    margin: "10px",
                    background: "#f5f5f5" /* Background color */,
                    borderRadius: "50%" /* Rounded corners */,
                    boxShadow:
                      "0px 0px 10px rgba(0, 0, 0, 0.1)" /* Shadow effect */,
                  }}
                  alt=""
                />
                <br />
                <b
                  style={{
                    fontSize: "24px",
                    color: "#555",
                  }}
                >
                  Welcome to My Portfolio Website!
                </b>
                <br />
                <br />
                Hello there! I'm thrilled to have you visit my portfolio
                website.
                <br />
                <br />
                I'm Siddharth Tiwari, a passionate and driven 4th year B.Tech
                student from Indian Institute of Technology Patna. As I embark
                on the journey of showcasing my accomplishments, skills, and
                aspirations, I'm excited to give you a glimpse into who I am and
                what I have to offer.
                <br />
                <br /> Throughout my academic journey, I've been committed to
                pushing my boundaries, acquiring new skills, and finding
                innovative solutions to real-world problems.
                <br />
                <br />
                On this website you will find:
                <br /> my skills, interests, and achievements, projects, GitHub
                link, and resume by clicking on various icons on the website.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fileexplorer;
