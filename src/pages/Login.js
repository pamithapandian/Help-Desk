import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate generating a token and storing it
    localStorage.setItem('authToken', 'abcd.1234.efgh');
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);

    // Append login log
    const logs = JSON.parse(localStorage.getItem('logs') || '[]');
    logs.push(`[INFO] User '${username}' (${email}) logged in at ${new Date().toLocaleTimeString()}`);
    localStorage.setItem('logs', JSON.stringify(logs));

    navigate('/submit');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username" 
          required 
        />
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email" 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
