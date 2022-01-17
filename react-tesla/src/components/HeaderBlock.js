import { Button } from '@mui/material';
import React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff'
    },
    teslaColor: {
      main: '#393c40',
      contrastText: '#fff'
    },
    customOrderColor: {
      main: '#393c40',
      contrastText: '#fff'
    },
    existingInvColor: {
      main: '#fff',
      contrastText: '#393c40'
    }
  }
});

export default function HeaderBlock() {
  return (
    <div className="bg-model-3-image object-cover bg-no-repeat bg-fixed bg-center absolute top-0 right-0 bottom-0 left-0 grid place-items-center bg-cover ">
      <div className="flex flex-col h-96">
        <div className="text-center flex-1">
          <h1 className="text-7xl font-semibold text-tesla-heading">Model 3</h1>
          <h4 className="font-medium text-base text-tesla-subheading">
            Order Online for
            <span className="pb-1 pt-4 underline underline-offset-8 decoration-black cursor-pointer">
              Touchless Delivery
            </span>
          </h4>
        </div>
        <div className="flex mt-96 gap-5 absolute bottom-40">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="customOrderColor" size="large">
              Custom Order
            </Button>
            <Button variant="contained" color="existingInvColor" size="large">
              Existing Inventory
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
