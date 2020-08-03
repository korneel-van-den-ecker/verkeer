const colors = {
  // blues
  blue100: '#bbdefb',
  blue200: '#90caf9',
  blue300: '#64b5f6',
  blue400: '#42a5f5',
  blue500: '#2196f3',
  blue600: '#1e88e5',
  blue700: '#1976d2',
  blue800: '#1565c0',

  // greys
  grey50: '#fafafa',
  grey100: '#f5f5f5',
  grey200: '#eeeeee',
  grey300: '#e0e0e0',
  grey400: '#bdbdbd',
  grey500: '#9e9e9e',
  grey600: '#757575',
  grey700: '#616161',
  grey800: '#424242',
  grey850: '#323232',
  grey900: '#212121',

  // blacks
  black: '#000000',
  almostBlack: '#0D0D17', // materialise black

  // whites
  white: '#FFFFFF',

  // reds
  red: '#ff0000',
  redOpacity: 'rgba(255, 0, 0, 0.5)',
  red500: '#f44336',
  error: '#f44336',

  // greens
  green: '#008000',
  greenOpacity: 'rgba(0, 128, 0, 0.3)',
  green500: '#8bc34a',

  // oranges
  orange: '#ffa500',
  orangeA700: '#ff6d00',

  // rest
  yellow: '#ffff00',
  amber500: '#ffc107',
  pinkA400: '#f50057',
  purple500: '#9c27b0',
};

// double check font sizes for browser
const fontSizes = {
  extraSmall: 12,
  XS: '12px',
  small: 14,
  S: '10px',
  medium: 16,
  M: '16px',
  large: 18,
  L: '18px',
  extraLarge: 20,
  XL: '20px',
  extraExtraLarge: 24,
  XXL: '24px',
};

const theme = {
  colors,
  fontSizes,
  icons: {
    normal: colors.grey600,
    disabled: colors.grey400,
    focused: colors.blue700, // depends on background
    hover: colors.blue700,
    pressed: colors.blue800,
    selected: colors.blue500,
    background: colors.grey50,
  },
  appBar: {
    minHeight: '48px',
  },
  statusBar: {
    minHeight: '60px',
  },
  bottomBar: {
    minHeight: '48px',
  },
  text: {
    header1: {
      fontSize: fontSizes.XL,
      normal: colors.grey800,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    header2: {
      fontSize: fontSizes.M,
      //textTransform: 'uppercase',
      normal: colors.grey600,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    header3: {
      fontSize: fontSizes.L,
      fontWeight: 700,
      //textTransform: 'uppercase',
      normal: colors.grey800,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    header4: {
      fontSize: fontSizes.M,
      fontWeight: 700,
      normal: colors.blue500,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    header5: {
      fontSize: fontSizes.M,
      fontWeight: 500,
      normal: colors.grey800,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    normalText: {
      fontSize: fontSizes.M,
      normal: colors.grey800,
      disabled: colors.grey400,
    },
    highlightedText: {
      fontSize: fontSizes.L,
      fontWeight: 700,
      normal: colors.grey800,
      selected: colors.blue500,
      disabled: colors.grey400,
    },
    smallText: {
      fontSize: fontSizes.S,
      normal: colors.grey800,
      disabled: colors.grey400,
    },
  },
  margins: {
    M1: '20px', 
    M2: '15px', // -5 because project item icons are 30x30 inst.of 40x40
    M3: '15px',
    M4: '20px',
    M5: '16px',
    M6: '32px',
    M7: '70px',
    M8: '-12px',
    M9: '0px',
    M10: '30px',
    M11: '24px',
    
    MTopSubHeader: '20px',
    MBottomSubHeader: '15px',
  },
  heights: {
    H1: '15px',
    AppBar: '60px',
    ProjectHeader: '80px',
  },
  spacing:{
    2:"10px"
  },
  widths: {
    //formLabel: '250',
    numberfield : '200px',
    targetLabel: '100px',
    targetNumberInput : '200px',
    scanSystemLabel: '80px',
    scanSystemNumberInput : '100px',
    scanfieldLabel: '100px',
    scanfieldNumberInput : '100px',
    laserLabel: '200px',
    laserNumberInput : '100px',
    parametersLabel: '200px',
    parametersNumberInput : '120px',
  },
  heightAppBar: '60px', // applied to FrontBumper in front of mcp icon
};

export default theme;
