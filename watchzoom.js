
var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
  console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

//Cron allows us run some functionality at specific time intervals 
//The first paramater with all the '*' is where we format our range
//In order it goes, Seconds, Minutes, Hours, Day of the Month,
//Months, Day of the Week

//The plan is to have a new CronJob running in the background looking
//for updates to our Zoom file. 

//--------------------------------------------------------------//
//I tested out a couple different methods to watch a file. The File
//System Library had a few methods that looked like they might be what
//we needed, but fs.watch, fs.watchFile and fs.existsSync
//fs.existsSync seems to work, but we did not get to test it much
//I also found an extension of fs that someone created called Chokidar
//It's incredibly confusing, and I didn't get it to work, but it seems
//to have the most diverse functionality.
//I have a code snippet below

// var chokidar = require('chokidar');
//One-liner for current directory, ignores .dotfiles
// chokidar.watch('.', {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
//   console.log(event, path);
// });

//-------------------------------------------------------------//
//Below is my attempt to put all the peices together. It doesn't
//work just yet, but we are on the right path


// const zoom = `/Users/%{process.env.USER}/Documents/Zoom`

// var watcher = chokidar.watch(zoom, {
//   ignored: /(^|[\/\\])\../,
//   persistent: true
// });

// var log = console.log.bind(console);

// var CronJob = require('cron').CronJob;
// new CronJob('* * * * * *', function() {
//   watcher.on('raw', (event, path, details) => {
//     log('Raw event info:', event, path, details);
// }, null, true, 'America/Los_Angeles')});
