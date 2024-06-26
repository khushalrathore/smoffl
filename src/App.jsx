import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Hero from "./Components/Sections/Hero";
import Trend from "./Components/Sections/Trend";
import Stats from "./Components/Sections/Stats";
import Blogs from "./Components/Sections/Blogs";
import Recents from "./Components/Sections/Recents";
import ContactUs from './Pages/ContactUs/ContactUs';
import Courses from './Pages/Courses/Courses';
import Team from './Pages/Team/Team';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions';
import ShippingAndDelivery from './Pages/ShippingAndDelivery';
import CancellationAndRefundPolicy from './Pages/CancellationAndRefundPolicy';

function App() {
  const blogInfo = {
    first: {
      date: 8,
    },
  };

  return (
    <div className="App">
      <main>
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
          <Route path="/team" element={<Team />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-and-delivery" element={<ShippingAndDelivery />} />
          <Route path="/cancellation-and-refunds" element={<CancellationAndRefundPolicy />} />

        </Routes>
      </main>
    </div>
  );
}

export default App;
