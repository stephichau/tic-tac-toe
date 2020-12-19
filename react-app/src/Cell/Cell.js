import React from 'react';
import { Button } from '../components/Button/Button';

export const Cell = ({ children, onClick, disabled }) => (
  <Button
    variant="outlined"
    color="primary"
    style={{ height: 35 }}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);
