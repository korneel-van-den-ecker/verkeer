import React from 'react'
import {  Marker, Popup} from 'react-leaflet'


const Markers = ({signalisaties, locaties}) => {

    const constructMarkers = (locatie_bord,bord) =>{
        const markers = []
        
        signalisaties.rssverkeersdata.rss_bord.map(
            bord =>{
                const breedtegraad = (locaties.rssconfiguratie.rss_bord.find(
                    locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).breedtegraad_EPSG_4326)[0].replace(',','.');
                const lengtegraad = (locaties.rssconfiguratie.rss_bord.find(
                    locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).lengtegraad_EPSG_4326)[0].replace(',','.');    
                const marker =  <Marker position={[
                    parseFloat(breedtegraad),
                    parseFloat(lengtegraad)
                    ]} 
                        >                    
                </Marker>
            markers.push(marker)    
            }            
        )
        return markers;
    }

    return (constructMarkers()
       /* signalisaties.rssverkeersdata.rss_bord.map(
            bord =>
                <Marker position={[
                    locaties.rssconfiguratie.rss_bord.find(
                    locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).breedtegraad_EPSG_4326,
                    locaties.rssconfiguratie.rss_bord.find(
                        locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).lengtegraad_EPSG_4326]} 
                        >                    
                </Marker>
        ) */) 
}

export default Markers