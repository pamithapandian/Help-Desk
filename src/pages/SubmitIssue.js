import { useState } from 'react';

function SubmitIssue() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    
    // Simulate API call delay
    setTimeout(() => {
      // Retrieve existing issues
      const issues = JSON.parse(localStorage.getItem('issues') || '[]');
      issues.push({ ...formData, id: Date.now() });
      localStorage.setItem('issues', JSON.stringify(issues));
      
      // Log the issue submission
      const logs = JSON.parse(localStorage.getItem('logs') || '[]');
      logs.push(`[INFO] Issue submitted by '${formData.name}' at ${new Date().toLocaleTimeString()}`);
      localStorage.setItem('logs', JSON.stringify(logs));
      
      setLoading(false);
      setSuccess('Issue submitted successfully!');
      // Optionally, clear the form
      setFormData({ name: '', email: '', title: '', description: '' });
    }, 1500);
  };

  return (
    <div>
      <h2>Submit an Issue</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name" 
          required 
        /><br/>
        <input 
          type="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email" 
          required 
        /><br/>
        <input 
          type="text" 
          name="title" 
          value={formData.title}
          onChange={handleChange}
          placeholder="Issue Title" 
          required 
        /><br/>
        <textarea 
          name="description" 
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe the issue" 
          required 
        /><br/>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Issue'}
        </button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
}

export default SubmitIssue;
