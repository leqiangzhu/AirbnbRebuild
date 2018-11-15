import React from 'react';
import Navigation from './Navigation';
import Book from './Book'
//import PropTypes from 'prop-types';
// import { Switch, Route } from 'react-router-dom';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App() {
  var styles = {
  };
  return (
    <div style={styles}>
      <style jsx>{`
      body{
      background-image: url('https://a0.muscache.com/4ea/air/r:w3100-h2074-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg');
      height: 1300px;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
      font-size: 14px;
    }
  `}</style>
      <body>
        <Navigation />
      </body>
      {/* <Switch>
        <Route exact path='/' component={} />
      </Switch> */}
    </div>
  );
}

//App.propTypes = {
//};

export default App;
