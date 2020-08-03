import { createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import apiRoutes from "../../api/apiRoutes";
import {extractCompileError} from '../../../lib/functions'
import {parseString} from 'xml2js'

const initialState = {
  //scriptServices: [],

  signalisatiesloading: false,
  signalisatiesHasErrors: false,
  signalisaties: undefined,

};

export const slice = createSlice({
  name: "scriptService",
  initialState,
  reducers: {
   
    getSignalisaties: (state) => {
      //state.scriptService = action.payload;
      state.scriptServiceloading = true;
    },
    getSignalisatiesSucces: (state, data) => {
      state.scriptService = data.payload;
      //Beginstate van de monitor opbouwen
      /* data.payload.Channels.forEach(channel => {
        data.currensState.Events.push({channel:{}})
      }); */
      state.scriptServiceloading = false;
      state.scriptServiceHasErrors = false;
    },
    getSignalisatiesFailure: (state) => {
      //state.scriptServiceloading = false;
      state.scriptServiceHasErrors = true;
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
      await dispatch(getSignalisaties());
      const resp = await Axios.get("https://cors-anywhere.herokuapp.com/"+"http://rss.opendata.belfla.be/rss/verkeersdata");
      //Script Service
      const info = resp.data;
      parseString(info,
        (err,result)=>{
          if(!err){
            //const str = JSON.stringify(result)
            console.log(result)
          }
        })
      //console.log(info)
      //await dispatch(setSubsctriptionToScriptService(ss));
      //dispatch(getScriptServiceSucces(ss));
    } catch (err) {
      //Hier err doorgeven naar failure fucntie?
      //dispatch(getScriptServiceFailure());
    }
  };
};

//Selectors
export const selectSignalisaties = (state) => state.signalisaties;
//export const selectCurrentStateScriptService = (state) =>
//  state.scriptService.currentState;
export const selectChannels = (state) => state.scriptService.channels;
export const selectSpecificChannel = (state, GUID) => {
  return state.channels.find((i) => i.GUID === GUID);
};

export default slice.reducer;
