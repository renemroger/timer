let timers = process.argv.splice(2).sort().filter((a) => {
  return a === NaN ? '' : a;
}).filter((a) => {
  return a >= 0;
});

for (const t of timers) {
  setTimeout(() => {
    console.log(t, 'seconds');
    process.stdout.write('\x07');
  }, t * 1000);
}
