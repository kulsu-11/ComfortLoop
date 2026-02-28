import { useEffect, useState } from "react";

function Avatar() {

  const [avatar, setAvatar] = useState("");

  useEffect(() => {

    const updateAvatar = () => {
      const savedAvatar = localStorage.getItem("comfortloop_avatar");

      if(savedAvatar && savedAvatar !== "null"){
        setAvatar(savedAvatar);
      }
    };

    updateAvatar();

    window.addEventListener("storage", updateAvatar);

    return () => {
      window.removeEventListener("storage", updateAvatar);
    };

  }, []);

  if(!avatar) return null;

  return (
    <div style={{
      position:"fixed",
      bottom:"25px",
      left:"25px",
      zIndex:100
    }}>
      <img
        src={avatar}
        alt="avatar"
        style={{
          width:"80px",
          height:"80px",
          borderRadius:"50%",
          border:"3px solid #2ecc71",
          objectFit:"cover",
          boxShadow:"0 0 15px rgba(0,0,0,0.15)"
        }}
      />
    </div>
  );
}

export default Avatar;