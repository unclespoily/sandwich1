import moment from 'moment'
import React, { useEffect, useState } from 'react'

const DateDisplay: React.FC = () => {
    const [date, setDate] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(moment().toDate().toString())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <span>{date}</span>
        </div>
    )
}

export default DateDisplay
