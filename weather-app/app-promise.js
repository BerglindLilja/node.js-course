const yargs = require('yargs');
const axios = require('axios');

//ATH - need to add apiKey

const argv = yargs
  .options({
    a:{
      demand: true,
      alias: 'address',
      describe: 'address to fetch weather for',
      string: true
    }

  })
  .help()
  .alias('help', 'h')
  .argv;

  var encodedAddress = encodeURIComponent(argv.address);
  var geocodeURL = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress + '&key=[myKey]';

  axios.get(geocodeURL).then((response) => {
    //console.log(response);
    if(response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');

    }
    //console.log(response.data.status);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/ae125688623730469031a2359055ba5e/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    //console.log(weatherUrl);
    return axios.get(weatherUrl);
  }).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`It'a currently ${temperature}. It feels like ${apparentTemperature}`);
  }).catch((e) => {
    if(e.code === 'ENOTFOUND') {
      console.logo('Unable to connect to API servers');
    } else {
      console.log(e.message);
    }

  });

  //api key weather site
  //ae125688623730469031a2359055ba5e
  //https://api.darksky.net/forecast/[key]/[latitude],[longitude]
