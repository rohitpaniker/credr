import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/index';
import axios from 'axios';

import GMapsView from './../components/GMaps';



class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credrDataState: []
    }
  }

  componentWillMount() {
    this.props.fetchGlobal();
  }

  render() {
    const { credrDataState } = this.state;
    const { credrData } = this.props;
    return(
      <div className="App">
        <header className="App-header">
          <img src={require('../assets/images/png/credr.png')} className="logo" alt="logo" />
          <h1 className="App-title">Welcome to CREDR</h1>
        </header>
        <p> Location of Bikes </p>
        {credrData.length !== 0
          ? <GMapsView
              dataList={credrData}
            />
        : <div>
           <h1> Loading ... </h1>
          </div>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, actionCreators)(Landing);
