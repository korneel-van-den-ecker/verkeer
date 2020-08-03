import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import PropTypes from 'prop-types'
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
}));

export default function StartupDialogForm({
  onHandleChange,
  scriptServices,
  currentScriptService,
}) {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-dialog-select-label">Script Services</InputLabel>
        <Select
          labelId="demo-dialog-select-label"
          id="demo-dialog-select"
          value={currentScriptService===undefined?"":currentScriptService}
          onChange={(e) => {
            onHandleChange(e.target.value);
          }}
          autoFocus={true}
          displayEmpty={false}
          disableAutoFocusItem={false}
          input={<Input />}
        >
          {scriptServices.map((x) => {
            return (
              <MenuItem key={x.GUID} id={x.GUID} value={x}>               
                {x.Name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </form>
  );
}
StartupDialogForm.propTypes={
  onHandleChange:PropTypes.func,
  scriptServices:PropTypes.any,
  currentScriptService:PropTypes.any
}