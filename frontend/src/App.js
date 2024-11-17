import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ParentDashboard from './pages/ParentDashboard'; // Ensure the correct path to ParentDashboard

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/parent-dashboard" element={<ParentDashboard />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
