import { createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';
// import MaterialiseSemiBold from 'src/assets/fonts/Mostardesign_MetronicProSemiBold.otf';

// const matSemiBold = {
//   fontFamily: 'MaterialiseSemiBold',
//   fontStyle: 'normal',
//   fontDisplay: 'swap',
//   fontWeight: 400,
//   src: `
//     local('MaterialiseSemiBold'),
//     local('Materialise-SemiBold'),
//     url(${MaterialiseSemiBold}) format('otf')
//   `,
//   unicodeRange:
//     'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

const muiTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // fontSize: 14, // TODO
        //     '@font-face': [matSemiBold],
      },
    },
    MuiIconButton: {
      root: {
        padding: 6,
        color: theme.icons.normal,
        '&:hover': {
          color: theme.icons.hover,
          backgroundColor: theme.icons.background,
        },
      },
    },
    MuiInputBase: {
      root: {
        fontSize: theme.fontSizes.small,
      },
      input: {
        paddingLeft: 8,
      },
    },
    MuiInput: {
      underline: {
        '&:hover:not(.Mui-disabled)::before': {
          borderBottomColor: theme.colors.blue800,
        },
        '&:hover:not(.Mui-disabled)::after': {
          borderBottomColor: theme.colors.blue800,
        },
        '&:after': {
          borderBottomColor: theme.colors.blue500,
        },
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'transparent',
          color: theme.colors.blue500,
        },
        '&$selected:hover': {
          color: theme.colors.blue500,
          backgroundColor: 'transparent',
        },
      },
      button: {
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.colors.black,
        },
      },
    },
    MuiMenuItem: {
      root: {
        minHeight: 32,
      },
    },
    MuiTab: {
      wrapped: {
        fontSize: theme.fontSizes.small,
        //textTransform: 'capitalize',
        fontWeight: 400,
        minWidth: 100,
      },
    },
    MuiTabs: {
      indicator: {
        backgroundColor: theme.colors.white,
        height: 4,
      },
    },
    MuiToolbar: {
      dense: {
        minHeight: theme.statusBar.minHeight,
        // padding: '0 16px',
        zIndex: 100,
        boxShadow: '0px 0px 24px 0px rgba(117, 117, 117, 0.5)',
        paddingLeft:0,
      },
    },
    
    MuiFormControlLabel: {
      label:{
        marginLeft: theme.margins.M9,
      },
    },
    MuiFormControl: {
      marginDense:{
        marginBottom:'0px',
      },
    }
  },
  palette: {
    primary: {
      main: theme.colors.blue500,
    },
    secondary: {
      main: theme.colors.yellow,
    },
    error: {
      main: theme.colors.red,
    },
  },
  typography: {
    h4: {
      fontSize: theme.text.header4.fontSize,
      fontWeight: theme.text.header4.fontWeight,
      color: theme.text.header4.normal,
    },
    body2: {
      fontSize: theme.fontSizes.small,
      color: theme.text.normalText.normal,
    },
    body1: {
      fontSize: theme.fontSizes.small,
    },
    h5: {
      fontSize: theme.text.header5.fontSize,
      fontWeight: theme.text.header5.fontWeight,
      // fontFamily: 'src/assets/fonts/Mostardesign_MetronicProSemiBold',
    },
  },
});

export default muiTheme;
