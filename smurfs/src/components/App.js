import React, { Component } from "react";
import {connect} from 'react-redux';

import { fetchData, postData } from '../store/actions';


import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchData()
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.smurfData !== prevProps.smurfData) {
  //     this.props.fetchData();
  //   }
  // }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const smurf ={
        name: this.state.name,
        age: this.state.age,
        height: this.state.height
    }
    this.props.postData(smurf);
}


  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <form onSubmit={this.onSubmit}>
        <label >Smurf Name: </label>
        <input
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.onChange }
          />
          <br/>
          <label >Smurf Age: </label>
          <input
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.onChange }
          />
          <br/>
          <label >Smurf Height: </label>
          <input
            placeholder='Height'
            name='height'
            value={this.state.height}
            onChange={this.onChange }
          />
        </form>

        <button onClick={() => {
            this.props.postData(this.state);
          }}>
            Create A Smurf
          </button>
          <hr />
        {this.props.isLoading && <p>SMURFS REPORTING FOR DUTY...</p>}
        {this.props.smurfData &&
          this.props.smurfData.map((smurf) => (
            <div key={smurf.id}>
              <img src="https://pbs.twimg.com/profile_images/1265687519779106816/2UcwiL9B_400x400.jpg" alt="smurf"/>
              <p>Hi, I'm {smurf.name}</p>
              <p>I am {smurf.age} smurf years</p>
              <p>I stand at about {smurf.height} cm</p>
            </div>
          ))}
          {this.props.error && <p>{this.props.error}</p>}
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
