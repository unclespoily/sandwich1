import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Join: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ margin: '20px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <h1 style={{ fontSize: '4em' }}>Join the Discussion!</h1>
                <div style={{ marginTop: '10px' }}>
                    <label htmlFor="sessionId" style={{ display: 'block', marginBottom: '10px', fontSize: '1.5em'  }}>
                        Session ID:
                        <input id="sessionId" type="text" name="sessionId" style={{ marginLeft: '10px', padding: '8px', fontSize: '1em' }} />
                    </label>
                    <label htmlFor="yourName" style={{ display: 'block', marginBottom: '10px', fontSize: '1.5em'  }}>
                        Your Name:
                        <input id="yourName" type="text" name="yourName" style={{ marginLeft: '10px', padding: '8px', fontSize: '1em' }} />
                    </label>
                    <button type="submit" style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
                        Join Session
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Join;