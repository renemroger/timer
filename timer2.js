//CONTRIBUTIONS BY @ADAN, @RENE

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {

  if (key === 'b') {
    process.stdout.write('\x07');
  }
  else if (key < 10 && key >= 1) {
    process.stdout.write('setting timer for x seconds ' + key + ' seconds');
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
  }

  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!');
    process.exit();
  }
});

