import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Grades from './Components/Grades';
import Portfolio from './Components/Portfolio';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
      isEnglish: false
    };
    
    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);
    
  }
  
  getResumeData(isEnglish){
    if(isEnglish === true){
      $.ajax({
        url: process.env.PUBLIC_URL + '/resumeData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
      
    } else {
      $.ajax({
        url: process.env.PUBLIC_URL + '/ferilskraData.json',
        dataType:'json',
        cache: false,
        success: function(data){
          this.setState({resumeData: data});
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
          alert(err);
        }
      });
    }
  }
  
  componentDidMount(){
    this.getResumeData(false);
  }

  componentDidUpdate() {
    this.getResumeData(this.state.isEnglish)
  }
  
  render() {
    return (
      <div className="App">
      <Header 
        data={this.state.resumeData.main} 
        onChangeLanguage = {(isEnglish) => { 
          this.setState({ isEnglish: isEnglish }) 
        }}
      />
      <About data={this.state.resumeData.main}/>
      <Resume data={this.state.resumeData.resume}/>
      <Portfolio data={this.state.resumeData.portfolio}/>
      <Grades data={this.state.resumeData.grades}/>
      <Contact data={this.state.resumeData.main}/>
      <Footer data={this.state.resumeData.main}/>
      </div>
      );
    }
  }
  
  export default App;
  