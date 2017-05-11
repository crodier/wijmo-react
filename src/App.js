import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactDOM from 'react-dom';

//Wijmo
// var wjInput = require("wijmo/wijmo.react.input");
// var wjGrid = require("wijmo/wijmo.react.grid");
// var wjChart = require("wijmo/wijmo.react.chart");

import * as wjGrid from "wijmo/wijmo.react.grid"

class App extends Component {

    getCountries() {
        return 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    }

    getData() {
        let countries = this.getCountries(), data = [];
        for (let i = 0; i < 100; i++) {
            data.push({
                id: i,
                country: countries[i % countries.length],
                date: new Date(2014, i % 12, i % 28),
                amount: Math.random() * 10000,
                active: i % 4 === 0
            });
        }
        return data;
    }

    render() {
        return (
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <wjGrid.FlexGrid itemsSource={ this.getData() }/>
          </div>
        );
    }
}

export default App;
