import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './containers/LoginForm';
import Footer from './containers/Footer';



const App = () => (
  <div className="min-h-screen flex flex-col">
    <div className="flex-grow">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
    </div>
    <Footer />
  </div>
);




export default App;
