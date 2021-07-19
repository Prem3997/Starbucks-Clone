import React, { useCallback, useRef, useState } from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import * as mapsData from "../../constants/MapsData.json"
import { MapStyles } from './MapStyles'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox'
import { Fade } from 'react-awesome-reveal';
import "@reach/combobox/styles.css";
import "./MapStyles.css"

const libraries = ["places"]
const mapContainerStyle = {
    width: '100vw',
    height: '89.5vh'
}

const center = {
    lat: 45.4211,
    lng: -75.6903
}

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

function Map() {
    const REACT_APP_GOOGLE_MAPS_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    const [selectedMapData, setSelectedMapData] = useState(null)
    const mapRef = useRef()
    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(14)
    }, [])
    if (loadError) return "Error Loading Maps"

    if (!isLoaded) return "Loading Maps"


    return (
        <>
            <Locate panTo={panTo} />
            <Search panTo={panTo} />
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
                onLoad={onMapLoad}
            >
                {mapsData.features.map((mapData) => (
                    <Marker
                        key={mapData.properties.PARK_ID}
                        position={{
                            lat: mapData.geometry.coordinates[1],
                            lng: mapData.geometry.coordinates[0]
                        }}
                        onClick={() => {
                            setSelectedMapData(mapData)
                        }}
                        icon={{
                            url: "/images/MapIcon.png",
                            scaledSize: new window.google.maps.Size(65, 65)
                        }}
                    />
                ))}
                {selectedMapData && (
                    <InfoWindow
                        position={{
                            lat: selectedMapData.geometry.coordinates[1],
                            lng: selectedMapData.geometry.coordinates[0]
                        }}
                        onCloseClick={() => setSelectedMapData(null)}
                    >
                        <div>
                            <h2>{selectedMapData.properties.NAME}</h2>
                            <p>{selectedMapData.properties.DESCRIPTIO}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </>
    )
}

export default Map

function Locate({ panTo }) {
    return <button
        className="locate"
        onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => null
            );
        }}
    >
        <img src="images/compass.svg" alt="locate me" />
    </button>
}

function Search({ panTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: {
                lat: () => 45.4211,
                lng: () => -75.6903
            },
            radius: 200 * 1000, //km * 1000m
        }
    })
    return <div className="search">
        <Fade>
            <Combobox onSelect={async (address) => {
                setValue(address, false)
                clearSuggestions()
                try {
                    const results = await getGeocode({ address })
                    const { lat, lng } = await getLatLng(results[0])
                    panTo({ lat, lng })

                } catch (error) {
                    console.log(error)
                }
            }}>
                <ComboboxInput
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({ id, description }) => <ComboboxOption
                            KEY={id}
                            value={description}
                        />)}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </Fade>
    </div>
}
