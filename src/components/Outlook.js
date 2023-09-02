import React, { useState, useEffect, useContext } from "react";
import top from "../img/outlook_top.png";
import minimize from "../img/vs_min.png";
import PortContext from "../context/PortContext";
const Outlook = () => {
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
    const modal = document.getElementById("outlook");
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
      {isModalOpen.includes(6) && !mini.includes(6) && (
        <div
          id="outlook"
          className="custom-modal"
          onMouseDown={handleMouseDown}
          style={{
            margin: "0",
            padding: "0",
            ...modalDimensions,
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "#4F7E33",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                color: "white",
                fontWeight: "450",
                margin: "10px",
              }}
            >
              New Mail
            </div>
            <div
              className="d-flex"
              style={{
                justifyContent: "flex-end",
                alignItems: "flex-start",
              }}
            >
              <button
                className="btn btn-out"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 6]);
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
                className="btn btn-out"
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
                  setIsModalOpen(isModalOpen.filter((item) => item !== 6));
                  setIconOrder(
                    iconOrder.filter((item) => item !== "outlook.png")
                  );
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
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            <img
              src={top}
              style={{
                width: isButton2Clicked ? "70vw" : "100vw",
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
              height: isButton2Clicked ? "65.8vh" : "75.3vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#292929",
            }}
          >
            <div
              style={{
                overflow: "hidden",
                justifyContent: "flex-start",
              }}
            >
              <button
                className="btn"
                style={{
                  backgroundColor: "#83B663",
                  width: "105px",
                  padding: "5px 5px",
                  paddingLeft: "15px",
                  margin: "10px",
                  display: "flex",
                }}
              >
                Send &nbsp;&nbsp;&nbsp;|
                <div
                  style={{
                    transform: "translateY(1px)",
                    display: "flex",
                    marginLeft: "2px",
                  }}
                >
                  <i class="bi bi-chevron-down px-1"></i>
                </div>
              </button>
              <div
                style={{
                  borderBottom: "0.01rem solid #3D3D3D",
                  width: "100vw",
                  margin: "10px",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "10px",
                  color: "white",
                }}
              >
                <button
                  className="btn"
                  style={{
                    border: "0.01rem solid #3D3D3D",
                    borderRadius: "10px",
                    color: "white",
                    marginRight: "20px",
                  }}
                >
                  Email Id
                </button>
                <a
                  href={`mailto:siddharth19402@gmail.com`}
                  style={{ transform: "translateY(8px)" }}
                >
                  siddharth19402@gmail.com
                </a>
              </div>

              <div
                className="d-flex"
                style={{
                  borderBottom: "0.01rem solid #3D3D3D",
                  width: "93vw",
                  position: "absolute",
                  left: "14vh",
                  color: "white",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "10px",
                  color: "white",
                }}
              >
                <button
                  className="btn"
                  style={{
                    border: "0.01rem solid #3D3D3D",
                    borderRadius: "10px",
                    color: "white",
                    marginRight: "20px",
                  }}
                >
                  LinkedIn
                </button>
                <a
                  href={`www.linkedin.com/in/siddharth-tiwari-a34a651bb`}
                  style={{ transform: "translateY(8px)" }}
                >
                  www.linkedin.com/in/siddharth-tiwari-a34a651bb
                </a>
              </div>

              <div
                className="d-flex"
                style={{
                  borderBottom: "0.01rem solid #3D3D3D",
                  width: "93vw",
                  position: "absolute",
                  left: "14vh",
                  color: "white",
                }}
              ></div>

              <div
                className="d-flex"
                style={{
                  borderBottom: "0.01rem solid #3D3D3D",
                  width: "93vw",
                  position: "absolute",
                  left: "14vh",
                  color: "white",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  margin: "10px",
                  color: "white",
                }}
              >
                <button
                  className="btn"
                  style={{
                    border: "0.01rem solid #3D3D3D",
                    borderRadius: "10px",
                    color: "white",
                    marginRight: "20px",
                  }}
                >
                  Leetcode
                </button>
                <a
                  href={`https://leetcode.com/siddharth19402/`}
                  style={{ transform: "translateY(8px)" }}
                >
                  https://leetcode.com/siddharth19402/
                </a>
              </div>

              <div
                className="d-flex"
                style={{
                  borderBottom: "0.01rem solid #3D3D3D",
                  width: "93vw",
                  position: "absolute",
                  left: "14vh",
                  color: "white",
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Outlook;
