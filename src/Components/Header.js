import React, { Component } from 'react';
import Weather from './Weather';
import FadeIn from 'react-fade-in';


class Header extends Component {
   
   componentDidUpdate() {
   }
   
   componentDidMount() {
      let el = document.querySelector('.banner-text');
      el.classList.add('fade-in');
   }
   
   
   render() {
      
      if (this.props.data) {
         var home = this.props.data.home;
         var about = this.props.data.about
         var resume = this.props.data.resume
         var portfolio = this.props.data.portfolio;
         var contact = this.props.data.contact;
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var predescription = this.props.data.predescription;
         var description = this.props.data.description;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
         })
      }
      
      return (
         <header id="home">
         
         <nav id="nav-wrap">
         
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
         <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
         
         <ul id="nav" className="nav">

         <Weather />
         <li className="current"><a className="smoothscroll" href="#home">{home}</a></li>
         <li><a className="smoothscroll" href="#about">{about}</a></li>
         <li><a className="smoothscroll" href="#resume">{resume}</a></li>
         <li><a className="smoothscroll" href="#portfolio">{portfolio}</a></li>
         <li><a className="smoothscroll" href="#contact">{contact}</a></li>

         </ul>


         <div className="languages">
         <div className="language is" onClick={ () => {this.props.onChangeLanguage(false)} }>
         <img alt="Icelandic flag" src="../images/iceland.png"></img>
         </div>
         <div className="language en" onClick={ () => {this.props.onChangeLanguage(true)} }>
         <img alt="British flag" src="../images/uk.png"></img>
         </div>
         </div>

         
         </nav>
         <div className="row banner">
         <div className="banner-text">
         <FadeIn delay="200">
            <h1 className="responsive-headline">{name}</h1>
         </FadeIn>
         <FadeIn delay="500">
            <h3>{predescription} <span>{occupation}</span> {description}</h3>
         </FadeIn>
         <hr />
         <FadeIn delay="700">
            <ul className="social">
               {networks}
            </ul>
         </FadeIn>
         </div>
         </div>
         
         <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>
         
         
         
         </header>
         );
      }
   }
   
   export default Header;
   