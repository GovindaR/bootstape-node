import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navmenu from "./components/Navmenu";
import { logIn, signUp } from "./service/user";
import CarouselBanner from "./components/CarouselBanner";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const result = await logIn();
    this.setState({ users: result.data });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Navmenu} />
          <Route exact path="/" component={CarouselBanner} />
          {/* Sign Up */}
          <Route exact path="/" component={SignUp} />

          {/* Login in */}
          <Route exact path="/Login" component={Login} />
          {/* json data taneko */}
          {this.state.users.map(item => {
            return <div>{item.username}</div>;
          })}
        </div>
      </Router>
    );
  }
}

export default App;
