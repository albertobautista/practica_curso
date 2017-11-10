import React, { Component } from 'react';
import {Page} from './Components/Page/Page';
import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


class App extends Component {
  render() {
    return (
      <div className="back">
        <Page/>
      </div>
    );
  }
}

export default App;
