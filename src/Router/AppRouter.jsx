import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import TopNavbar from '../components/TopNavbar';
import Navbar from '../components/Navbar';
import BotNavbar from '../components/BotNavbar';
import Footer from '../components/Footer';

export default function AppRouter() {
    const location = useLocation();
    return (
      <>
        <Routes location={location} key={location.pathname}>
        <Route element={<TopNavbar />}>
          <Route element={<Navbar />}>
          <Route element={<BotNavbar />}>
          <Route element={<Footer />}/>
            </Route>
            </Route>
          </Route>
        </Routes>
</>
  );
}