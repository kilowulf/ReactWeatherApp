//load required modules
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    //react calls by automatically,sets default state values
    getInitialState: function () {
        return {            
            isLoading: false
        }
    },
    handleSearch: function (location) {
        
        //to use the this() keyword. this binding gets lost within function
        var that = this;

        this.setState({isLoading: true})

        //the then() is part of the promise api taking two arguments, success and error
        openWeatherMap.getTemp(location).then(function (temp) {
            //Value passed to location and temp are returned to weathermessage
            that.setState({
            location: location,
            temp: temp,  
            isLoading: false          
            });
        
        }, function (errorMessage) { 
            that.setState({isLoading: false});           
            alert(errorMessage);
            
            
        });
        
    },

    
    render: function () {
        //es6 destructuring to create variables
        var {isLoading, temp, location} = this.state;
        
        function renderMessage() {
            if(isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        return (
            <div>
                 <h3>Weather Component</h3>
            <WeatherForm onSearch={this.handleSearch}/>
            {renderMessage()}
           </div>
        );
    }
});

module.exports = Weather; 