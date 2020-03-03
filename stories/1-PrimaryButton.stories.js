import React from 'react'
import { storiesOf } from '@storybook/react';
import { PrimaryButton } from '../components/button'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../components/theme';
import { withKnobs, select } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Button/Primary",
  decorators: [withKnobs]
};

export const DefaultButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <PrimaryButton >PRIMARY</PrimaryButton>
    </ThemeProvider>
  )
}