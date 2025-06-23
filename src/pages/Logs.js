import { useEffect, useState } from 'react';

function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const storedLogs = JSON.parse(localStorage.getItem('logs') || '[]');
    setLogs(storedLogs);
  }, []);

  return (
    <div>
      <h2>Activity Logs</h2>
      {logs.length === 0 ? (
        <p>No logs recorded.</p>
      ) : (
        <div
          style={{
            fontFamily: 'monospace',
            backgroundColor: '#fffbea',
            border: '2px solid #ff9800',
            padding: '20px',
            marginTop: '15px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            whiteSpace: 'pre-wrap',
            lineHeight: '1.6',
          }}
        >
          {logs.map((log, index) => `• ${log}\n`)}
        </div>
      )}
    </div>
  );
}

export default Logs;
