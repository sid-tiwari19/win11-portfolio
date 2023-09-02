import React from "react";
import shutdown from "../img/shutdown.mp4";

const Shutdown = () => {
  return (
    <div>
      <div
        className="modal modal-shut fade"
        id="shut"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog dialog-shut ">
          <div className="modal-content d-flex">
            <div className="modal-body shut-body ">
              <video
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  top: 0,
                  left: 0,
                  margin: "0",
                  padding: "0",
                  overflow: "hidden",
                }}
                autoPlay
                muted
              >
                <source src={shutdown} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modal-sleep fade"
        id="sleep"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog dialog-sleep ">
          <div className="modal-content d-flex">
            <div className="modal-body sleep-body "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shutdown;
