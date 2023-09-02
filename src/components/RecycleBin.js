import React, { useState, useEffect, useContext } from "react";
import bin from "../img/bin0.png";
import minimize from "../img/squares.png";
import PortContext from "../context/PortContext";
import top from "../img/top.png";
import side from "../img/sidebar.png";
import search from "../img/top_bin.png";

const RecycleBin = () => {
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
    const modal = document.getElementById("bin");
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
      {isModalOpen.includes(2) && !mini.includes(2) && (
        <div
          id="bin"
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
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: "5px 10px", fontSize: "12px" }}>
              <img
                src={bin}
                alt=""
                style={{
                  width: "20px",
                  margin: "5px",
                  translate: "0 -2px",
                }}
              />
              <span>Recycle bin</span>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
            >
              <button
                className="btn btn-ot"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 2]);
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
                  setIsModalOpen(isModalOpen.filter((item) => item !== 2));
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
                  marginTop: "20px",
                  padding: "50px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "#333",
                  height: isButton2Clicked ? "61vh" : "75vh",
                  overflow: "auto",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h2
                  style={{
                    fontSize: "28px",
                    color: "#555",
                    marginBottom: "20px",
                  }}
                >
                  Other Works and Projects
                </h2>
                <p>
                  In this section, you will find some of my smaller projects and
                  works that I completed during my academic journey.
                </p>
                <hr
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderColor: "#ccc",
                  }}
                />
                <h3>E-commerce Website: Diskcounter</h3>
                <p>
                  I created an e-commerce website using HTML, CSS, and
                  JavaScript. The website, named Diskcounter, is responsive and
                  compatible with all screen sizes. This project allowed me to
                  gain hands-on experience with the basics of CSS and
                  JavaScript.
                </p>
                <button className="btn-dark btn">
                  <a
                    href="https://diskounter.netlify.app/"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "underline", color: "white" }}
                  >
                    Link to the website
                  </a>
                </button>
                <hr
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderColor: "#ccc",
                  }}
                />
                <h3>Various Python Works</h3>
                <p>
                  These are various assignments related to file handling
                  operations in Python. They were completed as part of a Python
                  course taught by Prof. Mayank Agarwal at IIT Patna.
                </p>
                <button className="btn-dark btn">
                  <a
                    href="https://github.com/sid-tiwari19/works"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "underline", color: "white" }}
                  >
                    GitHub link
                  </a>
                </button>
                <hr
                  style={{
                    marginTop: "20px",
                    marginBottom: "20px",
                    borderColor: "#ccc",
                  }}
                />
                <h3>Made a Chat App over LAN</h3>
                <p>
                  As part of a collaborative effort with my team member Madhur
                  Garg and under the guidance of Prof. Mayank Agarwal, I
                  developed a chat app using Python and Streamlit. This app
                  allows users to chat and share files over a local area network
                  (LAN). The app includes login features and was a valuable
                  learning experience.
                </p>
                <button className="btn-dark btn">
                  <a
                    href="https://github.com/sid-tiwari19/works/tree/main/chatapp"
                    rel="noreferrer"
                    target="_blank"
                    style={{ textDecoration: "underline", color: "white" }}
                  >
                    GitHub link
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecycleBin;
