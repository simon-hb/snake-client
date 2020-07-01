
const net = require('net');
const PORT = 50541;
const HOST = "135.23.222.148";

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
    conn.write('Name: SJ');
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  return conn;
}

module.exports = {connect};