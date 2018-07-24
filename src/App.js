import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/Header';
import Output from './components/Output';
import SelectFormat from './components/SelectFormat';
import Text from './components/Text';
import BottomNav from './components/BottomNav';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      type: "all-meat",
      paras: 4,
      html: '',
      text: ''
    }
  }
  
  componentWillMount(){
    this.generateText();
  }
  
  generateText(){
    axios 
      .get(`https://baconipsum.com/api/?type=${this.state.type}&paras=${this.state.paras}&start-with-lorem=1&format=${this.state.html}`)
      .then((response) => {
        this.setState({ text: response.data }, function() {
        });
      })
      .catch((err) => {console.log(err);
      });
  }

  showHtml(x){
    this.setState({ html: x }, this.generateText);
  }
  changeParas(number){
    this.setState({ paras: number }, this.generateText);
  }
  render() {
    
    
    return (
      <MuiThemeProvider  muiTheme={getMuiTheme(lightBaseTheme)}>
      <div className='App'>
      <Header />
      <div className="container">
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text
              value={this.state.paras}
              onChange={this.changeParas.bind(this)}
            />
          </div>
          <div className="form-group">
            <SelectFormat
              value={this.state.html}
              onChange={this.showHtml.bind(this)}
            />
          </div>
        </form>
        <Output value={this.state.text}/>
        </div>
        <BottomNav />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
