
/*install axios via terminal, create 
variable to load module*/

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=17e18997dc5fa9a5ca70fe375a192b73';
//url: http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
//17e18997dc5fa9a5ca70fe375a192b73 api key for openweathermap.org

module.exports = {
    getTemp: function (location) {

        //variable uses method to encode location information for query
        var encodedLocation = encodeURIComponent(location);
        //es6 template query strings
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=imperial`;

        //use axios w/ get method to pass request
        return axios.get(requestUrl).then(function (res) {
           
            /*use edge cases for proprietary syntax used by openweather
            if statements used to catch any errors*/
                if(res.data.cod && res.data.message) {
                    throw new Error(res.data.message);
                } else {
                    return res.data.main.temp;
                }
        }, function (res) {
            //if api responds with error a message will be sent
            throw new Error(res.data.message);
        });
    }
}
