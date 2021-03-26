
// la fonction rot13 permet de chiffrer un message : https://fr.wikipedia.org/wiki/ROT13
const rot13 = (phrase) =>
  phrase
    .toLowerCase()
    .split('')
    .map((char) =>
      !!char.match(/[a-z]/)
        ? String.fromCharCode(
            ((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26) +
              'a'.charCodeAt(0)
          )
        : char
    )
    .join('');
// pas besoin de la comprendre, elle est là pour être utilisée ;-)

// Je peux l'utiliser pour lui donner du texte à coder
// rot13("Hello, encodes moi");
// Ou pour décoder
// rot13("JNoisj LKDJio iodjlkjd !!");

// Exo en autonomie
/*
  Codez un programme qui décode le message contenu dans le fichier message.txt et l'affiche dans la console ;-)
* nécessite d'aller jeter un oeil à https://nodejs.org/docs/latest-v10.x/api/readline.html#readline_example_read_file_stream_line_by_line
*/
/* const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('readline/message.txt'),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  console.log(`Line from file: ${rot13(line)}`);
}); */
const fs = require('fs');
const os = require('os');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('readline/message.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(os.EOL+ `${rot13(line)}`);
  }
}

processLineByLine();