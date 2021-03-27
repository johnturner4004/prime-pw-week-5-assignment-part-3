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
    for (let j = 0; j < collection[i].tracks.length; j++) {
      console.log(`\t${j + 1}. ${collection[i].tracks[j].trackName}: ${collection[i].tracks[j].duration}`);
    }
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


console.log('%c<<<<<<<<Testing search()>>>>>>>>', 'color: black; background-color: orange');
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

console.log('%c<<<<<<<<Testing search()>>>>>>>>', 'color: black; background-color: orange');
const findByTrack = (track, array) => {
  if (array === undefined) {
    array = collection;
  }
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].tracks.length; j++) {
      if (array[i].tracks[j].trackName === track) {
        matches.push(array[i]);
      }
    }
  }
  return matches;
};
console.log(findByTrack('Without Me'));
console.log(findByTrack('Chicken Fried'));



const search = (album, artist, yearPublished, trackName) => {
  let output = document.getElementById('output');
  output.innerHTML = '';
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
      searchArr2 = findByYearPublishedShort(yearPublished, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByYearPublishedShort(yearPublished);
    }
  }

  if (trackName !== undefined) {
    if (album || artist || yearPublished) {
      searchArr2 = findByTrack(trackName, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByTrack(trackName);
      console.log(searchArr1);
    }
  }
  if (album === undefined && artist === undefined && yearPublished == undefined && trackName == undefined) {
    searchArr1 = collection;
  }

  if (searchArr1.length === 0) {
    console.log(`%cThere are no albums or tracks matching search criteria`, `color: black; background-color: red`);
    document.getElementById('output').innerHTML = `There are no albums or tracks matching search criteria`;
    return searchArr1;
  }
  for (let j = 0; j < searchArr1.length; j++) {
    console.log(`%c${j + 1}. ${searchArr1[j].title} by ${searchArr1[j].artist}, published in the year ${searchArr1[j].yearPublished}`, `color: limegreen`);
    output.innerHTML+= `<p class="title">` + `${j + 1}. ${searchArr1[j].title} by ${searchArr1[j].artist}, published in the year ${searchArr1[j].yearPublished}`;
    for (let k = 0; k < searchArr1[j].tracks.length; k++) {
      console.log(`\t${k + 1}. ${searchArr1[j].tracks[k].trackName}: ${searchArr1[j].tracks[k].duration}`);
      output.innerHTML+= `${k + 1}. ${searchArr1[j].tracks[k].trackName}: ${searchArr1[j].tracks[k].duration}` + `<br>`;
    }
  }
};

/*console.log(1);
search('Kamikaze');
console.log(2);
search('Kamikaze', 'Eminem');
console.log(3);
search('', 'Eminem');
console.log(4);
search('Kamikaze', 'Eminem', 2018);
console.log(5);
search('Kamikaze', undefined, 2018);
console.log(6);
search('', 'Eminem', 2018);
console.log(7);
search('', '', 2018);
console.log(8);
search('The Foundation');
console.log(9);
search('', '', '', 'Chicken Fried');
console.log(10);
search();*/

window.onload = function() {
  console.log(1);
  const input = document.getElementById('searchIn');
  console.log(2);
  input.addEventListener('submit', event => {
    console.log(3);
    event.preventDefault();
    let albumIn = document.getElementById('albumName').value;
    if (albumIn === '') {
      albumIn = undefined;
    }
    console.log(albumIn);
    let artistIn = document.getElementById('artistName').value;
    console.log(artistIn);
    if (artistIn === '') {
      artistIn = undefined;
    }
    let yearPublishedIn;
    if (isNaN(parseInt(document.getElementById('yearPublished').value)) === false) {
      yearPublishedIn = parseInt(document.getElementById('yearPublished').value);
    }
    console.log(yearPublishedIn);
    let trackIn = document.getElementById('track').value;
    console.log(trackIn);
    if (trackIn === '') {
      trackIn = undefined;
    }
    search(albumIn, artistIn, yearPublishedIn, trackIn);

  });
};