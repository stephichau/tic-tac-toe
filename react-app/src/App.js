import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Board from './Board';
import { styles } from './styles';

const App = ({ classes }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>Tic-Tac-Toe</p>
      <Board />
    </div>
  );
}

export default withStyles(styles)(App);
