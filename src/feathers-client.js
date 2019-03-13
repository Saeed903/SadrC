import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio-client';
import auth from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import FEATHERS_ENDPOINT from './config'
import dotenv from 'dotenv'

dotenv.config();

const socket = io('http://localhost:3030', {transports: ['websocket']});

const feathersClient = feathers()
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage, }));
export default feathersClient;  