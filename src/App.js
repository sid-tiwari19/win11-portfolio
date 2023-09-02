import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/navbar";
import { StartButton } from "./components/StartButton";
import { NavArrow } from "./components/NavArrow";
import { Wifi } from "./components/Wifi";
import PortState from "./context/PortState";
import Shutdown from "./components/Shutdown";
import { Home } from "./components/Home";
import Fileexplorer from "./components/Fileexplorer";
import RecyleBin from "./components/RecycleBin";
import VSCode from "./components/VSCode";
import Outlook from "./components/Outlook";
import NotePad from "./components/NotePad";
import Adobe from "./components/Adobe";
import Todo from "./components/Todo";
import Teams from "./components/Teams";

function App() {
  const [arrow, setArrow] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <PortState>
      <div className="App">
        <Shutdown />
        <Fileexplorer />
        <RecyleBin />
        <VSCode />
        <Outlook />
        <NotePad />
        <Adobe />
        <Teams />
        <Todo />
        <Home />
        <StartButton search={search} />
        <NavArrow setArrow={setArrow} arrow={arrow} />
        <Wifi />
        <Navbar arrow={arrow} setSearch={setSearch} search={search} />
      </div>
    </PortState>
  );
}

export default App;
