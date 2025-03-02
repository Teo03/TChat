# TChat

TChat is a peer-to-peer video and audio chat application built with React and Express. It allows users to create and join chat rooms for real-time communication.

## Features

- Create private chat rooms
- Join rooms via direct links
- Real-time video and audio communication
- Simple and intuitive user interface
- Maximum of 2 users per room for private conversations

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Real-time Communication**: WebRTC


## Setup and Installation

1. Clone the repository
   ```
   git clone https://github.com/teo03/tChat.git
   cd TChat
   ```

2. Install server dependencies
   ```
   cd server
   npm install
   ```

3. Install client dependencies
   ```
   cd ../react-ui
   npm install
   ```

   4. Build the React application
   ```
   npm run build
   ```

5. Start the server
   ```
   cd ../server
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5000`
2. On the home page, click "Let's Start"
3. Create a new room by clicking "Create Room"
4. Share the generated link with someone to join your room
5. Alternatively, join an existing room by clicking "Join Room" and entering the room name

## Development

- Run the server in development mode:
  ```
  cd server
  npm run dev
  ```

- Run the React application in development mode:
  ```
  cd react-ui
  npm start
  ```
