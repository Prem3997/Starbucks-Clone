import React from 'react'
import Map from '../../components/Map/Map'
import { Fade } from 'react-awesome-reveal'
import "./StoreLocator.css"
function StoreLocatorScreen() {

    return (
        <Fade>
            <div style={{ width: "100vh", height: "90vh" }}>
                <Map/>
            </div>
        </Fade>
    )
}

export default StoreLocatorScreen
