

// Foursquare API Information
const client_id = "GYQCNBNLZLYOSZVSJ0WZFIWBPFVYKXLPDIFGDONAQMRRQW2P";
const client_secret = "C0FHXCOXYCJFEDMQRK0JLRTCZ15TFORBVWUIOGS1VNVQYG45";


const api = "https://api.foursquare.com";

export const getVenue = () => {
  return fetch(`${api}/v2/venues/search?ll=25.694937,32.6244474&categoryId=4bf58dd8d48988d181941735,4bf58dd8d48988d13a941735&client_id=${client_id}&client_secret=${client_secret}&v=20180719`)
  .then(res => res.json())
  .then(venue => venue.response.venues)
}


/*
const request = require('request');

request({
  url: 'https://api.foursquare.com/v2/venues/search',
  method: 'GET',
  qs: {
    client_id: 'GYQCNBNLZLYOSZVSJ0WZFIWBPFVYKXLPDIFGDONAQMRRQW2P',
    client_secret: 'C0FHXCOXYCJFEDMQRK0JLRTCZ15TFORBVWUIOGS1VNVQYG45',
    ll: '40.7243,-74.0018',
    query: 'coffee',
    v: '20180323',
    limit: 1
  }
}, function(err, res, body) {
  if (err) {
    console.error(err);
  } else {
    console.log(body);
  }
});
  
*/