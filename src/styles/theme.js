const theme = {
  colors: {
    dark: '#2d354c',
    // dark: '#000007',
    darkestNavy: '#01050b',
    darkNavy: '#020c1b',
    navy: '#0a192f',
    lightNavy: '#172a45',
    darkGrey: '#333',
    mediumGrey: '#696767',
    blueGrey: '#293d5a',
    grey: '#949494',
    // lightGrey: '#606a86',
    lightGrey: '#b7b7b7',
    slate: '#8898AA',
    lightSlate: '#a8b2d1',
    lightestSlate: '#ccd6f6',
    lightBlue: '#32c3ff',
    offWhite: '#dce7ff',
    // white: '#e6f1ff',
    pink: '#FF647F',
    white: '#fff',
    blue: '#3686ff',
    yellow: '#FFC464',
    orange: '#FF9E64',
    cyan: '#36ebff',
    purple: '#b39fff',
    // green: '#64ffda',
    // green: '#6CCB93',
    green: '#4AA57F',
    transLightBlue: '#00b4fe',
    transGreen: 'rgba(100, 255, 218, 0.1)',
    transNavy: 'rgba(2, 12, 27, 0.5)',
    shadowNavy: 'rgba(2, 12, 27, 0.7)',
    highlight: 'rgba(41, 61, 90, 0.99)',
  },

  fonts: {
    Josefin: 'Josefin Sans, sans-serif',
    Roboto: 'Roboto, sans-serif',
    Open: 'Open Sans, sans-serif',
    Brandon: 'Brandon Grotesque',
    BrandonBold: 'BrandonBold',
    Avenir: 'Avenir Next',
    AvenirBold: 'Avenir Next Black',
    AvenirSemiBold: 'Avenir Next Semibold',
    AvenirMedium: 'Avenir Next Medium',
    Calibre:
      'Calibre, system, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  transition: 'all 0.25s ease-in-out',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',
  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
