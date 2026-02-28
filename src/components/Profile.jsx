import { useState, useEffect } from "react";

function Profile() {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("/avatars/boy.jpeg");

  useEffect(() => {

    const savedName = localStorage.getItem("comfortloop_name");
    const savedAvatar = localStorage.getItem("comfortloop_avatar");

    if(savedName) setName(savedName);

    if(savedAvatar){
      setAvatar(savedAvatar);
    }

  }, []);

  const chooseAvatar = (path) => {
    setAvatar(path);
    localStorage.setItem("comfortloop_avatar", path);
    window.dispatchEvent(new Event("storage"));
  };

  const saveProfile = () => {

    if(name.trim() === ""){
      alert("Please enter your name 💚");
      return;
    }

    localStorage.setItem("comfortloop_name", name);

    alert("Profile saved successfully 💚");
  };

  const avatarStyle = (path) => ({
    width:"60px",
    margin:"10px",
    cursor:"pointer",
    borderRadius:"50%",
    border: avatar === path ? "3px solid #2ecc71" : "2px solid transparent",
    transition:"0.25s"
  });

  return (
    <div className="page">

      <h2>Profile 👤</h2>

      {/* Avatar Preview */}
      {avatar && (
        <img
          src={avatar}
          alt="avatar preview"
          style={{
            width:"90px",
            height:"90px",
            borderRadius:"50%",
            marginBottom:"20px",
            border:"3px solid #2ecc71",
            objectFit:"cover"
          }}
          onError={(e)=>e.target.style.display="none"}
        />
      )}

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          borderRadius:"10px",
          border:"1px solid #ddd",
          marginBottom:"15px"
        }}
      />

      <h3>Select Avatar</h3>

      <div style={{ marginBottom:"20px" }}>

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
          padding:"10px 18px",
          border:"none",
          borderRadius:"10px",
          background:"#2ecc71",
          color:"white",
          cursor:"pointer",
          fontWeight:"500"
        }}
      >
        Save Profile 💾
      </button>

    </div>
  );
}

export default Profile;