const request = require('request');

const args = process.argv.slice(2);

// const query
const url = "https://api.thecatapi.com/v1/breeds";
// const path = "/search" + query;

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  const data = JSON.parse(body);
  for (const breed of data) {
    if (breed.name === args[0]) {
      console.log(breed.description);
      return;
    }
  }
  console.log('Error: breed not found!');
});