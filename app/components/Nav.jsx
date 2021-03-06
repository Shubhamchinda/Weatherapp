var React = require('react');
var {Link, IndexLink} = require('react-router');
var About = require('About');

var Nav = React.createClass({
  onSearch: function(e) {
    e.preventDefault();

    var location = this.refs.location.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0){
      this.refs.location.value = '';
      window.location.hash = '#/?location='+ encodedLocation;
    }
  },
  render: function () {
//    return (
//      <div>
//        <h2>Nav Component</h2>
//        <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
//        <Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About </Link>
//        <Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples </Link>
//      </div>

//    );
//  }
//});

  return (
    <div className="top-bar ">
      <div className="top-bar-left">
        <ul className="menu nav-bar">
          <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink to='/' activeClassName='active nav-bar' activeStyle={{fontWeight: 'bold'}}>Get Weather </IndexLink>
              </li>
            <li>
              <Link to='/about' activeClassName='active nav-bar' activeStyle={{fontWeight: 'bold'}}>About </Link>
            </li>
            <li>
            <Link to='/examples' activeClassName='active nav-bar' activeStyle={{fontWeight: 'bold'}}>Examples </Link>
            </li>
        </ul>
      </div>
      <div className="top-bar-right nav-bar">
        <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref="location" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" className="button" color="blackstatus" value="Get Weather"/>
              </li>
            </ul>
        </form>
      </div>
    </div>

);
  }
});

module.exports = Nav;
