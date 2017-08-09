var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (
//            <h3>About Component</h3>
//         );
//     }
// });

/*stateless functional component allows for more practical
expression for a simple presentational component  */
//same as above

// var About = function (props) {
//     return (
//         <h3>About Component</h3>
//     )
// };


//as a arrow function
var About = (props) => {
    return (
        <div>
        <h1 className="text-center">About</h1>
        <p>This App was built with the help of <a href="https://facebook.github.io/react">React</a>, <a href="http://foundation.zurb.com/">Foundation</a> and a outstanding API from <a href="http://openweathermap.org/">OpenWeatherMap</a>. Find the Repository for this Code on my <a href="https://github.com/kilowulf/ReactWeatherApp">Git</a>.</p>
        </div>
    )
}

module.exports = About; 