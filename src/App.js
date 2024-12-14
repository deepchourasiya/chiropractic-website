import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import "./App.css";

// Pages (can be different components for Home, About, etc.)
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        {/* Header */}
        <Header />

        {/* Main content */}
        <div style={{ padding: "20px" }}>
          <p>Chiro Care - by Sourabh Suman Chourasiya</p>
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes> */}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header/header";
// import Footer from "./components/footer/footer";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>Chiro Care - by Sourabh Suman Chourasiya</p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
