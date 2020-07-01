const handleUserInput = function(conn) {
  const stdin = process.stdin;
  
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
  stdin.on('data', (key) => {
    if (key === 'w') {
      conn.write('Move: up');
    }
  })
  stdin.on('data', (key) => {
    if (key === 'a') {
      conn.write('Move: left');
    }
  })
  stdin.on('data', (key) => {
    if (key === 's') {
      conn.write('Move: down');
    }
  })
  stdin.on('data', (key) => {
    if (key === 'd') {
      conn.write('Move: right');
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