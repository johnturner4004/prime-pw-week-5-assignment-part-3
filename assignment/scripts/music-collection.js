console.log('***** Music Collection *****');
//empty array variable to hold objects containing data about albums in collection.
let collection = [];

//-------------addToCollection()-------------//
const addToCollection = (title, artist, yearPublished) => {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished
  });
};
console.log('%c<<<<<<<<Testing addToCollection()>>>>>>>>', 'color: black; background-color: orange');
addToCollection('The Eminem Show', 'Eminem', 2002);
console.log(collection[0]);
addToCollection('Kamikaze', 'Eminem', 2018);
console.log(collection[1]);
addToCollection('I Get Wet', 'Andrew W.K.', 2001);
console.log(collection[2]);
addToCollection('End of an Empire', 'Celldweller', 2015);
console.log(collection[3]);
addToCollection('Unspoken', 'Unspoken', 2014);
console.log(collection[4]);
addToCollection('Long Black Train', 'Josh Turner', 2003);
console.log(collection[5]);
console.log(collection);

//-------------showCollection()-------------//
const showCollection = collection => {
  //Ensures that input is an array and returns error message if it is not.
  if (Array.isArray(collection) === false) {
    return console.log('%cInvalid input. Collection must be an array', 'color: black; background-color: red');
  }
  console.log(`This collection contailns the following ${collection.length} items:`);
  //for loop used to print all the title, artist, and yearPublished from each object in the array in a list.
  for (let i = 0; i < collection.length; i++) {
    console.log(`${i + 1}. ${collection[i].title} by ${collection[i].artist}, published in the year ${collection[i].yearPublished}`);
  }
};

console.log('%c<<<<<<<<Testing showCollection()>>>>>>>>', 'color: black; background-color: orange');
showCollection(collection);
showCollection(500);

//-------------findByArtist()-------------//
const findByArtist = artist => {
  let matches = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) {
      matches.push(collection[i]);
    }
  }
  if (matches.length === 0) {
    console.log(`%cThere are no albums by ${artist} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  console.log(`This collection contains the following ${matches.length} albums by ${artist}:`);
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${collection[j].title} by ${collection[j].artist}, published in the year ${collection[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByArtist()>>>>>>>>', 'color: black; background-color: orange');
findByArtist('Eminem');
findByArtist('Unspoken');
findByArtist('Johnny Cash');
