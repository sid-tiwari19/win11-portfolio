import React, { useState } from "react";
import battery from "../img/icons8-full-battery-48.png";
import edit from "../img/icons8-edit-32.png";
import bluetooth from "../img/icons8-bluetooth-30.png";
import airplane from "../img/icons8-airplane-50.png";
import hotspot from "../img/icons8-cellular-network-30.png";
import share from "../img/icons8-share-64.png";
import saver from "../img/battery_saver_regular_icon_205606.png";

export const Wifi = () => {
  const [wifi, setWifi] = useState(true);
  const [blue, setBlue] = useState(true);
  const [plane, setPlane] = useState(false);
  const [hots, setHots] = useState(false);
  const [nearby, setNearby] = useState(false);
  const [lowbattery, setLowbattery] = useState(false);

  const handleClick = (val) => {
    if (val === 1) {
      setWifi(!wifi);
    } else if (val === 2) {
      setBlue(!blue);
    } else if (val === 3) {
      setPlane(!plane);
    } else if (val === 4) {
      setHots(!hots);
    } else if (val === 5) {
      setNearby(!nearby);
    } else {
      setLowbattery(!lowbattery);
    }
  };
  return (
    <div style={{ width: "auto" }}>
      <div
        className="modal modal-wifi fade"
        id="wifi"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog dialog-wifi ">
          <div className="modal-content d-flex">
            <div
              className="modal-body wifi-body "
              style={{ padding: "15px 0" }}
            >
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: wifi ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(1);
                }}
              >
                <i
                  className="bi bi-wifi "
                  style={{
                    fontSize: "20px",
                    WebkitTextStroke: "0.5px",
                    marginRight: "5px",
                    padding: "0 5px",
                    color: "black",
                  }}
                ></i>
              </button>
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: blue ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(2);
                }}
              >
                <img
                  src={bluetooth}
                  style={{
                    width: "20px",
                    margin: "15px",
                    transform: "translateY(-5px)",
                  }}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: plane ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(3);
                }}
              >
                <img
                  src={airplane}
                  style={{
                    width: "20px",
                    margin: "15px",
                    transform: "translateY(-5px) scale(0.8,1)",
                    WebkitTextStroke: "0.5px",
                  }}
                  alt=""
                />
              </button>
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: hots ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(4);
                }}
              >
                <img src={hotspot} style={{ width: "20px" }} alt="" />
              </button>
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: nearby ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(5);
                }}
              >
                <img src={share} style={{ width: "20px" }} alt="" />
              </button>
              <button
                type="button"
                className="btn "
                style={{
                  margin: "15px 7px",
                  width: "100px",
                  height: "50px",
                  backgroundColor: lowbattery ? "#0078D4" : "white",
                }}
                onClick={() => {
                  handleClick(6);
                }}
              >
                <img src={saver} style={{ width: "20px" }} alt="" />
              </button>
              <div>
                <label
                  htmlFor="customRange1"
                  className="form-label"
                  style={{ marginTop: "70px" }}
                >
                  <i
                    className="bi bi-brightness-high"
                    style={{
                      fontSize: "20px",
                      WebkitTextStroke: "0.5px",
                      marginLeft: "5px",
                    }}
                  ></i>
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="customRange1"
                  style={{
                    width: "18vw",
                    margin: "20px 10px",
                    transform: "translateY(3px)",
                  }}
                ></input>
              </div>
              <div>
                <label htmlFor="customRange1" className="form-label">
                  <i
                    className="bi bi-volume-up"
                    style={{
                      fontSize: "20px",
                      WebkitTextStroke: "0.5px",
                      marginLeft: "5px",
                    }}
                  ></i>
                </label>
                <input
                  type="range"
                  className="form-range"
                  id="customRange1"
                  style={{
                    width: "18vw",
                    margin: "20px 10px",
                    transform: "translateY(3px)",
                  }}
                ></input>
              </div>
            </div>
            <div className="modal-footer footer-start ">
              <div style={{ fontSize: "12px", fontWeight: "500" }}>
                <img
                  src={battery}
                  style={{
                    margin: "2px",
                    width: "21px",
                    transform: "translateY(-2px) scale(1.1,1.2)",
                  }}
                  alt=""
                />
                100%
              </div>
              <div>
                <img
                  src={edit}
                  style={{ width: "20px", margin: "10px" }}
                  alt=""
                />
                <i className="bi bi-gear" style={{ fontWeight: "500" }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
