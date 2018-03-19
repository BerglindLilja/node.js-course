var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Berglind'

  };
  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(31, (user) => {

  console.log(user);
});

//Your project ID will be weather-app-198514
// AIzaSyCa69-pDHH6LGxwSaKWhqZGYH2eOV3e-yA 
// key=API_KEY
