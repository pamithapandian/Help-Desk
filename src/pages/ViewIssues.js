import { useEffect, useState } from 'react';

function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [solutions, setSolutions] = useState({});
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const storedIssues = JSON.parse(localStorage.getItem('issues') || '[]');
    setIssues(storedIssues);

    const savedSolutions = JSON.parse(localStorage.getItem('solutions') || '{}');
    setSolutions(savedSolutions);
  }, []);

  const handleChange = (id, value) => {
    setSolutions((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitSolution = (id, title, name) => {
    if (!solutions[id]) {
      alert("Please enter a solution.");
      return;
    }

    const updatedSolutions = { ...solutions };
    localStorage.setItem('solutions', JSON.stringify(updatedSolutions));

    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push(`[SOLVED] Issue "${title}" by ${name} was solved at ${new Date().toLocaleTimeString()}`);
    localStorage.setItem('logs', JSON.stringify(logs));

    alert("Solution submitted and saved.");
    setEditingId(null);
  };

  return (
    <div>
      <h2>View Submitted Issues</h2>
      {issues.length === 0 ? (
        <p>No issues submitted yet.</p>
      ) : (
        issues.map((issue) => {
          const hasSolution = solutions.hasOwnProperty(issue.id);
          const isEditing = editingId === issue.id;

          return (
            <div
              key={issue.id}
              style={{
                border: '1px solid #ccc',
                margin: '15px 0',
                padding: '15px',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
              <small>
                Submitted by: <strong>{issue.name}</strong>
              </small>

              {/* If no solution yet */}
              {!hasSolution && (
                <div style={{ marginTop: '10px' }}>
                  <textarea
                    placeholder="Enter solution here..."
                    value={solutions[issue.id] || ''}
                    onChange={(e) => handleChange(issue.id, e.target.value)}
                    rows="3"
                    style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
                  />
                  <button onClick={() => handleSubmitSolution(issue.id, issue.title, issue.name)}>
                    Submit Solution
                  </button>
                </div>
              )}

              {/* If solution already exists */}
              {hasSolution && !isEditing && (
                <div
                  style={{
                    marginTop: '12px',
                    padding: '12px',
                    backgroundColor: '#e0ffe0',
                    borderLeft: '5px solid #4caf50',
                    borderRadius: '5px',
                  }}
                >
                  <strong>Solution:</strong>
                  <p style={{ margin: 0 }}>{solutions[issue.id]}</p>
                  <button
                    style={{ marginTop: '10px' }}
                    onClick={() => setEditingId(issue.id)}
                  >
                    Edit Solution
                  </button>
                </div>
              )}

              {/* If editing the existing solution */}
              {hasSolution && isEditing && (
                <div style={{ marginTop: '10px' }}>
                  <textarea
                    value={solutions[issue.id]}
                    onChange={(e) => handleChange(issue.id, e.target.value)}
                    rows="3"
                    style={{ width: '100%', marginBottom: '8px', padding: '8px' }}
                  />
                  <button onClick={() => handleSubmitSolution(issue.id, issue.title, issue.name)}>
                    Save Solution
                  </button>
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default ViewIssues;
