import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function About() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true); // Modal shows on load

  const handleLearnMore = () => {
    setShowModal(false);
    navigate('/server-fundamentals'); // Change to your actual route
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3 style={{ marginBottom: '15px' }}>✨ Want to Explore More?</h3>
            <p style={{ marginBottom: '25px' }}>
              Learn about the server-side fundamentals behind this project.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <button onClick={handleLearnMore} style={styles.buttonPrimary}>Learn More</button>
              <button onClick={handleClose} style={styles.buttonSecondary}>Maybe Later</button>
            </div>
          </div>
        </div>
      )}

      <h2>About the Help Desk System</h2>
      <div style={styles.contentBox}>
        <p>
          The <strong>Help Desk Simulator</strong> is a project built using React that demonstrates key concepts of
          server-side engineering in a simple, interactive, and educational way.
        </p>

        <h3> Project Objectives</h3>
        <ul>
          <li>Simulate secure user login and session-like behavior.</li>
          <li>Allow users to submit issues they are facing.</li>
          <li>Provide functionality to view, solve, and edit submitted issues.</li>
          <li>Maintain and display activity logs for accountability.</li>
        </ul>

        <h3> Key Features</h3>
        <ul>
          <li>Protected routing using simulated authentication tokens.</li>
          <li>Dynamic issue and log management with localStorage.</li>
          <li>Real-time UI updates without refreshing.</li>
          <li>Solution editing and persistent logs.</li>
        </ul>

        <h3> Server-Side Fundamentals Demonstrated</h3>
        <ul>
          <li><strong>Authentication</strong> (using token-like validation).</li>
          <li><strong>Authorization</strong> via protected routes.</li>
          <li><strong>Session persistence</strong> with localStorage.</li>
          <li><strong>Logging</strong> system to record activities.</li>
          <li><strong>Data management</strong> similar to backend APIs.</li>
        </ul>

        <h3> Design and Creativity</h3>
        <p>
          The application uses colorful themes, gradients, and structured layouts. Logs are displayed in highlighted
          cards. Forms and buttons use gradients and responsive styling for better user experience.
        </p>

        <h3> Technologies Used</h3>
        <ul>
          <li>React (Hooks, Router)</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML + CSS (with gradients and cards)</li>
          <li>LocalStorage API</li>
        </ul>

        <p>
          This project helps users understand how core server-side concepts like sessions, auth, logs, and data
          handling can be simulated and visualized in a front-end React app without needing a backend.
        </p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '30px 40px',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '400px',
  },
  buttonPrimary: {
    padding: '10px 20px',
    backgroundColor: '#2196f3',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  buttonSecondary: {
    padding: '10px 20px',
    backgroundColor: '#e0e0e0',
    color: '#333',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  contentBox: {
    backgroundColor: '#f4faff',
    border: '2px solid #4fc3f7',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.7',
  },
};

export default About;
