import { useEffect, useState } from "react";

function Home() {

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {

    const savedName = localStorage.getItem("comfortloop_name");
    const savedAvatar = localStorage.getItem("comfortloop_avatar");

    if(savedName) setName(savedName);
    if(savedAvatar && savedAvatar !== "null"){
      setAvatar(savedAvatar);
    }

  }, []);

  return (
    <div style={{ padding:"25px" }}>

      <h2 style={{ color:"#2ecc71" }}>
        Welcome {name || "to Comfort Loop"} 💚
      </h2>

      <p style={{ opacity:0.8 }}>
        You matter. Take small steps every day 🌿
      </p>

      <div style={{
        marginTop:"25px",
        padding:"20px",
        background:"#f9f9f9",
        borderRadius:"18px",
        boxShadow:"0 0 8px rgba(0,0,0,0.05)"
      }}>
        <h3>🌿 You Matter</h3>

        <p>
          Remember to breathe slowly, stay hydrated,
          and talk to someone you trust.
        </p>
      </div>

      {avatar && (
        <img
          src={avatar}
          alt="user avatar"
          style={{
            position:"fixed",
            bottom:"25px",
            left:"25px",
            width:"65px",
            height:"65px",
            borderRadius:"50%",
            objectFit:"cover",
            border:"3px solid #2ecc71",
            boxShadow:"0 0 15px rgba(46,204,113,0.4)",
            transition:"0.3s"
          }}
          onMouseOver={(e)=>{
            e.target.style.transform="scale(1.1)";
          }}
          onMouseOut={(e)=>{
            e.target.style.transform="scale(1)";
          }}
          onError={(e)=>{
            e.target.style.display="none";
          }}
        />
      )}

    </div>
  );
}

export default Home;