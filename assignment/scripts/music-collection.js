console.log('***** Music Collection *****');
//empty array variable to hold objevts containing data about albums in collection.
let collection = [];

const addToCollection = (title, artist, yearPublished) => {
    collection.push({
      title: title,
      artist: artist,
      yearPublished: yearPublished
    });
};

addToCollection('The Eminem Show', 'Eminem', 2002);
addToCollection('Kamikaze', 'Eminem', 2018);
addToCollection('I Get Wet', 'Andrew W.K.', 2001);
addToCollection('End of an Empire', 'Celldweller', 2015);
addToCollection('Unspoken', 'Unspoken', 2014);
addToCollection('Long Black Train', 'Josh Turner', 2003);
console.log(collection);
