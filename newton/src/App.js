import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Mainpart from './components/Main-Part/Mainpart';
import ChatGPT from './components/ChatGPT/ChatGPT'; // Import Chatbot component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div><Navbar /><Mainpart /></div>} />
        <Route path="/signup" element={<Signup />} />
        {/* Route to navigate to chatbot after successful signup */}
        <Route path="/ChatGPT" element={<ChatGPT />} />
        {/* Add a default route to redirect to main page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
