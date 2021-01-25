
import utils from './utils.js';
// Could not destructure, so having to manually grab:
const prompt = utils.prompt;

import Wizard from './Wizard.js';

async function main() {
  const name = await prompt(`What's your name?`);
  const specialty = await prompt(`What's your specialty? (example: "defense against the dark arts")`);

  // To instantiate an instance of Wizard:
  // 1. use the `new` keyword
  // 2. call the class like it's a function
  const w = new Wizard(name, specialty);

  
  let running = true;
  while (running) {
    w.listSpells();
    console.log(`You have ${w.spellPoints} spell points left.`);
    
    const s = await prompt('What spell would you like to cast?');
    w.cast(s);

    console.log('\n\n===========\n\n');
    if (w.spellPoints <= 0) running = false;    
  }

  console.log(`Bye!`);
}

main();
