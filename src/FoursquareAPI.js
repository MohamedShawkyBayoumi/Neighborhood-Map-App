// Foursquare API Information
const client_id = "GYQCNBNLZLYOSZVSJ0WZFIWBPFVYKXLPDIFGDONAQMRRQW2P";
const client_secret = "C0FHXCOXYCJFEDMQRK0JLRTCZ15TFORBVWUIOGS1VNVQYG45";


const api = "https://api.foursquare.com";

export const getVenue = () => {
  return fetch(`${api}/v2/venues/search?ll=25.694937,32.6244474&categoryId=4bf58dd8d48988d181941735,4bf58dd8d48988d13a941735&client_id=${client_id}&client_secret=${client_secret}&v=20180719`)
  .then(res => {
    if(!res.ok){
      throw Error(res.statusText)
    }
    return res.json()
  })
  .then(venue => venue.response.venues)
  .catch(err => console.log('Foursquare API error: ', err))
}


