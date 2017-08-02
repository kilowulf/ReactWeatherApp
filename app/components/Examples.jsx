var React = require('react');

// var Examples = React.createClass({
//     render: function () {
//         return (
           
//         );
//     }
// });

//arrow function for a stateless/static component
var Examples = (props) => {
    return (
        <div>
            <h3>Examples Component</h3>
            <p>Hre are some helpful examples</p>
        </div>
    )
}

module.exports = Examples; 