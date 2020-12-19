import React from 'react';
import { Button as MUIButton } from '@material-ui/core';

export const Button = ({ children, onClick, ...restOfProps }) => {

  return <MUIButton onClick={onClick} {...restOfProps}>{children}</MUIButton>;
};
