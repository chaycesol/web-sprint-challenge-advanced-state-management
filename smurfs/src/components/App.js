import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchData, postData } from '../store/actions';

import "./App.css";
import styled from 'styled-components';

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
    this.setState({
        name: '',
        age: '',
        height: ''
    })
}


  render() {
    return (
      <div className="App">
        <StyledHeader>SMURFS! W/Redux</StyledHeader>
        <form onSubmit={this.onSubmit}>
        <StyledLabel >Smurf Name: </StyledLabel>
        <br />
        <StyledInput
            placeholder='Name'
            name='name'
            value={this.state.name}
            onChange={this.onChange }
          />
          <br/>
          <StyledLabel >Smurf Age: </StyledLabel>
          <br />
          <StyledInput
            placeholder='Age'
            name='age'
            value={this.state.age}
            onChange={this.onChange }
          />
          <br/>
          <StyledLabel >Smurf Height: </StyledLabel>
          <br />
          <StyledInput
            placeholder='Height'
            name='height'
            value={this.state.height}
            onChange={this.onChange }
          />
        </form>

        <StyledButton onClick={() => {
            this.props.postData(this.state);
          }}>
            Create A Smurf
          </StyledButton>
          <hr />
          <StyledSection>
          {this.props.isLoading && <p>SMURFS REPORTING FOR DUTY...</p>}
        {this.props.smurfData &&
          this.props.smurfData.map((smurf) => (
            <StyledSmurf key={smurf.id}>
              <StyledImg src="https://pbs.twimg.com/profile_images/1265687519779106816/2UcwiL9B_400x400.jpg" alt="smurf"/>
              <h2>Hi, I'm {smurf.name}!</h2> &nbsp;&nbsp;
              <p>I am {smurf.age} smurf years.</p>&nbsp;&nbsp;
              <p>I stand at about {smurf.height} cm</p>
            </StyledSmurf>
          ))}
          {this.props.error && <p>{this.props.error}</p>}
          </StyledSection>
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


const StyledButton = styled.button`
  background-color: #016FB9;
  color: #FFF;
  border: 2px solid #016FB9;
  padding: 5px;
  margin: 10px;
`

const StyledInput = styled.input`
  background-color: #B7D3F2;
  color: #1D2F6F;
  border: 2px solid #B7D3F2;
  padding: 5px;
  margin: 10px;
`
const StyledLabel = styled.label`
  color: #1D2F6F;
  padding: 5px;
  margin: 5px;
  font-weight: bold;
`
const StyledImg = styled.img`
  width: 40%;
  height: auto;
`

const StyledSmurf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #016FB9;
  color: #FFF;
  font-weight: bold;
  border-radius: 50px;
  padding: 5px;
  margin: 5px;
  width: 30%;
`

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px;
  width: 100%;
`
const StyledHeader = styled.h1`
  font-size: 4.5rem;
  color: #FFF;
  background-color:#016FB9 
`