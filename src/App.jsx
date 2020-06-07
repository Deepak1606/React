import React, { Component } from "react";
import Main from "./components/maincomponent.jsx";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      // adding BrowserRouter. the application now is congigured to make use of the react router
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
