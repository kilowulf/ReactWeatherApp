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
        <h3>About Component</h3>
    )
}

module.exports = About; 