import React, { useState, useContext } from "react";
import pc from "../img/Computer.ico";
import bin from "../img/bin0.png";
import vs from "../img/code.png";
import edge from "../img/edge.png";
import github from "../img/github.png";
import mail from "../img/outlook.png";
import PortContext from "../context/PortContext";

export const Home = () => {
  const [hover, setHover] = useState(0);
  const context = useContext(PortContext);
  const { isModalOpen, setIsModalOpen, setIconOrder } = context;
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 1 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 1 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(1);
            }}
            onClick={() => {
              if (!isModalOpen.includes(1)) {
                setIsModalOpen([...isModalOpen, 1]);
              }
            }}
          >
            <img
              src={pc}
              alt=""
              style={{ width: "40px", marginBottom: "5px" }}
            />
            This pc
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 2 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 2 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(2);
            }}
            onClick={() => {
              if (!isModalOpen.includes(2)) {
                setIsModalOpen([...isModalOpen, 2]);
              }
            }}
          >
            <img
              src={bin}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            Recycle Bin
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 3 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 3 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(3);
            }}
            onClick={() => {
              if (!isModalOpen.includes(3)) {
                setIsModalOpen([...isModalOpen, 3]);
                setIconOrder((prevIconOrder) => [...prevIconOrder, "code.png"]);
              }
            }}
          >
            <img
              src={vs}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            VS code
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 4 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 4 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(4);
            }}
            onClick={() => {
              window.open(
                "https://mynotes-personalizednotes.netlify.app/",
                "_blank"
              );
            }}
          >
            <img
              src={edge}
              alt=""
              style={{ width: "40px", margin: "0 10px" }}
            />
            Edge
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 5 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 5 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(5);
            }}
          >
            <img
              src={github}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
              onClick={() => {
                window.open("https://github.com/sid-tiwari19", "_blank");
              }}
            />
            Github
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 6 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 6 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(6);
            }}
            onClick={() => {
              if (!isModalOpen.includes(6)) {
                setIsModalOpen([...isModalOpen, 6]);
                setIconOrder((prevIconOrder) => [
                  ...prevIconOrder,
                  "outlook.png",
                ]);
              }
            }}
          >
            <img
              src={mail}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            Outlook
          </button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 7 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 7 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(7);
            }}
            onClick={() => {
              if (!isModalOpen.includes(7)) {
                setIsModalOpen([...isModalOpen, 7]);
                setIconOrder((prevIconOrder) => [
                  ...prevIconOrder,
                  "notepad.png",
                ]);
              }
            }}
          >
            <img
              src={require("../img/notepad.png")}
              alt=""
              style={{ width: "40px", marginBottom: "5px" }}
            />
            Read Me
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 8 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 8 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(8);
            }}
            onClick={() => {
              if (!isModalOpen.includes(8)) {
                setIsModalOpen([...isModalOpen, 8]);
                setIconOrder((prevIconOrder) => [
                  ...prevIconOrder,
                  "adobe.png",
                ]);
              }
            }}
          >
            <img
              src={require("../img/adobe.png")}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            Adobe Acrobat
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 9 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 9 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(9);
            }}
            onClick={() => {
              window.open("https://riyalneus.netlify.app/", "_blank");
            }}
          >
            <img
              src={require("../img/chrome.png")}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            Chrome
          </button>

          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 10 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 10 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(10);
            }}
            onClick={() => {
              if (!isModalOpen.includes(10)) {
                setIsModalOpen([...isModalOpen, 10]);
                setIconOrder((prevIconOrder) => [
                  ...prevIconOrder,
                  "teams.png",
                ]);
              }
            }}
          >
            <img
              src={require("../img/teams.png")}
              alt=""
              style={{ width: "40px", margin: "0 10px" }}
            />
            Teams
          </button>
          <button
            className="btn home-btn d-flex"
            style={{
              boxShadow: hover === 11 ? "1px 1px 20px -2px #333" : "none",
              textShadow:
                hover === 11 ? "1px 1px 2px rgba(0, 0, 0, 0.3)" : "none",
            }}
            onMouseOut={() => {
              setHover(0);
            }}
            onMouseOver={() => {
              setHover(11);
            }}
            onClick={() => {
              if (!isModalOpen.includes(11)) {
                setIsModalOpen([...isModalOpen, 11]);
                setIconOrder((prevIconOrder) => [...prevIconOrder, "todo.png"]);
              }
            }}
          >
            <img
              src={require("../img/todo.png")}
              alt=""
              style={{ width: "40px", margin: "10px 10px" }}
            />
            To-do(ne)
          </button>
        </div>
      </div>
    </>
  );
};
