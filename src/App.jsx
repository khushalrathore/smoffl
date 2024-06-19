import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from "./Components/Sections/Hero"
import Trend from "./Components/Sections/Trend"
import Stats from "./Components/Sections/Stats"
import Blogs from "./Components/Sections/Blogs"
import Recents from "./Components/Sections/Recents"
import ContactUs from './Pages/ContactUs/ContactUs';
import Courses from './Pages/ContactUs/Courses';

function App() {
  const blogInfo = {
    first: {
      date: 8
    }
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Trend />
              <Blogs blogDate={blogInfo.first.date} />
              <Recents />
            </>
          } />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/courses" element={<Courses />} />
          {/* Add other routes here if needed */}
        </Routes>
      </div>
    </Router>

  );
}

export default App
