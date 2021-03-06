const request = require('request');

//ATH:needs to add key

var geocodeAddress = (address, callback) => {

  var inputAddress = encodeURIComponent(address);
  //console.log(inputAddress);

  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + inputAddress + '&key=[mykey]',
    json: true
  }, (error, response, body) => {
    if (error){
      callback('Unable to connect to google servers.');

    } else if (body.status === 'ZERO_RESULTS'){
      callback('Unable to find that address.');
    } else if (body.status === 'OK'){
      console.log(body.results[0].geometry.location.lat);
      console.log(body.results[0].geometry.location.lng);
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude:body.results[0].geometry.location.lat,
        longitude:body.results[0].geometry.location.lng


      })


    }

  });

};

module.exports.geocodeAddress = geocodeAddress;
