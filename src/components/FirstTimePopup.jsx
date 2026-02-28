import { useState } from "react";

function FirstTimePopup({ onClose }) {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const saveProfile = () => {

    if(name.trim() === ""){
      alert("Please enter your name 💚");
      return;
    }

    localStorage.setItem("comfortloop_name", name);

    if(avatar){
      localStorage.setItem("comfortloop_avatar", avatar);
    } else {
      localStorage.setItem("comfortloop_avatar", "/avatars/boy.jpeg");
    }

    onClose();
  };

  const chooseAvatar = (path) => {
    setAvatar(path);
  };

  const avatarStyle = (path) => ({
    width: "65px",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "50%",
    border: avatar === path ? "3px solid #2ecc71" : "2px solid transparent",
    transform: avatar === path ? "scale(1.1)" : "scale(1)",
    transition: "0.25s"
  });

  return (
    <div style={{
      position:"fixed",
      inset:0,
      background:"rgba(0,0,0,0.65)",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      zIndex:999
    }}>

      <div style={{
        background:"white",
        padding:"30px",
        borderRadius:"22px",
        width:"330px",
        textAlign:"center",
        boxShadow:"0 0 25px rgba(0,0,0,0.15)"
      }}>

        <h2 style={{ color:"#2ecc71" }}>
          Welcome to Comfort Loop 💚
        </h2>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={e=>setName(e.target.value)}
          style={{
            width:"100%",
            padding:"12px",
            marginTop:"15px",
            borderRadius:"12px",
            border:"1px solid #ddd",
            outline:"none"
          }}
        />

        <h4 style={{ marginTop:"22px" }}>
          Select Avatar
        </h4>

        <div>

          <img
            src="/avatars/boy.jpeg"
            onClick={()=>chooseAvatar("/avatars/boy.jpeg")}
            style={avatarStyle("/avatars/boy.jpeg")}
            alt="boy avatar"
          />

          <img
            src="/avatars/girl.jpeg"
            onClick={()=>chooseAvatar("/avatars/girl.jpeg")}
            style={avatarStyle("/avatars/girl.jpeg")}
            alt="girl avatar"
          />

        </div>

        <button
          onClick={saveProfile}
          style={{
            marginTop:"25px",
            width:"100%",
            padding:"12px",
            background:"#2ecc71",
            border:"none",
            borderRadius:"12px",
            color:"white",
            cursor:"pointer",
            fontWeight:"600",
            transition:"0.3s"
          }}
        >
          Continue
        </button>

      </div>
    </div>
  );
}

export default FirstTimePopup;