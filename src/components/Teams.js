import React, { useState, useEffect, useContext } from "react";
import todo from "../img/teams_top.png";
import minimize from "../img/vs_min.png";
import PortContext from "../context/PortContext";
import side from "../img/teams_side.png";

const Teams = () => {
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
    const modal = document.getElementById("teams");
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
      {isModalOpen.includes(10) && !mini.includes(10) && (
        <div
          id="teams"
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
              alignItems: "center",
              backgroundColor: "black",
            }}
          >
            <div style={{ fontSize: "10px" }}>
              <img
                src={todo}
                alt=""
                style={{
                  margin: "0",
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
                className="btn btn-to"
                style={{
                  height: "6vh",
                  width: "50px",
                  padding: "0",
                  color: "white",
                }}
                onClick={() => {
                  setMini([...mini, 10]);
                }}
              >
                <i class="bi bi-dash-lg"></i>
              </button>
              <button
                className="btn btn-to"
                style={{
                  height: "6vh",
                  width: "50px",
                  padding: "0",
                  color: "white",
                }}
                onClick={handleButton2Click}
              >
                {!isButton2Clicked ? (
                  <img src={minimize} alt="" style={{ width: "20px" }} />
                ) : (
                  <i class="bi bi-stop"></i>
                )}
              </button>
              <button
                className="btn btn-cls"
                style={{
                  height: "6vh",
                  width: "50px",
                  padding: "0",
                  color: "white",
                }}
                onClick={() => {
                  setIsModalOpen(isModalOpen.filter((item) => item !== 10));
                  setIconOrder(
                    iconOrder.filter((item) => item !== "teams.png")
                  );
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div
            className="modal-footer"
            onMouseDown={handleFooterMouseDown}
            style={{
              margin: "0",
              padding: "0",
              height: isButton2Clicked ? "73.8vh" : "86.7vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#1f1f1f",
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
                    height: isButton2Clicked ? "73.5vh" : "86.7vh",
                  }}
                  alt=""
                />
              </div>
              <div
                style={{
                  margin: "0 20px",
                  color: "#166F6B",
                  textAlign: "start",
                  overflow: "auto",
                  height: isButton2Clicked ? "72vh" : "83.7vh",
                  width: isButton2Clicked ? "49.6vw" : "76.2vw",
                }}
              >
                <div
                  class="col-sm-6 mb-3 mb-sm-0"
                  style={{
                    width: isButton2Clicked ? "45vw" : "72vw",
                    margin: "40px 20px",
                  }}
                >
                  <div class="card">
                    <div
                      class="card-body"
                      style={{
                        backgroundColor: "#292929",
                        height: "25vh",
                        color: "white",
                        padding: "20px 0",
                      }}
                    >
                      <span style={{ margin: "20px", fontFamily: "Fira Sans" }}>
                        Bachelor of Technology in Civil Engineeering
                      </span>
                      <div
                        style={{
                          height: "10vh",
                          width: "100%",
                          backgroundColor: "#5B5fc7",
                          margin: "10px 0",
                          padding: "20px",
                        }}
                      >
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <img
                            src={require("../img/icons8-college-100.png")}
                            style={{ width: "40px" }}
                            alt=""
                          />
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              fontSize: "20px",
                            }}
                          >
                            Indian Institute of Technology Patna
                          </span>
                          <span style={{ fontFamily: "Georgia" }}>
                            8.36/10 CPI
                          </span>
                        </div>
                        <br />
                        <span
                          style={{ fontFamily: "Papyrus", fontWeight: "bold" }}
                        >
                          2020-2024
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 mb-3 mb-sm-0"
                  style={{
                    width: isButton2Clicked ? "45vw" : "72vw",
                    margin: "40px 20px",
                  }}
                >
                  <div class="card">
                    <div
                      class="card-body"
                      style={{
                        backgroundColor: "#292929",
                        height: "25vh",
                        color: "white",
                        padding: "20px 0",
                      }}
                    >
                      <span style={{ margin: "20px", fontFamily: "Fira Sans" }}>
                        Class 12th (Madhya Pradesh Board of Secondary Education)
                      </span>
                      <div
                        style={{
                          height: "10vh",
                          width: "100%",
                          backgroundColor: "#5B5fc7",
                          margin: "10px 0",
                          padding: "20px",
                        }}
                      >
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <img
                            src={require("../img/icons8-university-campus-90.png")}
                            style={{ width: "40px" }}
                            alt=""
                          />
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              fontSize: "20px",
                            }}
                          >
                            St. Jones Convent School
                          </span>
                          <span style={{ fontFamily: "Georgia" }}>84.8%</span>
                        </div>
                        <br />
                        <span
                          style={{ fontFamily: "Papyrus", fontWeight: "bold" }}
                        >
                          2018-2020
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-sm-6 mb-3 mb-sm-0"
                  style={{
                    width: isButton2Clicked ? "45vw" : "72vw",
                    margin: "40px 20px",
                  }}
                >
                  <div class="card">
                    <div
                      class="card-body"
                      style={{
                        backgroundColor: "#292929",
                        height: "25vh",
                        color: "white",
                        padding: "20px 0",
                      }}
                    >
                      <span style={{ margin: "20px", fontFamily: "Fira Sans" }}>
                        Class 10th (Central Board of Secondary Education)
                      </span>
                      <div
                        style={{
                          height: "10vh",
                          width: "100%",
                          backgroundColor: "#5B5fc7",
                          margin: "10px 0",
                          padding: "20px",
                        }}
                      >
                        <div
                          className="d-flex"
                          style={{ justifyContent: "space-between" }}
                        >
                          <img
                            src={require("../img/icons8-university-campus-90.png")}
                            style={{ width: "40px" }}
                            alt=""
                          />
                          <span
                            style={{
                              fontFamily: "Times New Roman",
                              fontSize: "20px",
                            }}
                          >
                            St. Pius Senior Secondary School
                          </span>
                          <span style={{ fontFamily: "Georgia" }}>92.2%</span>
                        </div>
                        <br />
                        <span
                          style={{ fontFamily: "Papyrus", fontWeight: "bold" }}
                        >
                          2016-2018
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Teams;
