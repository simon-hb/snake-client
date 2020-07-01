const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, key_mapping } = require('./constants');
const handleUserInput = function(conn) {
  const stdin = process.stdin;
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write(MOVE_UP_KEY);
    }
    if (key === 'a') {
      conn.write(MOVE_LEFT_KEY);
    }
    if (key === 's') {
      conn.write(MOVE_DOWN_KEY,);
    }
    if (key === 'd') {
      conn.write(MOVE_RIGHT_KEY);
    }
    if (key_mapping[key]){
      conn.write('Say: ' + key_mapping[key])
    }
  })
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(connection);
  return stdin;
}

module.exports = {setupInput};