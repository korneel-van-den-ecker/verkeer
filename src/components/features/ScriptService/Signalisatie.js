import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import MapLeaf from '../Map/MapLeaf'

import {
  selectSignalisatie,
  setLocatiesAsync,
  setSignalisatiesAsync
} from "./SignalisatieSlice";

const ScriptService = ({ scriptService, ...props }) => {
  const dispatch = useDispatch()
  const {
    signalisaties,
    signalisatiesloading,
    locatiesLoading,
    locaties
  } = useSelector(selectSignalisatie);
  //De opstart van de app gebeurd hier Kan best in ScripEditor geplaatst worden
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(setSignalisatiesAsync());
      dispatch(setLocatiesAsync())
    }, 5000)
    return () => clearTimeout(timer);
  }, []);

  const ConstructMarkers = () => {

  }

  return (
    <div>

      {(signalisaties === undefined || locaties === undefined) ? <CircularProgress></CircularProgress> :
        <MapLeaf signalisaties={signalisaties} locaties={locaties}></MapLeaf>
        /* signalisaties.rssverkeersdata.rss_bord.map(
          bord =>
            <p key={bord.abbameldanaam}>
              {locaties.rssconfiguratie.rss_bord.find(
                locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).lengtegraad_EPSG_4326}
                <br />{locaties.rssconfiguratie.rss_bord.find(
                  locatie_bord => locatie_bord.$.unieke_id === bord.$.unieke_id).breedtegraad_EPSG_4326}
            </p>
        ) */}
    </div>
  )
};

export default ScriptService;
