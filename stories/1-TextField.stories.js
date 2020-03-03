import React from 'react'
import { storiesOf } from '@storybook/react';
import { PrimaryButton } from '../components/button'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../components/theme';
import { withKnobs, select } from "@storybook/addon-knobs";
import TextField from '@material-ui/core/TextField'

export default {
  title: "Atoms/TextField/Primary",
  decorators: [withKnobs]
};

export const DefaultButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField label="username" variant="filled" />
    </ThemeProvider>
  )
}