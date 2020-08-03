import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";

import { checkValidityNewFile } from "../features/Explorer/explorerSlice";
import { putSaveFileAsync, onScriptInit } from "../features/Editor/editorSlice";

import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddFileDialog({ requestOpen }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [newPathName, setNewPathName] = React.useState("");
  const [unvalid, setUnvalid] = React.useState(false);
  useEffect(() => {
    setOpen(requestOpen);
  }, [requestOpen]);

  const handleCloseCancel = () => {
    setOpen(false);
  };
  const handleCloseOK = () => {
    if (!unvalid) {
      dispatch(onScriptInit({ path: newPathName }));
      dispatch(putSaveFileAsync({ path: newPathName }));
      setOpen(false);
    }
  };

  const onInputFileNameChange = (e) => {
    setNewPathName(e.target.value);
    const val = dispatch(checkValidityNewFile({ newFileName: e.target.value }));
    setUnvalid(val);
  };
  return (
    <div>
      {/* 
        <Button onClick={handleClickOpen}>Open select dialog</Button> */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleCloseOK}
      >
        <DialogTitle>Create a file</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              {unvalid ? (
                <TextField
                  error
                  onChange={onInputFileNameChange}
                  value={newPathName}
                  id="standard-basic"
                  label="filename"
                  helperText="File allready exist"
                />
              ) : (
                <TextField
                  onChange={onInputFileNameChange}
                  value={newPathName}
                  id="standard-basic"
                  label="filename"
                />
              )}
            </FormControl>            
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="primary">
            Cancel
          </Button> 
          {unvalid ? (
            <div></div>
          ) : (
            <Button onClick={handleCloseOK} color="primary">
              OK
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
