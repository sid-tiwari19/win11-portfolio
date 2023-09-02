import React, { useState, useEffect, useContext } from "react";
import todo from "../img/todo.png";
import minimize from "../img/squares.png";
import PortContext from "../context/PortContext";
import side from "../img/todo_side.png";

const Todo = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [Clicked, setClicked] = useState([]);
  const context = useContext(PortContext);
  const {
    isModalOpen,
    setIsModalOpen,
    mini,
    setMini,
    iconOrder,
    setIconOrder,
    formattedDate,
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
    const modal = document.getElementById("todo");
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

  const Achievements = [
    "<b>400+</b>problems solved on leetcode",
    "<b>300+</b>problems solved on various platforms like codechef,codeforces,interviewbit,code studio",
    "Secured a global rank of <b>49</b> out of <b>7977</b> candidates in Codechef cook-off Contest held on 3rd July 2022.",
    "Secured an All India Rank of <b>11881</b> out of more than 1.6 lacs candidates in JEE Advanced 2020.",
    "Ranked as top <b>1.2</b> percentile out of more than 11.4 lacs candidates in JEE Mains 2020.",
    "3 star(1700 max rating) on codechef",
    "1750+ max rating on Leetcode (Top 9%)",
  ];

  const List = ({ Achievement, index }) => {
    const handleToggleClick = () => {
      setClicked((prevClicked) => {
        if (prevClicked.includes(index)) {
          return prevClicked.filter((item) => item !== index);
        } else {
          return [...prevClicked, index];
        }
      });
    };
    return (
      <div
        class="col-sm-6 mb-3 mb-sm-0"
        style={{ width: isButton2Clicked ? "50vw" : "77vw", margin: "5px" }}
      >
        <div class="card">
          <div
            class="card-body"
            style={{
              justifyContent: "space-between",
              display: "flex",
              backgroundColor: "#f3f3f3",
              borderRadius: "10px",
            }}
          >
            <div>
              <span dangerouslySetInnerHTML={{ __html: Achievement }} />
            </div>
            <div>
              <button
                className="btn"
                style={{
                  height: "25px",
                  padding: "0",
                  margin: "0",
                }}
                onClick={handleToggleClick}
              >
                {Clicked.includes(index) ? (
                  <i class="bi bi-star-fill"></i>
                ) : (
                  <i class="bi bi-star"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isModalOpen.includes(11) && !mini.includes(11) && (
        <div
          id="todo"
          className="custom-modal"
          onMouseDown={handleMouseDown}
          style={{
            margin: "0",
            padding: "0",
            ...modalDimensions,
            position: "absolute",
            overflow: "hidden",
            backgroundColor: "#F3F3F3",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "0.1px solid #E1E1E1",
            }}
          >
            <div style={{ fontSize: "12px" }}>
              <img
                src={todo}
                alt=""
                style={{ width: "20px", margin: "10px" }}
              />
              Microsoft To-do(ne)
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
                style={{ height: "6vh", width: "50px" }}
                onClick={() => {
                  setMini([...mini, 11]);
                }}
              >
                <i class="bi bi-dash-lg"></i>
              </button>
              <button
                className="btn btn-to"
                style={{ height: "6vh", width: "50px" }}
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
                style={{ height: "6vh" }}
                onClick={() => {
                  setIsModalOpen(isModalOpen.filter((item) => item !== 11));
                  setIconOrder(iconOrder.filter((item) => item !== "todo.png"));
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
              height: isButton2Clicked ? "73.6vh" : "86.7vh",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              backgroundColor: "#D4F1EF",
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
                  height: isButton2Clicked ? "71vh" : "88vh",
                  width: isButton2Clicked ? "56.5vw" : "84.5vw",
                }}
              >
                <span
                  style={{
                    fontSize: "30px",
                    fontWeight: "500",
                  }}
                >
                  <br />
                  My Day
                </span>
                <br />
                <span>{formattedDate}</span>
                <div style={{ margin: "20px", padding: "5px" }}>
                  {Achievements.map((Achievement, index) => (
                    <List Achievement={Achievement} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
