import React, { useState, useRef } from "react";
import PortContext from "./PortContext";

const PortState = (props) => {
  // date and time update
  const [time, setTime] = useState(`${new Date().toLocaleTimeString()}`);
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);
  const [isModalOpen, setIsModalOpen] = useState([]);
  const [mini, setMini] = useState([]);
  const [iconOrder, setIconOrder] = useState([]);
  const videoRef = useRef(null);
  const [formattedDate, setFormattedDate] = useState("");

  function formatDate(date) {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
    };
    return date.toLocaleDateString(undefined, options);
  }

  const updateTime = () => {
    const d = new Date();
    setTime(`${d.toLocaleTimeString()}`);
    setDate(`${d.toLocaleDateString()}`);
    const formattedDateString = formatDate(d);
    setFormattedDate(formattedDateString);
  };

  setInterval(updateTime, 5000);

  return (
    <PortContext.Provider
      value={{
        time,
        date,
        videoRef,
        isModalOpen,
        setIsModalOpen,
        mini,
        setMini,
        iconOrder,
        setIconOrder,
        formattedDate,
      }}
    >
      {props.children}
    </PortContext.Provider>
  );
};

export default PortState;
