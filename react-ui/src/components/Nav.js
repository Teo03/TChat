import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Nav extends React.Component {
  render = () => {
    return (
      <div className='container text-center'>
        <AppBar position="static" color='default'>
          <Toolbar>
            <Typography style={{fontSize: 25}}>
            <a href='/'>TChat</a>
            </Typography>
          </Toolbar>
        </AppBar>  
      </div>
    );
  }
}