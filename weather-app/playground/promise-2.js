const request = require('request');

//ATH needs to add APIkey
var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '&key=[mykey]',
      json: true
    }, (error, response, body) => {
      if (error){
        reject('Unable to connect to google servers.');
      } else if (body.status === 'ZERO_RESULTS'){
        reject('Unable to find that address.');
      } else if (body.status === 'OK'){
        resolve({
          address: body.results[0].formatted_address,
          latitude:body.results[0].geometry.location.lat,
          longitude:body.results[0].geometry.location.lng

        });
      }
    });
  });
};

geocodeAddress('19146').then((location) => {
  //console.log(location);
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});
