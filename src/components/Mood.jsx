import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Mood() {

  const moodMap = {
    "😔 Sad": 1,
    "😞 Lonely": 2,
    "😰 Stressed": 3,
    "🙂 Happy": 4
  };

  const moods = Object.keys(moodMap);

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("moodHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const addMood = (mood) => {

    const now = new Date();

    const entry = {
      mood,
      value: moodMap[mood],
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString()
    };

    const updated = [...history, entry];

    setHistory(updated);
    localStorage.setItem("moodHistory", JSON.stringify(updated));
  };

  const getInsight = () => {

    if (history.length === 0)
      return "Start logging your mood to see insights 💚";

    const lastMood = history[history.length - 1].mood;

    if (lastMood.includes("Sad"))
      return "You logged sadness recently. Take a short break and breathe slowly 🌿";

    if (lastMood.includes("Lonely"))
      return "Feeling lonely is okay. Try connecting with someone you trust 🤍";

    if (lastMood.includes("Stressed"))
      return "Stress can be reduced by deep breathing and rest 🌸";

    if (lastMood.includes("Happy"))
      return "Great! Keep spreading positive energy ✨";

    return "Keep tracking your mood daily 💚";
  };

  return (
    <div className="page">

      <h2 style={{ color:"#2ecc71" }}>
        Mood Logger 📊
      </h2>

      {/* Mood Buttons */}
      <div style={{ marginBottom:"20px" }}>
        {moods.map((m, i) => (
          <button
            key={i}
            onClick={() => addMood(m)}
            style={{
              margin:"6px",
              padding:"9px 16px",
              borderRadius:"12px",
              border:"none",
              background:"#4a90e2",
              color:"white",
              cursor:"pointer",
              transition:"0.25s"
            }}
            onMouseOver={(e)=>e.target.style.transform="scale(1.05)"}
            onMouseOut={(e)=>e.target.style.transform="scale(1)"}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Insight Card */}
      <div style={{
        background:"#f5f9ff",
        padding:"18px",
        borderRadius:"18px",
        marginBottom:"25px",
        boxShadow:"0 0 10px rgba(0,0,0,0.05)"
      }}>
        <h3>Mood Insight 🌿</h3>
        <p>{getInsight()}</p>
      </div>

      {/* Mood History */}
      <h3>Mood History</h3>

      {history.length === 0 && <p>No mood recorded yet.</p>}

      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.mood} — {item.date} — {item.time}
          </li>
        ))}
      </ul>

      {/* Chart Section */}
      <h3>Mood Chart 📈</h3>

      <div style={{ width:"100%", height:"350px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={history}
            margin={{ top:20, right:20, left:20, bottom:20 }}
          >

            <XAxis dataKey="date" />

            <YAxis
              ticks={[1,2,3,4]}
              domain={[1,4]}
              tickFormatter={(value)=>{
                const labels = {
                  1:"Sad",
                  2:"Lonely",
                  3:"Stressed",
                  4:"Happy"
                };
                return labels[value] || "";
              }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4a90e2"
              strokeWidth={2}
              dot={{ r:4 }}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Mood;