import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '4em' }}>Contact Us</h1>
            </main>
            <Footer />
        </div>
    );
}

export default Contact
