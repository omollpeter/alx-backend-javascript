process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');

if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    console.log('Your name is:', data.trim());
    // process.exit();
  });
} else {
  process.stdin.on('readable', () => {
    const chunk = process.stdin.read();

    if (chunk) {
      console.log('Your name is:', chunk.trim());
    }
  });

  process.stdin.on('end', () => {
    console.log('This important software is now closing');
  });
}
