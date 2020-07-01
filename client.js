
const net = require('net');
const { HOST, PORT, name } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: HOST,
    port: PORT
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
  });

  conn.on('connect', () => {
    conn.write(name);
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = {connect};