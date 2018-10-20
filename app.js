// const yargs = require('yargs');
// //const request = require('request');


// const notes = require('./notes');

// const titleOptions = {
//     describe: 'title of the note',
//     demand: true,
//     alias: 't'
// }

// //console.log('hello Node', process.argv);
// const  argv = yargs.command('add', 'add a new note', {
//     title: titleOptions,
//     body: {
//         describe: 'body of the note',
//         demand: true,
//         alias: 'b'
//     }
// })
// .command('read', 'read a note', {
//     title: titleOptions
// })
// .command('list', 'list all the notes')
// .command('remove', 'remove a note', {
//     title: titleOptions
// })
// .help()
// .argv;

// console.log('notes',notes);
// console.log('yargs', argv);
// var command = argv._[0];

// console.log('command', command);

// if(command === 'add'){
//     console.log(notes.addNote(argv.title, argv.body));
    
// }
// else if(command === 'remove'){
//     console.log('remove a note');
// }
// else if(command === 'list'){
//     console.log('listing all notes');
// }
// else if(command === 'read'){
//     console.log(notes.getNote(argv.title));
// }
// else{
//     console.log('command not recognized');
// }   


const request = require('request');
const yargs = require('yargs');


const geocode = require('./geocode/geoCode');
const weather = require('./weather/weather');

var argv = yargs
.options({
  address: {
    demand: true,
    alias: 'a',
    describe: 'address to fetch weather'
  }
})
.help()
.argv;

console.log('address', argv.address);

geocode.getGeoCode(argv.address).then((res) => {
  console.log('app', JSON.stringify(res, undefined, 2));
  return weather.getWeatherInfo(res.lat, res.lng)
}, (error) => {
  console.log(error)
}).then( (res) => {
  console.log('weather info', res);
}, (err) => {
  console.log(err)
});

// request({
//     url: `https://maps.googleapis.com/maps/api/geocode/json?address=${argv.address}&key=AIzaSyBxoaFaoyvQTTgy99h1ymyMIGkijAGoRUE`,
//     json: true
// }, (error, response, body) => {
//   //console.log(JSON.stringify(body, undefined,2));
//    if(body.status !== 'ZERO_RESULTS'){
//     console.log(body.results[0].formatted_address);
//     console.log(body.results[0].geometry.location.lat);
//     console.log(body.results[0].geometry.location.lng);
//    }
// })
