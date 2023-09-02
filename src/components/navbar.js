import React, { useState, useEffect, useContext } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import explorer from "../img/icons8-file-explorer-48.png";
import battery from "../img/icons8-full-battery-48.png";
import PortContext from "../context/PortContext";

const Navbar = (props) => {
  const context = useContext(PortContext);
  const { time, date, setIsModalOpen, isModalOpen, mini, setMini, iconOrder } =
    context;
  // give effect on hover
  const [hover, setHover] = useState(0);

  // animations on click
  const [ani, setAni] = useState(0);
  const handleAni = (val) => {
    setAni(val);
    setTimeout(() => {
      setAni(0);
    }, 290);
  };

  useEffect(() => {
    setAni(-4);
    setTimeout(() => {
      setAni(0);
    }, 300);
  }, [props.arrow]);

  const Icon = ({ iconName }) => {
    const hash = {
      "": 1,
      "code.png": 3,
      "outlook.png": 6,
      "notepad.png": 7,
      "adobe.png": 8,
      "todo.png": 11,
      "teams.png": 10,
    };
    const no = hash[iconName];
    return (
      <button
        className="btn mx-1"
        style={{
          boxShadow: "1px 1px 20px -2px #333",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
          margin: "5px",
        }}
        onClick={() => {
          handleAni(no);
          if (!isModalOpen.includes(no)) {
            setIsModalOpen([...isModalOpen, no]);
            setMini(mini.filter((items) => items !== no));
          } else {
            setIsModalOpen(isModalOpen.filter((items) => items !== no));
            setMini([...mini, no]);
          }
        }}
      >
        <img
          className={` ${ani === no ? "navimg" : ""}`}
          src={require(`../img/${iconName}`)}
          alt=""
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </button>
    );
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          backgroundColor: "#F3F3F3",
          padding: "0",
          height: "7vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "73vw",
            marginLeft: "10vw",
            padding: "0",
          }}
        >
          <button
            className="btn my-1 mx-1"
            style={{
              boxShadow: hover === 1 ? "1px 1px 20px -2px #333" : "none",
              padding: "0",
            }}
            onClick={() => {
              handleAni(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(1);
            }}
            data-bs-toggle="modal"
            data-bs-target="#start"
          >
            <i
              className={`bi bi-microsoft ${ani === 1 ? "navicon" : ""}`}
              style={{
                fontSize: "25px",
                margin: "10px 7px",
                color: "#067FD7",
              }}
            ></i>
          </button>
          <button
            className="btn mx-1"
            style={{
              boxShadow: hover === 2 ? "1px 1px 20px -2px #333" : "none",
              padding: "0",
              margin: "5px 0",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(2);
            }}
            onClick={() => {
              handleAni(2);
            }}
          >
            <i
              className={`bi bi-search ${ani === 2 ? "navicon" : ""}`}
              style={{
                fontSize: "23px",
                margin: "5px 7px",
                WebkitTextStroke: "1px",
              }}
              data-bs-toggle="modal"
              data-bs-target="#start"
              onClick={() => {
                props.setSearch(!props.search);
              }}
            ></i>
          </button>
          <button
            className="btn mx-1"
            style={{
              boxShadow:
                hover === 3 ||
                isModalOpen.includes(1) ||
                isModalOpen.includes(2)
                  ? "1px 1px 20px -2px #333"
                  : "none",
              justifySelf: "center",
              padding: "0",
              margin: "5px 0",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(3);
            }}
            onClick={() => {
              handleAni(3);
              if (!isModalOpen.includes(1)) {
                setIsModalOpen([...isModalOpen, 1]);
              } else {
                setIsModalOpen(isModalOpen.filter((items) => items !== 1));
              }
              setMini(mini.filter((items) => items !== 1));
            }}
          >
            <img
              className={`img1 ${ani === 3 ? "navimg" : ""}`}
              src={explorer}
              alt=""
              style={{ width: "38px", padding: "-5px 5px", margin: "0 2px" }}
            />
          </button>
          {iconOrder.map((iconName, index) => (
            <Icon key={index} iconName={iconName} />
          ))}
        </div>
        <div
          className="d-flex"
          style={{
            padding: "0",
            alignItems: "center",
          }}
        >
          <button
            className={`btn ${ani === 4 ? "arrow" : ""} ${
              ani === -4 ? "arrow2" : ""
            } ${ani === -3 ? "arr" : ""}
            `}
            style={{
              boxShadow: hover === 4 ? "1px 1px 20px -2px #333" : "none",
              padding: "0",
              height: "40px",
              margin: "0 20px",
            }}
            data-bs-toggle="modal"
            data-bs-target="#arrow"
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(4);
            }}
          >
            <i
              className={`bi bi-chevron-up `}
              style={{
                fontSize: "15px",
                WebkitTextStroke: "1px",
                padding: "5px",
              }}
              onClick={() => {
                setAni(4);
                setTimeout(() => {
                  setAni(-3);
                }, 300);
              }}
            ></i>
          </button>

          <button
            className="btn"
            style={{
              boxShadow: hover === 5 ? "1px 1px 20px -2px #333" : "none",
              padding: "0",
              transform: "translateY(3px)",
              justifySelf: "center",
              margin: "5px 0",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(5);
            }}
            data-bs-toggle="modal"
            data-bs-target="#wifi"
          >
            <i
              className="bi bi-wifi "
              style={{
                fontSize: "20px",
                WebkitTextStroke: "0.5px",
                marginRight: "5px",
                padding: "0 5px",
              }}
            ></i>
            <i
              className="bi bi-volume-up"
              style={{
                fontSize: "20px",
                WebkitTextStroke: "0.5px",
                marginLeft: "5px",
              }}
            ></i>
            <img
              src={battery}
              style={{
                margin: "10px",
                width: "21px",
                transform: "translateY(-3px) scale(1.1,1.2)",
              }}
              alt=""
            />
          </button>
          <p
            style={{
              paddingTop: "5px",
              fontSize: "13px",
              fontFamily: "Segoe UI",
              margin: "0",
              marginLeft: "10px",
              cursor: "default",
            }}
          >
            {time.slice(0, time.length - 6) +
              time.slice(time.length - 3, time.length)}{" "}
            <br />
            {date}
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
