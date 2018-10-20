const axios = require('axios');


const getWeatherInfo = (lat, lng) => {
   return new Promise((resolve, reject) => {
      axios.get(`https://api.darksky.net/forecast/7b2199852ee91ffc6f7af771b4390df4/${lat},${lng}`).then((response) => {
          if(response.data){
              resolve({
                  temparature: response.data.currently.temperature,
                  apparentTemparature: response.data.currently.apparentTemperature
              })
          }
      }, () => {
          reject('error while connecting weather api')
      })
   });
}


module.exports = {
    getWeatherInfo
}