console.log('***** Music Collection *****');
//empty array variable to hold objects containing data about albums in collection.
const collection = [];
function addTracks(array, trackName, duration) {
  array.push({
    trackName: trackName,
    duration: duration
  });
}
const theEminemShowTracks = [];
addTracks(theEminemShowTracks, 'Curtains Up', '0:30');
addTracks(theEminemShowTracks, 'White America', '5:24');
addTracks(theEminemShowTracks, 'Business', '4:11');
addTracks(theEminemShowTracks, 'Cleanin\' Out My Closet', '4:57');
addTracks(theEminemShowTracks, 'Square Dance', '5:23');
addTracks(theEminemShowTracks, 'The Kiss (skit)', '1:15');
addTracks(theEminemShowTracks, 'Soldier', '3:46');
addTracks(theEminemShowTracks, 'Say Goodbye Hollywood', '4:32');
addTracks(theEminemShowTracks, 'Drips (featuring Obie Trice)', '4:45');
addTracks(theEminemShowTracks, 'Without Me', '4:50');
addTracks(theEminemShowTracks, 'Paul Rosenberg (skit)', '0:22');
addTracks(theEminemShowTracks, 'Sing for the Moment', '5:39');
addTracks(theEminemShowTracks, 'Superman', '5:50');
addTracks(theEminemShowTracks, 'Hailie\'s Song', '5:20');
addTracks(theEminemShowTracks, 'Steve Berman (skit)', '0:33');
addTracks(theEminemShowTracks, 'When the Music Stops (featuring D12)', '4:29');
addTracks(theEminemShowTracks, 'Say What You Say (featuring Dr. Dre)', '5:09');
addTracks(theEminemShowTracks, 'Till I Collaps (featuring Nate Dogg)', '4:57');
addTracks(theEminemShowTracks, 'My Dad\'s Gone Crazy (featuring Hailie Jade)', '4:27');
addTracks(theEminemShowTracks, 'Curtains Close (skit)', '1:10');

//... so ya, after entering the entire tracklist from the Eminem Show, I'm just gonna
//put some favs from the other albums. It'll still be enough to dempnstrate working functions.
const kamikazeTracks = [];
addTracks(kamikazeTracks, 'Kamikaze', '3:36');

const iGetWetTracks = [];
addTracks(iGetWetTracks, 'Party Hard', '3:04');
addTracks(iGetWetTracks, 'Ready to Die', '2:54');

const endOfAnEmpireTracks = [];
addTracks(endOfAnEmpireTracks, 'End of an Empire', '7:33');
addTracks(endOfAnEmpireTracks, 'Good L_ck (Yo_\'re F_cked)', '3:36');

const unspokenTracks = [];
addTracks(unspokenTracks, 'Start a Fire', '3:05');
addTracks(unspokenTracks, 'Call it Grace', '4:00');

const theFoundationTracks = [];
addTracks(theFoundationTracks, 'Toes', '4:21');
addTracks(theFoundationTracks, 'Whatever It Is', '3:29');
addTracks(theFoundationTracks, 'Chicken Fried', '3:58');
addTracks(theFoundationTracks, 'Sic \'em on a Chicken', '3:51');

console.log(theEminemShowTracks);
//-------------addToCollection()-------------//
const addToCollection = (title, artist, yearPublished, tracks) => {
  collection.push({
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  });
};
console.log('%c<<<<<<<<Testing addToCollection()>>>>>>>>', 'color: black; background-color: orange');
addToCollection('The Eminem Show', 'Eminem', 2002, theEminemShowTracks);
console.log(collection[0]);
addToCollection('Kamikaze', 'Eminem', 2018, kamikazeTracks);
console.log(collection[1]);
addToCollection('I Get Wet', 'Andrew W.K.', 2001, iGetWetTracks);
console.log(collection[2]);
addToCollection('End of an Empire', 'Celldweller', 2015, endOfAnEmpireTracks);
console.log(collection[3]);
addToCollection('Unspoken', 'Unspoken', 2014, unspokenTracks);
console.log(collection[4]);
addToCollection('The Foundation', 'Zac Brown Band', 2008, theFoundationTracks);
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
    console.log(`%c${i + 1}. ${collection[i].title} by ${collection[i].artist}, published in the year ${collection[i].yearPublished}:`, `color: limegreen`);
    for (let j = 0; j < collection[i].tracks.length; j++)
      console.log(`\t${j + 1}. ${collection[i].tracks[j].trackName}: ${collection[i].tracks[j].duration}`);
  }
};

console.log('%c<<<<<<<<Testing showCollection()>>>>>>>>', 'color: black; background-color: orange');
showCollection(collection);
showCollection(500);

//-------------findByArtist()-------------//
//array variable inserted for use with search().
const findByArtist = (artist, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].artist === artist) {
      matches.push(array[i]);
    }
  }
  if (matches.length === 0) {
    console.log(`%cThere are no albums by ${artist} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  console.log(`This collection contains the following ${matches.length} albums by ${artist}:`);
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByArtist()>>>>>>>>', 'color: black; background-color: orange');
findByArtist('Eminem');
findByArtist('Unspoken');
findByArtist('Johnny Cash');

//-------------findByTitle()-------------//
const findByTitle = (title, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].title === title) {
      matches.push(array[i]);
    }
  }
  if (matches.length === 0) {
    console.log(`%cThere are no albums titled ${title} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  console.log(`This collection contains the following ${matches.length} albums titled ${title}:`);
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByTitle()>>>>>>>>', 'color: black; background-color: orange');
findByTitle('Kamikaze');

//-------------findByYearPublished()-------------//
const findByYearPublished = (yearPublished, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].yearPublished === yearPublished) {
      matches.push(array[i]);
    }
  }
  if (matches.length === 0) {
    console.log(`%cThere are no albums published in ${yearPublished} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  console.log(`This collection contains the following ${matches.length} published in ${yearPublished}:`);
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByYearPublished()>>>>>>>>', 'color: black; background-color: orange');
findByYearPublished(2002);
findByYearPublished(2015);
findByYearPublished(2020);


console.log('%c<<<<<<<<Testing findByYearPublished()>>>>>>>>', 'color: black; background-color: orange');
const findByArtistShort = (artist, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].artist === artist) {
      matches.push(array[i]);
    }
  }
  return matches;
};

const findByTitleShort = (title, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].title === title) {
      matches.push(array[i]);
    }
  }
  return matches;
};

const findByYearPublishedShort = (yearPublished, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].yearPublished === yearPublished) {
      matches.push(array[i]);
    }
  }
  return matches;
};

const search = (album, artist, yearPublished) => {
  let searchArr1 = [];
  let searchArr2 = [];
  if (album !== undefined) {
    searchArr1 = findByTitleShort(album);
  }

  if (artist !== undefined) {
    if (album) {
      searchArr2 = findByArtistShort(artist, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByArtistShort(artist);
    }
  }

  if (yearPublished !== undefined) {
    if (album || artist) {
      searchArr2 = findByYearPublishedShort(yearPublished);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByYearPublishedShort(yearPublished);
    }
  }



  if (searchArr1.length === 0) {
    console.log(`%cThere are no albums matching search criteria`, `color: black; background-color: red`);
    return searchArr1;
  }
  for (let j = 0; j < searchArr1.length; j++) {
    console.log(`${j + 1}. ${searchArr1[j].title} by ${searchArr1[j].artist}, published in the year ${searchArr1[j].yearPublished}`);
  }



  /*
    let sw = '';
    if (album && album !== '') {
      sw += 'a';
    }
    if (artistn && artist !== '') {
      sw += 'b';
    }
    if (yearPublished && yearPublished !== '') {
      sw += 'c';
    }

    switch (sw) {
      case 'a':
        findByTitle(album);
        break;
      case 'b':
        console.log('testB');
        break;
      case 'c':
        console.log('testC');
        break;
      case 'ab':
        console.log('testAB');
        break;
      case 'ac':
        console.log('testAC');
        break;
      case 'bc':
        console.log('testBC');
        break;
      case 'abc':
        console.log('testABC');
        break;
    }*/
};
search('Kamikaze');
search('Kamikaze', 'Eminem');
search('', 'Eminem');
search('Kamikaze', 'Eminem', 2018);
search('Kamikaze', '', 2018);
search('', 'Eminem', 2018);
search('', '', 2018);

console.log('search');
window.onload = function() {
  console.log(1);
  const input = document.getElementById('searchIn');
  console.log(2);
  input.addEventListener('submit', event => {
    console.log(3);
    event.preventDefault();
    let albumIn = document.getElementById('albumName').value;
    console.log(albumIn);
    let artistIn = document.getElementById('artistName').value;
    console.log(artistIn);
    let yearPublishedIn;
    if (isNaN(parseInt(document.getElementById('yearPublished').value === 'number')) === false) {
      yearPublishedIn = parseInt(document.getElementById('yearPublished').value);
    }
    console.log(yearPublishedIn);
    search(albumIn, artistIn, yearPublishedIn);
  });
};

/*search('Kamikaze');
search('', 'Eminem');
search('', '', 2002);
search('Kamikaze', 'Eminem');
search('', 'Eminem', 2002);
search('Kamikaze', 'Eminem', 2002);*/


/*So... this ended up being a lot more effort than taking advantage of an html form so I'm switching to that but will still test the fuction in JavaScript
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
       return ('Invalid input');
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
      return ('Invalid input');
  }
};

const option3 = (input1, input2) => {
  switch (input1, input2) {
    case ('artist', 'album' || 'album', 'artist'):
      criteria3 = prompt('Would you also year published? Please enter year published or no', 'year published or no');
      break;
    case ('album', 'year published' || 'year published', 'album'):
      criteria3 = prompt('Would you also like to search by artist? Please enter artist or no', 'artist, or no');
      break;
    case ('artist', 'year published' || 'year published', 'artist'):
      criteria3 = prompt('Would you also like to search by album? Please enter album or no', 'album or no');
      break;
    default:
      return ('Invalid input');
  }
};

const search = () => {
  criteria1 = prompt('Would you like to search by album, artist, or year published? Please enter album, artist, or year published', 'album, artist, or year published');
  let search1 = searchInput(criteria1);
  if (search1 === 'Invalid input') {
    let error = criteria1;
    search1 = searchInput(error);
  }
  criteria2 = option2(criteria1);
  if (criteria2 !== 'no') {
    let search2 = searchInput(criteria2);
    criteria3 = option3(criteria1, criteria2);
    if (criteria3 !== 'no') {
      let search3 = searchInput(criteria3);
    }
  }
  console.log('Yay it didn\'t crash');
};*/

/*
potential search cases

*album
  *artist
    *year published
    *no
  -(crash)year published
    -artist
    -no
  *no
-artist
  -album
    -year published
    -no
  -year published
    -album
    -no
  -no
-year published
  -album
    -artist
    -no
  -artist
    -year published
    -no
  -no
*/
