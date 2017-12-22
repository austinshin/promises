/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, content) {
    // if (err) { 
      // console.error(err);
    // } else {
    if (content === undefined) {
      callback(err, content);
    } else {
      callback(err, content.split('\n')[0]);
    }
  });
  // TODO
  //read file
  //on success
  //  split by \n get first 
  //on failure
  // be sad
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request(url, function(error, response, body) {
    if (error) {
      callback(error, undefined);
    } else {
      callback(error, response.statusCode);
    }
    
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
