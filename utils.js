import readline from 'readline-promise';

// Module written oddly... everything's inside a .default property
// console.table(readline.default);

const rlp = readline.default.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true
});

const prompt = async (text) => rlp.questionAsync(`${text} `);

export default {
  prompt
};
