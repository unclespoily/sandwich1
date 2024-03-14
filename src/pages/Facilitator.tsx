import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Facilitator: React.FC = () => {
    function generateSessionID(): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
    
    const navigate = useNavigate(); // useNavigate instead of useHistory

    const startSandwichSession = () => {
        const guid = generateSessionID();
        navigate(`/sandwich/${guid}`); // Use navigate instead of history.push
    };

    const startRetroSession = () => {
        const guid = generateSessionID();
        navigate(`/retro/${guid}`); // Use navigate instead of history.push
    };

    const startPointingSession = () => {
        const guid = generateSessionID();
        navigate(`/pointing/${guid}`); // Use navigate instead of history.push
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ margin: '20px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h1 style={{ fontSize: '4em' }}>Start a Discussion!</h1>
                <div style={{ marginTop: '10px', justifyContent: 'column' }}>
                    <button type="button" onClick={startSandwichSession} style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Start Sandwich Discussion
                    </button>
                </div>
                <div style={{ marginTop: '10px', justifyContent: 'column' }}>
                    <button type="button" onClick={startRetroSession} style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Start Retrospective
                    </button>
                </div>
                <div style={{ marginTop: '10px', justifyContent: 'column' }}>    
                    <button type="button" onClick={startPointingSession} style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Start Pointing Poker
                    </button>
                </div>
                <div style={{ marginTop: '10px', justifyContent: 'column' }}>    
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Previous Sessions
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Facilitator;
