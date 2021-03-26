//os=>operating system(Windows, macOS, Linux)
const os = require('os');

const cpusLength = os.cpus().length;
let message = `Votre machine contien ${cpusLength} coeurs de processor, `+ os.EOL;

// os.arch => architecture
// Je obtenir l'architecture de mon processeur
// Rajouter cette info dans la string 'message'
// Penser à passer à la ligne, puis rajouter l'info.
const arch = os.arch(); 
message += `L'architecture du processeur est : ${arch}, ` + os.EOL;

// os.freemem => free memery
// os.totalmem => total memery
// -> Un message qui m'indique le % de mémoire disponible
// Après un nouveau saut de ligne
const freemem = os.freemem();
const totalmem = os.totalmem();
const percent = freemem/totalmem
message += `Vous disposez de ${percent} memoire disponible, `;+ os.EOL

// os.homedir
// Rajouter au message l'info du chemin absolu vers le dossier User (home)
const home = os.homedir;
//os.EOL => End of line
message += os.EOL;
message += `Le chemin vers la home est : ${home}.`+ os.EOL;

console.log(message);

// Bonus de la mort: Lister le nom de tous les coeurs de processeur
console.log(`Lister le nom de tous les coeurs: `)
const cpus = os.cpus()
for (const cpu of cpus) {
    console.log(cpu.model)
}