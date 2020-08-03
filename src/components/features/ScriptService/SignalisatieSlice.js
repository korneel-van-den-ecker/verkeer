import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import apiRoutes from "../../api/apiRoutes";
import {extractCompileError} from '../../../lib/functions'
import {parseString} from 'xml2js'

const initialState = {
  //scriptServices: [],

  signalisatiesloading: true,
  signalisatiesHasErrors: false,
  signalisaties: undefined,

};

export const slice = createSlice({
  name: "signalisatie",
  initialState,
  reducers: {
   
    getSignalisaties: (state) => {
      //state.scriptService = action.payload;
      state.signalisatiesloading = true;
    },
    getSignalisatiesSucces: (state, data) => {
      state.signalisaties = data.payload;
      //Beginstate van de monitor opbouwen
      /* data.payload.Channels.forEach(channel => {
        data.currensState.Events.push({channel:{}})
      }); */
      state.signalisatiesloading = false;
      state.signalisatiesHasErrors = false;
    },
    getSignalisatiesFailure: (state) => {
      //state.scriptServiceloading = false;
      state.signalisatiesHasErrors = true;
    },    
  },
});

export const {
  getSignalisaties,
  getSignalisatiesSucces,
  getSignalisatiesFailure,
} = slice.actions;
//Thunk


export const setScriptServiceAsync = (GUID) => {
  return async (dispatch) => {
    try {
      dispatch(getSignalisaties());
      const resp = await Axios.get("https://cors-anywhere.herokuapp.com/"+"http://rss.opendata.belfla.be/rss/verkeersdata",{
        "Content-Type": "application/xml; charset=utf-8"
      });
      //Script Service
      const info = resp.data;
      //const parser = new DOMParser()
      //const xmlDoc = parser.parseFromString(info,"text/xml");

      //console.log(xmlDoc)
      parseString(info,
        (err,result)=>{
          if(!err){
            //const str = JSON.stringify(result)
            console.log(result)
            dispatch(getSignalisatiesSucces(result))
          }
        })
      //console.log(info)
      //await dispatch(setSubsctriptionToScriptService(ss));
      //dispatch(getSignalisatiesSucces(xmlDoc.getElementsByTagName("rssverkeersdata")[0]));
      
    } catch (err) {
      //Hier err doorgeven naar failure fucntie?
      //dispatch(getScriptServiceFailure());  
    }
  };
};

//Selectors
export const selectSignalisatie = (state) => state.signalisatie;
//export const selectCurrentStateScriptService = (state) =>
//  state.scriptService.currentState;
export const selectChannels = (state) => state.scriptService.channels;
export const selectSpecificChannel = (state, GUID) => {
  return state.channels.find((i) => i.GUID === GUID);
};

export default slice.reducer;
