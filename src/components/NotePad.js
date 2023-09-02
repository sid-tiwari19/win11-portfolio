import React, { useState, useEffect, useContext } from "react";
import minimize from "../img/squares.png";
import PortContext from "../context/PortContext";

const NotePad = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [inputValue, setInputValue] = useState(`/*
  Thank you for visting my Portfolio website!!!!
  
  Here are the references of where you will find what:
  
  =>This pc : My introduction
  =>Recycle Bin : My small projects ,assignments and other related works
  => VS Code: My skills
  => Edge: Link to my project: Mynotes
  => Github: Link to my Github
  =>Outlook: My Email,linkedIn and Leetcode profile
  =>Readme(Notepad) : Information about the website
  =>Adobe Acrobat: My resume
  =>Chrome: Link to my Project: Riyal Neus
  => Teams : My Educational background
  =>To-do(ne): Achievements
  */`);
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
    const modal = document.getElementById("note");
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
      {isModalOpen.includes(7) && !mini.includes(7) && (
        <div
          id="note"
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
                src={require("../img/notepad.png")}
                alt=""
                style={{
                  width: "20px",
                  margin: "5px",
                  translate: "0 -2px",
                }}
              />
              <span>Notepad</span>
            </div>
            <div
              className="d-flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
            >
              <button
                className="btn btn-ot"
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 7]);
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
                  setIsModalOpen(isModalOpen.filter((item) => item !== 7));
                  setIconOrder(
                    iconOrder.filter((item) => item !== "notepad.png")
                  );
                }}
              >
                <i class="bi bi-x-lg"></i>
              </button>
            </div>
          </div>
          <div
            className="note"
            style={{
              transform: "translateY(-12px)",
              textAlign: "left",
              padding: "5px",
              fontSize: "14px",
            }}
          >
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
          </div>
          <div
            className="modal-footer"
            onMouseDown={handleFooterMouseDown}
            style={{
              margin: "0",
              padding: "0",
              height: isButton2Clicked ? "71vh" : "84vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <textarea
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                outline: "none",
                overflow: "auto",
                padding: "15px",
              }}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                console.log(inputValue);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default NotePad;
