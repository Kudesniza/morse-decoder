const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let start = 0;
  let arr = [];
  let localLetter = '';
  for (let i=10; i<=expr.length; i+=10) {
    let x = expr.slice(start, i);
    if (x.includes("*")) {
      arr.push(" ");
    } else {
      for (let j=0; j<10; j+=2 ) {
        if (x.slice(j, j + 2) === '10') {
          localLetter += '.';
        }
        if (x.slice(j, j + 2) === '11') {
          localLetter += '-'
       }
     }
    }
    arr.push(MORSE_TABLE[localLetter])
    localLetter = ''
    start += 10;
  }
  return arr.join('');
} 

module.exports = {
  decode
}