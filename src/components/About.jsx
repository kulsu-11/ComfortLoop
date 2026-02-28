function About({ setPage }) {
  return (
    <div className="page">
      <h1>About This App 🌿</h1>

      <div className="aboutSection">
        <p>
          This Mood Tracker & Support App is designed to help users
          understand their emotions and feel supported.
        </p>

        <h3>Features:</h3>

        <ul>
          <li>💭 Track daily moods</li>
          <li>💬 Emotional support chat</li>
          <li>🐾 Mood-based animated avatar</li>
          <li>📞 Emergency mental health helpline</li>
        </ul>

        <p>
          Our mission is to create a safe digital space
          where emotions are respected and supported.
        </p>
      </div>

      <button className="backButton" onClick={() => setPage("home")}>
        Back to Home
      </button>
    </div>
  );
}

export default About;