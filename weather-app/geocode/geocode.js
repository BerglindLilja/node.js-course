const request = require('request');


var geocodeAddress = (address, callback) => {

  var inputAddress = encodeURIComponent(address);
  //console.log(inputAddress);

  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + inputAddress + '&key=AIzaSyCa69-pDHH6LGxwSaKWhqZGYH2eOV3e-yA',
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to google servers.');

    } else if (body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address.');
    } else if (body.status === 'OK'){
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longditude:body.results[0].geometry.location.lng
      })


    }

  });

};

module.exports.geocodeAddress = geocodeAddress;
