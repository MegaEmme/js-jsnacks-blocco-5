const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

const longOnes = zucchine.filter((length) => { return length.length > 15});

const shortOnes = zucchine.filter((length) => { return length.length <= 15});

console.log(zucchine);

console.log(longOnes);

console.log(shortOnes);

// codice js plain

let long =[];
let short =[];

for (let i = 0 ; i < zucchine.length; i++){
  if(zucchine[i].length>=15){
      long.push(zucchine[i]);
  } else {
    short.push(zucchine[i]);
  }
}

console.log(long);
console.log(short);