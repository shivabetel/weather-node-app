const axios = require('axios');

const apiKey = ''

const getWeatherInfo = (lat, lng) => {
   return new Promise((resolve, reject) => {
      axios.get(`https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`).then((response) => {
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