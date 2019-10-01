var axios = require('axios');
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=9700f64f75eb5e8b75376009ab387111';
module.exports = {
  getTemp: function(location){
    var encodedLoaction = encodeURIComponent(location);
    var requestUrl= `${OPEN_WEATHER_MAP_URL}&q=${encodedLoaction}`;
    return axios.get(requestUrl).then(function (res){
      if(res.data.cod ==200 && res.data.message && 'true'){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res){
      throw new Error(res.data.message);
    });

  }
}
