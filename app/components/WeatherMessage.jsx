var React = require('react');


// var WeatherMessage = React.createClass({
//     render: function () {
//         var {temp, location} = this.props;
//         return (
//            <div >
//                 <h3>It is <span style={{fontWeight: 'bold'}}>{temp}</span><span style={{fontWeight: 'light', fontSize: '108%'}}>&#8457;</span> in <span style={{fontWeight: 'bold'}}>{location}</span>!</h3>
//            </div>
//         );
//     }
// });

//in es6 we can use the destructuring syntax directly as a argument in the arrow function
// var WeatherMessage = (props) => {
//     var {temp, location} = props;
//     return (
//            <div >
//                 <h3>It is <span style={{fontWeight: 'bold'}}>{temp}</span><span style={{fontWeight: 'light', fontSize: '108%'}}>&#8457;</span> in <span style={{fontWeight: 'bold'}}>{location}</span>!</h3>
//            </div>
//         );
// }

//props destructuring syntax placed as argument in arrow func.
var WeatherMessage = ({temp, location}) => {
    // var {temp, location} = props;
    return (
           <div >
                <h3 className="text-center">It is <span style={{fontWeight: 'bold'}}>{temp}</span><span style={{fontWeight: 'light', fontSize: '108%'}}>&#8457;</span> in <span style={{fontWeight: 'bold'}}>{location}</span>!</h3>
           </div>
        );
}

module.exports = WeatherMessage; 