console.log('***** Music Collection *****');
//empty array variable to hold objects containing data about albums in collection.
const collection = [];

//This function will add tracks to a track array to be used with addToCollection
function addTracks(array, trackName, duration) {
  array.push({
    trackName: trackName,
    duration: duration
  });
}

//Made some track arrays to test functions
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

//this logs one of the arrays to check if addTracks is working correctly
console.log(theEminemShowTracks);


//-------------addToCollection()-------------//
//This function adds new albums to the collection array
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
//loged collection to check if addToCollection is working properly
console.log(collection);


//-------------showCollection()-------------//
//This function shows the entire collection and prints the album, artist, year published, and tracks in an easy to read console.log
const showCollection = collection => {
  //Ensures that input is an array and returns error message if it is not. While not necessary in this particular project, makes function more flexible if project were larger and contained more than one collection. I could have just used the collection array established above without the if statement to insure someone passed an incorrect value into the function.
  if (Array.isArray(collection) === false) {
    return console.log('%cInvalid input. Collection must be an array', 'color: black; background-color: red');
  }
  console.log(`This collection contailns the following ${collection.length} items:`);
  //for loop used to print all the title, artist, and yearPublished from each object in the array in a list.
  for (let i = 0; i < collection.length; i++) {
    console.log(`%c${i + 1}. ${collection[i].title} by ${collection[i].artist}, published in the year ${collection[i].yearPublished}:`, `color: limegreen`);
    //second for loop to print tracks under the corresponding album
    for (let j = 0; j < collection[i].tracks.length; j++) {
      console.log(`\t${j + 1}. ${collection[i].tracks[j].trackName}: ${collection[i].tracks[j].duration}`);
    }
  }
};

console.log('%c<<<<<<<<Testing showCollection()>>>>>>>>', 'color: black; background-color: orange');
showCollection(collection);
//this test is to check the error message for an invalid input
showCollection(500);

//-------------findByArtist()-------------//
//array variable inserted for use with search(). If used on its own array is optional. Default array is collection
const findByArtist = (artist, array) => {
  if (array === undefined) {
    array = collection;
  }
  //array to store albums matching the artist argument. The following for loop will fill this array
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].artist === artist) {
      matches.push(array[i]);
    }
  }
  //message for when matches array is empty after searching the collection. Returns an empty array.
  if (matches.length === 0) {
    console.log(`%cThere are no albums by ${artist} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  //messages to log the matches array to the console formatted to make it easy to read.
  console.log(`This collection contains the following ${matches.length} albums by ${artist}:`);
  //this for loop is to list all the tracks of an album in the console imediatly following the album they belong to
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  //returns the matches array
  return matches;
};

console.log('%c<<<<<<<<Testing findByArtist()>>>>>>>>', 'color: black; background-color: orange');
findByArtist('Eminem');
findByArtist('Unspoken');
//this is to test error message
findByArtist('Johnny Cash');


//-------------findByTitle()-------------//
//array is also optional when function is used by itself unless searching an array other than the default collection array
const findByTitle = (title, array) => {
  if (array === undefined) {
    array = collection;
  }
  //empty array to place albums with same title as the title argument followed by a for loop to fill that array
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].title === title) {
      matches.push(array[i]);
    }
  }
  //message for when there are no matching titles. Returns empty array
  if (matches.length === 0) {
    console.log(`%cThere are no albums titled ${title} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  //prints matches to the console. formatted to be easily read
  console.log(`This collection contains the following ${matches.length} albums titled ${title}:`);
  //loop to list corresponting track list following the album they belong to
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByTitle()>>>>>>>>', 'color: black; background-color: orange');
findByTitle('Kamikaze');
//this one to test error message
findByTitle('Ring of Fire');


//-------------findByYearPublished()-------------//
//array argument is again optional. Default is collection array
const findByYearPublished = (yearPublished, array) => {
  if (array === undefined) {
    array = collection;
  }
  //empty array to store albums with matching yearPublished followed by for loop to search array
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].yearPublished === yearPublished) {
      matches.push(array[i]);
    }
  }
  //message for when there are no matches
  if (matches.length === 0) {
    console.log(`%cThere are no albums published in ${yearPublished} in this collection`, `color: black; background-color: red`);
    return matches;
  }
  //message to log matches and make the log easy to read
  console.log(`This collection contains the following ${matches.length} published in ${yearPublished}:`);
  //loop to pring corresponding tracks following the album they belong to
  for (let j = 0; j < matches.length; j++) {
    console.log(`${j + 1}. ${matches[j].title} by ${matches[j].artist}, published in the year ${matches[j].yearPublished}`);
  }
  return matches;
};

console.log('%c<<<<<<<<Testing findByYearPublished()>>>>>>>>', 'color: black; background-color: orange');
findByYearPublished(2002);
findByYearPublished(2015);
//this one to test error message
findByYearPublished(2020);


//functions to support search function.
//the following three functions are condensed versions of the previous functions. The biggest difference is the console.log statements have been removed. I did not display individual tests for these functions as they were already tested above
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


//this function only has a short version as it was written after the search function. 
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
//logs to test findByTrack
console.log(findByTrack('Without Me'));
console.log(findByTrack('Chicken Fried'));


//-------------search()-------------//
//this is the big one. all arguments are optional. entering 0 arguments returns the collection array. 
const search = (album, artist, yearPublished, trackName) => {
  //one of the most awesome things this function does is printing results to the html page this identifies the output <p> element and sets it equal to the variable also named output
  let output = document.getElementById('output');
  //this clears the webpage each time a new search is preformed
  output.innerHTML = '';
  //first array is to store matches from the fisrt agrument that was not undefined. the second is to temporarily store results from following fingBy function so it can loop through the first then set the first equal to the second. any following findBy functions will reapeat this process. 
  let searchArr1 = [];
  let searchArr2 = [];

  //checks for album agument and runs findByAlbum if one is present
  if (album !== undefined) {
    searchArr1 = findByTitleShort(album);
  }

  //checks for artist argument
  if (artist !== undefined) {
    //checks for album argument. if one is present this will run findByArtist using the searchArr1 and use the collection array if none is present
    if (album) {
      searchArr2 = findByArtistShort(artist, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByArtistShort(artist);
    }
  }

  //checks if yearPublished argument is present
  if (yearPublished !== undefined) {
    //checks if previous arguments are present. if so it runs findByYearPublished with the searchArr1 array, and if not it uses the colection array.
    if (album || artist) {
      searchArr2 = findByYearPublishedShort(yearPublished, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByYearPublishedShort(yearPublished);
    }
  }

  //checks if trackName argument is present
  if (trackName !== undefined) {
    //checks if any previous arguments were used. if so it runs findByTrack on searchArr1 and if not, ut uses coll
    if (album || artist || yearPublished) {
      searchArr2 = findByTrack(trackName, searchArr1);
      searchArr1 = searchArr2;
    } else {
      searchArr1 = findByTrack(trackName);
      console.log(searchArr1);
    }
  }

  //chesks if there are no search arguments entered. sets searthArr1 equal to collection if non
  if (album === undefined && artist === undefined && yearPublished == undefined && trackName == undefined) {
    searchArr1 = collection;
  }

  //checks if search had no results and prints log message if there is not one
  if (searchArr1.length === 0) {
    console.log(`%cThere are no albums or tracks matching search criteria`, `color: black; background-color: red`);
    //prints same message to the webpage
    document.getElementById('output').innerHTML = `There are no albums or tracks matching search criteria`;
    return searchArr1;
  }

//loop to log results to the console
  for (let j = 0; j < searchArr1.length; j++) {
    console.log(`%c${j + 1}. ${searchArr1[j].title} by ${searchArr1[j].artist}, published in the year ${searchArr1[j].yearPublished}`, `color: limegreen`);
    //prints same message to the webpage
    output.innerHTML+= `<p class="title">` + `${j + 1}. ${searchArr1[j].title} by ${searchArr1[j].artist}, published in the year ${searchArr1[j].yearPublished}`;
    //loop to print corresponding tracks to console log
    for (let k = 0; k < searchArr1[j].tracks.length; k++) {
      console.log(`\t${k + 1}. ${searchArr1[j].tracks[k].trackName}: ${searchArr1[j].tracks[k].duration}`);
      //prints tracks to the webpacs
      output.innerHTML+= `${k + 1}. ${searchArr1[j].tracks[k].trackName}: ${searchArr1[j].tracks[k].duration}` + `<br>`;
    }
  }
};

//these were used to test search function. i commented them because it was printing things to the webpage that weren't searched for from the webpage. it works as expected
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

//loads the following when the page loads
window.onload = function() {
  //identifies form element titles searchIn and sets it to the input variable
  const input = document.getElementById('searchIn');
  //runs the following code when submit button is clicked
  input.addEventListener('submit', event => {
    //prevents the page from reloading when submit button is pressed.
    event.preventDefault();
    //retrieves input from album field
    let albumIn = document.getElementById('albumName').value;
    if (albumIn === '') {
      albumIn = undefined;
    }
    //retrieves artist inbut field
    let artistIn = document.getElementById('artistName').value;
    console.log(artistIn);
    if (artistIn === '') {
      artistIn = undefined;
    }
    //retrieves year published input field
    let yearPublishedIn;
    //changes input type to number if it is a number
    if (isNaN(parseInt(document.getElementById('yearPublished').value)) === false) {
      yearPublishedIn = parseInt(document.getElementById('yearPublished').value);
    }
    //retrives track name input field
    let trackIn = document.getElementById('track').value;
    console.log(trackIn);
    if (trackIn === '') {
      trackIn = undefined;
    }
    //passes all input arguments to the search fungtion. 
    search(albumIn, artistIn, yearPublishedIn, trackIn);

  });
};