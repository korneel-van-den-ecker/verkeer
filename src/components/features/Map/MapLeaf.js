import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, 5]

const MapLeaf = ()=>{
  return(<Map height={"400px"} center={position} zoom={13} >
     <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      //attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    /> 
    {/* <Marker position={position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker> */}
  </Map>)
}
export default MapLeaf;