import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import ForPilots from './pages/ForPilots.jsx';
import ForBrokers from './pages/ForBrokers.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Membership from './pages/Membership.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Terms from './pages/Terms.jsx';
import DeleteAccount from './pages/DeleteAccount.jsx';
import NotFound from './pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/for-pilots" element={<ForPilots />} />
        <Route path="/for-brokers-carriers" element={<ForBrokers />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
