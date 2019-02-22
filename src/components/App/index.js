import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { incrementAlfa, incrementBravo, incrementCharlie, incrementDelta } from '../../actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const alfaTimeout = 0;
    const bravoTimeout = 0;
    const combinedTimeout = alfaTimeout + bravoTimeout;

    console.log("handle increment alfa");
    setTimeout( () => {
      console.log(`handle increment alfa after ${alfaTimeout}`);
      this.props.incrementAlfa();
    }, alfaTimeout);

    console.log("handle increment bravo");
    setTimeout( () => {
      console.log(`handle increment bravo after ${bravoTimeout}`);
      this.props.incrementBravo();
    }, bravoTimeout);

    console.log("all increments handled");
    setTimeout( () => console.log(`all increments handled after ${combinedTimeout}`), combinedTimeout);
  }

  render() {

    const { bucket } = this.props;

    return (
      <div className="App">
        <button onClick = { this.handleClick }>BIG RED BUTTON</button>
        <div>
          <p>Just open up the console and then click the big red button. Code is in the usual
          spot at <a href = 'https://github.com/thomasoniii/synchronous-sagas'>github.</a></p>
          <ul>
            <li>Alfa : { bucket.alfa }</li>
            <li>Bravo : { bucket.bravo }</li>
            <li>Charlie : { bucket.charlie }</li>
            <li>Delta : { bucket.delta }</li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({bucket}) => {
  return {
    bucket
  }
};

export default connect(mapStateToProps, { incrementAlfa, incrementBravo, incrementCharlie, incrementDelta })(App);
