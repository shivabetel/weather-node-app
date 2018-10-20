const axios = require('axios');


const getGeoCode = (address) => {
    var encodeAddress = encodeURIComponent(address);
    console.log('encodeAddress', encodeAddress);
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=AIzaSyBxoaFaoyvQTTgy99h1ymyMIGkijAGoRUE`).then((response) => {
            //console.log(JSON.stringify(response.data, undefined, 2));
            if(response && response.data){
                if(response.data.status === 'ZERO_RESULTS'){
                    reject('unable to find address');
                }
                else{
                    resolve({
                        address: response.data.results[0].formatted_address,
                        lat: response.data.results[0].geometry.location.lat,
                        lng: response.data.results[0].geometry.location.lng,
                    });
                }


                console.log('..........');
                
            }
             
          }, () => {
              //console.log(error);
              reject('error while connecting google geocode api');
          })
    });
    
}


module.exports = {
    getGeoCode
}
