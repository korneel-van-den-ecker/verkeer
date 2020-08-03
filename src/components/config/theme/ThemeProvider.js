import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { muiTheme } from './';


const ThemeProvider = ({ children }) => {
  const nextTheme = {  ...muiTheme };

  return (
    <StylesProvider injectFirst={true}>
      <CssBaseline />
      <StyledThemeProvider theme={nextTheme}>
        <MuiThemeProvider theme={nextTheme}>{children}</MuiThemeProvider>
      </StyledThemeProvider>
    </StylesProvider>
  );
};

export default ThemeProvider;
