import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navigation />
            <main style={{ margin: '20px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                <div>
                    <div>
                    <h1 style={{ fontSize: '4em' }}>About Us</h1>
                    </div>
                    <div>
                    <h2 style={{ fontSize: '1em' }}>There ain&apos;t nothin&apos; ya need to know about me. Scram, kid.</h2>
                    <h2 style={{ fontSize: '1em' }}>Can&apos;t you read?</h2>
                    <h2 style={{ fontSize: '1em' }}>I said scram!</h2>
                    </div>
                </div>
                
            </main>
            <Footer />
        </div>
    );
}

export default AboutUs
