import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import SubmitIssue from './pages/SubmitIssue';
import ViewIssues from './pages/ViewIssues';
import Logs from './pages/Logs';
import About from './pages/About';
import ServerFundamentals from './pages/ServerFundamentals'; // ✅ NEW IMPORT
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route 
            path="/submit" 
            element={
              <ProtectedRoute>
                <SubmitIssue />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/issues" 
            element={
              <ProtectedRoute>
                <ViewIssues />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/logs" 
            element={
              <ProtectedRoute>
                <Logs />
              </ProtectedRoute>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/server-fundamentals" element={<ServerFundamentals />} /> {/* ✅ NEW ROUTE */}
          
          {/* Default route */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
