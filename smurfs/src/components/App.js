import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchData, postData } from '../store/actions';


import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      nameValue: '',
      ageValue: '',
      heightValue: '',
    };
  }

  componentDidMount() {
    this.props.fetchData()
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.smurfData !== prevProps.smurfData) {
  //     this.props.fetchData();
  //   }
  // }

  onNameChange = (e) => {
    this.setState({
      nameValue: e.target.value,
    });
  };
  onAgeChange = (e) => {
    this.setState({
      ageValue: e.target.value,
    });
  };
  onHeightChange = (e) => {
    this.setState({
      heightValue: e.target.value,
    });
  };


  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <form>
        <input
            placeholder='Name'
            value={this.state.nameValue}
            onChange={this.onNameChange}
          />
          <input
            placeholder='Age'
            value={this.state.ageValue}
            onChange={this.onAgeChange}
          />
          <input
            placeholder='Height'
            value={this.state.heightValue}
            onChange={this.onHeightChange}
          />
        </form>
        <button onClick={() => {
            this.props.postData();
          }}>
            Create A Smurf
          </button>
        {this.props.isLoading && <p>SMURFS REPORTING FOR DUTY...</p>}
        {this.props.smurfData &&
          this.props.smurfData.map((smurf) => (
            <div key={smurf.id}>
              <p>{smurf.name}</p>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
            </div>
          ))}
          
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
