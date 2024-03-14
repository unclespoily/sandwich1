import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const RetroSession: React.FC = () => {
    const { sessionId } = useParams() as { sessionId: string };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h1>Session: {sessionId}</h1>
            {}
            </main>
            <Footer />
        </div>
    );
}

export default RetroSession