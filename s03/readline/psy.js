const readline = require('readline');

const psy = readline.createInterface({
  input: process.stdin, // Je veux lire le terminal
  output: process.stdout, // Je veux écrire dans le terminal
});

console.log('Salut, je suis votre psy. Je vous écoute...');

// Je commence à écouter toutes les lignes
// que mon user va saisir
let messages=[];
psy.on('line', (input) => {
  // Cette fonction est exécutée à chaque réponse de l'user
  // Je reçois ce qu'il a saisi en paramètre (input)
  // Je peux donc en faire ce que je veux
  messages.push(input)  ; 

  console.log(`Received: ${input}`);
});

setTimeout(()=> psy.close(), 20000);

psy.on('close', () => {
    
    console.log (`Ok, alors si je résume, vous m'avez dit que:` ) ;

    for(const message of messages){
        console.log(message);
    }
    console.log(`Cela fera 900€ s'il vous plait`)
  // Ici, le code que je mets dans cette fonction sera exécuté
  // dés que l'interface sera fermée.
});

// Partie 1 de l'exo
// J'aimerais stopper l'interface automatiquement
// après un délai de 20 secondes.
// setTimeout -> aller voir la doc si besoin
// Pour arrêter l'interface
// psy.close();


// Partie 2
// Pour chaque réponse faite par l'user
// Stocker sa réponse dans un tableau

// Partie 3
// Lorsque la séance est terminée (on 'close').
// Je voudrais que le psy m'affiche toutes les réponses que je lui
// ai donné.
// "Ok, alors si je résume, vous m'avez dit que:"
// "... toutes les réponses (une par ligne) de l'user"
// "Cela fera 900€ s'il vous plait"