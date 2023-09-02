import React, { useState } from "react";

const ImageViewer = ({ imageUrl, isButton2Clicked }) => {
  const [zoomLevel, setZoomLevel] = useState(50);

  const handleZoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 5);
    }
  };

  const handleZoomOut = () => {
    if (zoomLevel > 5) {
      setZoomLevel(zoomLevel - 5);
    }
  };
  return (
    <div
      className="image-viewer"
      style={{
        overflow: "auto",
        padding: "5px",
        height: isButton2Clicked ? "68vh" : "80vh",
      }}
    >
      <img
        src={imageUrl}
        alt="Viewer"
        style={{
          width: `${zoomLevel}%`,
        }}
      />
      <div
        className="controls"
        style={{
          position: "absolute",
          bottom: "5%",
          right: "5%",
          backgroundColor: "black",
          borderRadius: "10px",
        }}
      >
        <button
          className="btn btn-dark"
          style={{ margin: "10px" }}
          onClick={handleZoomIn}
        >
          <i class="bi bi-zoom-in"></i>
        </button>
        <span style={{ color: "white" }}>{zoomLevel}%</span>
        <button
          className="btn btn-dark"
          style={{ margin: "10px" }}
          onClick={handleZoomOut}
        >
          <i class="bi bi-zoom-out"></i>
        </button>
      </div>
    </div>
  );
};

export default ImageViewer;
