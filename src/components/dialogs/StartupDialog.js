import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  setScriptServiceAsync,
  selectScriptService,
  setCannotStartUpFromURLParams,
} from "../features/ScriptService/scriptServiceSlice";
import { useSelector, useDispatch } from "react-redux";
import StartupDialogForm from "./StartUpDialogForm"

export default function StartupDialog({
  scriptServices,
  currentScriptService,
}) {
  const [selectedScriptService, setScriptService] = React.useState(
    currentScriptService
  );

  const { CannotStartUpFromURLParams } = useSelector(selectScriptService);

  const dispatch = useDispatch();

  const handleChange = (scriptService) => {
    setScriptService(scriptService);
  };

  const handleCloseConfirm = () => {  
    //Thunk Dispatchen  
    dispatch(setScriptServiceAsync(selectedScriptService.GUID));
    //ActionCreator Uitsturen
    dispatch(setCannotStartUpFromURLParams(false));
  };

  const handleCloseCancel = () => {
    dispatch(setCannotStartUpFromURLParams(false));
  };
  return (
    <div>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={CannotStartUpFromURLParams}
        onClose={handleCloseCancel}
      >
        <DialogTitle>
          Choose the Script Service you want to load into the Script Editor
        </DialogTitle>

        <DialogContent>
          <StartupDialogForm
            scriptServices={scriptServices}
            currentScriptService={selectedScriptService}
            onHandleChange={handleChange}            
          ></StartupDialogForm>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseConfirm} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
