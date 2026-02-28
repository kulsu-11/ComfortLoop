import "./App.css";
import { useState } from "react";

import Home from "./components/Home";
import Mood from "./components/Mood";
import Support from "./components/Support";
import Profile from "./components/Profile";
import Phone from "./components/Phone";
import Avatar from "./components/Avatar";
import FirstTimePopup from "./components/FirstTimePopup";
import About from "./components/About";

function App() {

  const [page, setPage] = useState("home");

  const [showPopup, setShowPopup] = useState(() => {
    return !localStorage.getItem("comfortloop_name");
  });

  return (
    <div className="appWrapper">

      {showPopup && (
        <FirstTimePopup onClose={() => setShowPopup(false)} />
      )}

      <div className="phoneContainer">

        <h1 className="appTitle">Comfort Loop 💚</h1>

        <div className="navButtons">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("mood")}>Mood</button>
          <button onClick={() => setPage("support")}>Support</button>
          <button onClick={() => setPage("profile")}>Profile</button>
          <button onClick={() => setPage("phone")}>Emergency</button>
          <button onClick={() => setPage("about")}>About Us</button>
        </div>

        <div className="pageContent">
          {page === "home" && <Home />}
          {page === "mood" && <Mood />}
          {page === "support" && <Support />}
          {page === "profile" && <Profile />}
          {page === "phone" && <Phone />}
          {page === "about" && <About />}
        </div>

      </div>

      <Avatar />

    </div>
  );
}

export default App;