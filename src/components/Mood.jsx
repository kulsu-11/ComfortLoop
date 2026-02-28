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

  const [history, setHistory] = useState([]);

  const addMood = (mood) => {
    const now = new Date();

    const entry = {
      mood,
      value: moodMap[mood],
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString()
    };

    setHistory(prev => [...prev, entry]);
  };

  // Insight Summary Logic ⭐
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

      <h2>Mood Logger 📊</h2>

      {/* Mood Buttons */}
      <div style={{ marginBottom: "15px" }}>
        {moods.map((m, i) => (
          <button
            key={i}
            onClick={() => addMood(m)}
            style={{
              margin: "6px",
              padding: "8px 14px",
              borderRadius: "10px",
              border: "none",
              background: "#4a90e2",
              color: "white",
              cursor: "pointer"
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Insight Card ⭐ */}
      <div style={{
        background: "#f5f9ff",
        padding: "15px",
        borderRadius: "15px",
        marginBottom: "20px"
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

      {/* Mood Chart */}
      <h3>Mood Chart 📈</h3>

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history} margin={{ top: 20, right: 20, left: 20 }}>

            <XAxis dataKey="date" />

            <YAxis
              ticks={[1, 2, 3, 4]}
              tickFormatter={(value) => {
                const moodLabels = {
                  1: "Sad",
                  2: "Lonely",
                  3: "Stressed",
                  4: "Happy"
                };
                return moodLabels[value] || "";
              }}
              domain={[1, 4]}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4a90e2"
              strokeWidth={2}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Mood;