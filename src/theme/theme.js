import { createMuiTheme } from '@material-ui/core/styles';

const theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
    },
  },
};

export default createMuiTheme(theme);
