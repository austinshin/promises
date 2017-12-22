/*
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var readFile = Promise.promisify(fs.readFile);

var pluckFirstLineFromFileAsync = function(filePath) {
  return readFile(filePath, 'utf8')
  .then(function(content) {
    return content.split('\n')[0];
  });
};

// This function should retrieve the status code of a GET request to `url`
var request = Promise.promisify(request);

var getStatusCodeAsync = function(url) {
  // TODO
  return request(url)
  .then(function(res) {
    return res.statusCode;
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
