import React from "react";
import defender from "../img/icons8-windows-defender-48.png";
import onedrive from "../img/icons8-microsoft-onedrive-2019-48.png";

export const NavArrow = (props) => {
  return (
    <div style={{ width: "auto" }}>
      <div
        className="modal modal-arrow fade"
        id="arrow"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        onClick={() => {
          props.setArrow(!props.arrow);
        }}
      >
        <div
          className="modal-dialog dialog-arrow "
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="modal-content d-flex">
            <div
              className="modal-body arrow-body "
              style={{ padding: "10px 15px" }}
            >
              <i
                className="bi bi-bluetooth"
                style={{ color: "blue", margin: "5px 10px" }}
              ></i>
              <img
                src={defender}
                style={{ width: "20px", margin: "5px 10px" }}
                alt=""
              />
              <img
                src={onedrive}
                style={{ width: "20px", margin: "5px 10px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
