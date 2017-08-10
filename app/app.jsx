//load required modules, components
var React = require('react');
var ReactDOM =require('react-dom');

//destructuring syntax to initialize multiple modules
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//single instance
// var Route = require('react-router').Route;
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');


//Load foundation; style!css! loader format
require('style!css!foundation-sites/dist/foundation.min.css'),

$(document).foundation();

// var obj = {
//         name: 'Aaron'
// }

// var {name} = obj;

//INITIALIZATION CODE

ReactDOM.render(
        //can add elements, classes, objects
        //Use Router component to direct page display/ Route declares a path
        //IndexRoute takes a single argument
   <Router history={hashHistory}>
        <Route path="/" component={Main}>
                <Route path="about" component={About}/>
                <Route path="examples" component={Examples}/>
                <IndexRoute component={Weather}/>
        </Route>   
   </Router>, 
   document.getElementById('app')
);
//two types of data in a component;
// props and state. props get passed to a component when initialized.
// state data is maintained and updated by the component,
// but a component doesn't update its props.
//single responsibility principle
    