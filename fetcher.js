const { fstat } = require('fs');
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0]; // http://www.example.edu/
const filename = args[1]; // ./index.html

request(url, (error, response, body) => {
  if (error) {
    return console.log(`${url} DOES NOT EXIST! -- `, error);
  } else {
    fs.writeFile(filename, body, function(error){
      if (error) {
        return console.log("ERROR: ", error);
      }
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${filename}`);
    });
  }  
})