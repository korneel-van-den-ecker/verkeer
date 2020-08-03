import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch} from 'react-redux'
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
  } = useSelector(selectSignalisatie);
  //De opstart van de app gebeurd hier Kan best in ScripEditor geplaatst worden
  useEffect(() => {
    dispatch(setLocatiesAsync())
    dispatch(setSignalisatiesAsync())
  }, []);

  return (
    <div>
      <MapLeaf></MapLeaf>
      {signalisatiesloading? <CircularProgress></CircularProgress>:
      signalisaties.rssverkeersdata.rss_bord.map(item=><p>{item.abbameldanaam}</p>)}
    </div>
  )
};

export default ScriptService;
