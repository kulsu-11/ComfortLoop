import { useState } from "react";

function Profile({ setPage, setAvatarType }) {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [selectedType, setSelectedType] = useState("girl");

  const handleSave = () => {
    if (name.trim() === "") return;
    setSavedName(name);
    setAvatarType(selectedType);
    setName("");
  };

  return (
    <div className="page">
      <h1>Your Profile 👤</h1>

      {savedName ? (
        <h2>Welcome, {savedName}!</h2>
      ) : (
        <p>Create your profile below.</p>
      )}

      <div className="profileSection">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="avatarSelect">
          <p>Select Avatar Type:</p>

          <button
            className={selectedType === "girl" ? "active" : ""}
            onClick={() => setSelectedType("girl")}
          >
            Girl Avatar
          </button>

          <button
            className={selectedType === "boy" ? "active" : ""}
            onClick={() => setSelectedType("boy")}
          >
            Boy Avatar
          </button>
        </div>

        <button onClick={handleSave}>Save Profile</button>
      </div>

      <button className="backButton" onClick={() => setPage("home")}>
        Back to Home
      </button>
    </div>
  );
}

export default Profile;