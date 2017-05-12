import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address} />
          <Route path='twitter' component={TwitterFeed} />
          <Route path='instagram' component={Instagram} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    )
  }
}

const Home = () => <h1> Hello World! </h1>
const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1> We are located at Kindaruma Road </h1>
  <h3> Twitter Feed </h3>
  
  {props.children}
</div>
const NotFound = () => <h1> This page is not found! </h1>
const Nav = () => <div>
  <Link to='/'>Home</Link>&nbsp;
  <Link to='/address'>Address</Link>
</div>
const Container = (props) => <div> <Nav /> {props.children} </div>
const Instagram = () => <h3> Instagram Feed </h3>
const TwitterFeed = () => <h3> Twitter Feed </h3>

