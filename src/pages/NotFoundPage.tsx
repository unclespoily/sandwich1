import React from 'react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate()

    /**
     * Call this function to redirect the user to the homepage.
     */
    const redirectToHomePage = () => {
        navigate(ROUTES.HOMEPAGE_ROUTE)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontSize: '4em' }}>Oops 404!</h1>
            <span style={{ cursor: 'pointer' }} onClick={() => redirectToHomePage()}>
                Homepage
            </span>
        </main>
        <Footer />
        </div>
    );
    return (    
        <div style={{ position: 'absolute', left: '0', bottom: '0', right: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Footer />
        </div>
    )
}

export default NotFoundPage
