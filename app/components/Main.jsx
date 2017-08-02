var React = require('react');
var Nav = require('Nav');


// "<Nav/>" empty tags can be used to call components

// var Main = React.createClass({
//     render: function () {
//         return (
//             <div>
//                 <Nav/>
//                 <h1>Main Component</h1>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

//new arrow function for stateless component/presentational component

var Main = (props) => {
    return (
            <div>
                <Nav/>
                <h1>Main Component</h1>
                {props.children}
            </div>
        );
}

module.exports = Main;