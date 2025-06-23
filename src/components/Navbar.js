// Navbar.js
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">💫 Help Desk</h1>
      <div className="nav-links">
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : undefined}>Login</NavLink>
        <NavLink to="/submit" className={({ isActive }) => isActive ? 'active' : undefined}>Submit</NavLink>
        <NavLink to="/issues" className={({ isActive }) => isActive ? 'active' : undefined}>Issues</NavLink>
        <NavLink to="/logs" className={({ isActive }) => isActive ? 'active' : undefined}>Logs</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
