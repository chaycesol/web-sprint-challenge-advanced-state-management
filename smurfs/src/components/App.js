import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchData, postData } from '../store/actions';


import "./App.css";
class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {this.props.smurfData &&
          this.props.smurfData.map((smurf) => (
            <div key={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
          <button onClick={() => {
            this.props.postData();
          }}>
            Add Your Smurf
          </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    smurfData: state.smurfData,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData, postData })(App);
