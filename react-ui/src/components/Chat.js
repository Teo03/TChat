import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {Nav} from './Nav';
var connection = window.connection;

connection.socketURL = 'https://rtcmulticonnection.herokuapp.com:443/';
connection.session = {
    audio: true,
    video: true
};
connection.sdpConstraints.mandatory = {
    OfferToReceiveAudio: true,
    OfferToReceiveVideo: true
};

export class Chat extends Component {
  constructor() {
      super();
      this.state = {
          showInfo: 'hide',
          info: '',
          showbtn: 'showelement',
          link: ''
      }
  }

    componentDidMount = () => {
        if(this.props.match.params.id){
           this.joinRoom(this.props.match.params.id);
        }

        connection.onstream = (event) => {
            var localvideo = document.getElementById('localvideo');
            var remotevideo = document.getElementById('remotevideo');
            if (event.type === 'local') {
                localvideo.srcObject = event.stream;
            } else {
                remotevideo.srcObject = event.stream;
                document.getElementById('vidcontainer').className = 'container show'
                document.getElementById('content').className = 'hide'
            }
        };
        
        connection.onstreamended = (event) => {
            document.getElementById('vidcontainer').className = 'container hide'
            alert("Call ended");
            window.location.reload();
        }
        //max 2 users
        connection.maxParticipantsAllowed = 1;
            connection.onRoomFull = function(roomid) {
              connection.closeSocket();
              connection.attachStreams.forEach(function(stream) {
                stream.stop();
            });
            alert('Room is full');
        }
    }

    openRoom = () => {
        var roomid = prompt('Enter room name:');
        if (roomid === "") {
            alert('Please enter a name');
        } else if(roomid){
            connection.open(roomid);
            this.setState({showbtn: 'hide', showInfo: 'showelement', info: 'Created room: ' + roomid, link: 'https://' + window.location.hostname + '/chat/' + roomid});
        } else {
            console.log('cancelled');
        }
    }

    joinRoom = (id) => {
        if(id === this.props.match.params.id){
            var confirm = window.confirm('Join room: ' + id + '?');
            if(confirm){
                connection.openOrJoin(id, () => {
                    if (connection.isInitiator === true) {
                        alert('Room not found, created room: ' + id);
                    }
                });
            } else {
                this.props.history.push('/chat');
            }
        } else {
            var roomid = prompt('Enter room to join:');
            if (roomid === "") {
                alert('Please enter a name');
            } else if (roomid) {
                connection.openOrJoin(roomid, () => {
                    if (connection.isInitiator === true) {
                        alert('Room not found, created room: ' + roomid);
                    }
                });
            } else {
                console.log('cancelled');
            }
        }
    }

    endCall = () => {
        connection.disconnect();
    }

    render = () => {
      return (
        <div className='container text-center'>
        <div id='content'>
            <Nav />
            <br />
            <div className={this.state.showbtn}>
                <Button id="open" variant="contained" color='primary' onClick={this.openRoom} style={{fontSize: 20}}>Create Room</Button>
                <br />
                <h3>OR</h3>
                <br />
                <Button id="join" variant="contained" color='secondary' onClick={this.joinRoom} style={{fontSize: 20}}>Join Room</Button>
                <br />
            </div>
            <div className={this.state.showInfo}>
                <h2>Info:</h2>
                <h3>{this.state.info}</h3>
                <h3>Send this link to join you room:</h3>
                <a><h3>{this.state.link}</h3></a>
                <h3>Waiting for connections...</h3>
            </div>
            </div>
            <div id='vidcontainer' className='container hide'>
                <video id="remotevideo" autoPlay></video>
                <video id="localvideo" controls autoPlay></video>
                <Button variant='raised' color='secondary' id='endcall' size="medium" style={{fontSize: 20}} onClick={this.endCall}>End Call</Button>
                <br />
            </div>
        </div>
      );
  }
}