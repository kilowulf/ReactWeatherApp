var React = require('react');

var WeatherForm = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        //data verification
        if(location.length > 0) {
            //clears browser
            this.refs.location.value = "";
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
           <div>
                <form onSubmit={this.onFormSubmit}>
                     <input type="search" ref="location" placeholder="Search weather by city"/>
                     <button className="button expanded hollow" id="button">Get Weather</button>
                </form>
           </div>
        );
    }
});

module.exports = WeatherForm; 