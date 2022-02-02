import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
            <h1>Welcome to React Router!</h1>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="about" element={<Navbar />} />
  </Routes>
  </div>
  );
}

export default App;
