import React from 'react'
import wifi from '../images/wifi.png'

export default function Title() {
    return (
        <div className = 'title'>
            <h1>My Smart Home <img src={wifi} alt="Wifi"/></h1>
        </div>
    )
}
