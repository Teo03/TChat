import React, {Component} from 'react';
import {Nav} from './Nav';
import Button from '@material-ui/core/Button';

export class App extends Component {
    render = () => {
      return (
        <div className='container text-center'>
            <Nav />
            <h1>Welcome to Peer-To-Peer TChat</h1>
            <br />
                <Button variant='raised' color='primary' size="large" style={{fontSize: 20}} onClick={()=> this.props.history.push('/chat')}>Let's Start</Button>
        </div>
      );
  }
}