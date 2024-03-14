import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import SandwichSession from './pages/SandwichSession';
import AboutUs from './pages/AboutUs';
import Join from './pages/Join';
import Contact from './pages/Contact';
import Facilitator from './pages/Facilitator';
import NotFoundPage from './pages/NotFoundPage';
import './styles/main.sass'
import RetroSession from './pages/RetroSession';
import PointingSession from './pages/PointingSession';

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/sandwich/:sessionId" element={<SandwichSession />} />
                <Route path="/retro/:sessionId" element={<RetroSession />} />
                <Route path="/pointing/:sessionId" element={<PointingSession />} />
                <Route path="/join" element={<Join />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/facilitator" element={<Facilitator />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default RootComponent
