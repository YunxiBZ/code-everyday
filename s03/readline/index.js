const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
  
    // Permet de ne plus bloquer le terminal pour lire ou écrire
    // des choses dedans.
    rl.close();
  });