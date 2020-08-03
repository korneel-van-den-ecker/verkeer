import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";

import {
  selectSignalisaties,
  setScriptServiceAsync
} from "./SignalisatieSlice";

const ScriptService = ({ scriptService, ...props }) => {
  const dispatch = useDispatch()
  //const {


  //} = useSelector(selectSignalisaties);
  //De opstart van de app gebeurd hier Kan best in ScripEditor geplaatst worden
  useEffect(() => {
    dispatch(setScriptServiceAsync())
  }, []);

  return (<div></div>)
};

export default ScriptService;
