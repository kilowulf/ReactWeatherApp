var React = require('react');
var{Link} = require('react-router');

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
            <h1 className="text-center">Examples</h1>
            <p>Here are a  few locations to checkout!</p>
            <ol>
                <li>
                    <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};

module.exports = Examples; 