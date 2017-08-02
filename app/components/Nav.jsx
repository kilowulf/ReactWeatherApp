var React = require('react');
//IndexLink keeps more than one page showing in active state
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function () {
//         return (
//             <div>
//            <h2>Nav component</h2>
//            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
//            </div>
//         );
//     }
// });

//stateless arrow function for a presentational component
var Nav = (props) => {
    return (
            <div>
           <h2>Nav component</h2>
           <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
           <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
           <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
           </div>
        );
}

module.exports = Nav; 