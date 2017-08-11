

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
                <div className="row" id="body">
                    <div className="columns medium-6 large-4 small-centered" id="body">
                        {props.children}
                    </div>
                </div>  
                <footer className="text-center">CodeIQ <span>&#169;</span> 2017</footer>      
                
                
            </div>
        );
}

module.exports = Main;