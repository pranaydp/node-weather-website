const request = require("request");

const forcast = (latitude,longitude,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=6be9b0b057ed9d8e28e4bc6240aad7e4&query=" + latitude + "," + longitude + "&units=f";
       request({url,json: true}, (error,{ body }) => {
      if(error){
        callback("Unable to connect to weather services" ,undefined);
       } else if (body.error){
        callback("Unable to find location" ,undefined);
      } else{
        callback(undefined,body.current.weather_descriptions[0]+  " It is currently " + body.current.temperature + " degress out. " + "it feels like " + body.current.feelslike + " degress out.")
     }
    })
    
    }

    module.exports = forcast;