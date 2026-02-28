function Phone({ setPage }) {
  return (
    <div className="page">
      <h1>Emergency Support 📞</h1>

      <div className="phoneCard">
        <h2>KIRAN Mental Health Helpline (India)</h2>
        <h3>📞 1800-599-0019</h3>
        <p>Available 24/7 • Free & Confidential</p>
      </div>

      <div className="phoneCard">
        <h2>If You Are In Immediate Danger</h2>
        <p>Please call your local emergency services immediately.</p>
      </div>

      <button className="backButton" onClick={() => setPage("home")}>
        Back to Home
      </button>
    </div>
  );
}

export default Phone;