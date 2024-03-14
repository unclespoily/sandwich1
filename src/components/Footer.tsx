import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const Footer: React.FC = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState('')


    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().year().toString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    const redirectToContact = () => {
        navigate(ROUTES.CONTACT_ROUTE)
        }

    return (
        <div style={{ width: 'flex', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '0 20px', backgroundColor: '#f0f0f0' }}>
            <span style={{ cursor: 'pointer', marginBottom: '20px', marginTop: '30px' }} onClick={() => redirectToContact()}>
                Contact Us
            </span>
            <h2>©{date} Blake Boily</h2> 
        </div>)
}

export default Footer;