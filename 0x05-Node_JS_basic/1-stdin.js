process.stdin.setEncoding("utf-8");

console.log("Welcome to Holberton School, what is your name?");

if (process.stdin.isTTY) {
  process.stdin.on("data", (data) => {
    console.log("Your name is:", data.trim());
  });
} else {
  process.stdin.on("data", (data) => {
    console.log("Your name is:", data.trim());
  });

  process.stdin.on("end", () => {
    console.log("This important software is now closing");
  });
}
