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

console.log('%cTo search collection type \"search()\" in the console', 'background-color: blue');
let criteria1;
let criteria2;
let criteria3;

const searchInput = option => {
  switch (option) {
    case 'album':
      let album = prompt('Please enter the album name');
      break;
    case 'artist':
      let artist = prompt('Please enter the artist name');
      break;
    case 'year published':
      let yearPublished = prompt('Please enter the year published');
      break;
    default:
      console.log('Invalid input');
      searchInput(option);
  }
};

const option2 = criteria1 => {
  switch (criteria1) {
    case 'artist':
      criteria2 = prompt('Would you also like to search by album or year published? Please enter album, year published, or no', 'album, year published, or no');
      break;
    case 'album':
      criteria2 = prompt('Would you also like to search by artist or year published? Please enter artist, year published, or no', 'artist, year published, or no');
      break;
    case 'year published':
      criteria2 = prompt('Would you also like to search by album or artist? Please enter album, artist, or no', 'album, artist, or no');
      break;
    default:
      console.log('I\'m sorry but that was not an option');
      option2(criteria1);
  }
  return criteria2;
};

const option3 = (input1, input2) => {
  switch (input1, input2) {
    case ('artist', 'album'):
      criteria3 = prompt('Would you also year published? Please enter year published or no', 'year published or no');
      break;
    case ('album', 'yearPublished'):
      criteria3 = prompt('Would you also like to search by artist? Please enter artist or no', 'artist, or no');
      break;
    case ('artist', 'year published'):
      criteria3 = prompt('Would you also like to search by album? Please enter album or no', 'album or no');
      break;
    default:
      console.log('I\'m sorry but that was not an option');
      option3(input1, input2);
  }
  return criteria3;
};

const search = () => {
  criteria1 = prompt('Would you like to search by album, artist, or year published? Please enter album, artist, or year published', 'album, artist, or year published');
  let search1 = searchInput(criteria1);
  criteria2 = option2(criteria1);
  let search2 = searchInput(criteria2);
  criteria3 = option3(criteria1, criteria2);
  let search3 = searchInput(criteria3);
};
