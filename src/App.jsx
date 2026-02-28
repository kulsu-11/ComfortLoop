import "./App.css";
import { useState } from "react";

import Home from "./components/Home";
import Mood from "./components/Mood";
import Support from "./components/Support";
import Profile from "./components/Profile";
import Phone from "./components/Phone";
import Avatar from "./components/Avatar";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="appWrapper">

      <div className="phoneContainer">

        <h1 className="appTitle">Comfort Loop 💚</h1>

        <div className="navButtons">
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("mood")}>Mood</button>
          <button onClick={() => setPage("support")}>Support</button>
          <button onClick={() => setPage("profile")}>Profile</button>
          <button onClick={() => setPage("phone")}>Emergency</button>
        </div>

        <div className="pageContent">
          {page === "home" && <Home />}
          {page === "mood" && <Mood />}
          {page === "support" && <Support />}
          {page === "profile" && <Profile />}
          {page === "phone" && <Phone />}
        </div>

      </div>

      {/* Simple Avatar Placeholder */}
      <Avatar />

    </div>
  );
}

export default App;