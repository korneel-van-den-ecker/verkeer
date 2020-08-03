import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Markers from './Markers'
const position = [50.84673, 4.35247]

const MapLeaf = ({signalisaties,locaties}) => {
  return (
    <Map className={"leaflet-container"} center={position} zoom={12} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      //maxZoom={18}
      />
      {/* <Marker position={position}>
        <Popup><h1>A pretty CSS3 popup.<br />Easily customizable.</h1></Popup>
      </Marker> */}
      <Markers signalisaties={signalisaties} locaties={locaties}></Markers>
    </Map>
  )
}
export default MapLeaf;