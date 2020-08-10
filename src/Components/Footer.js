import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Footer extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noopener noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <ScrollAnimation animateIn="fadeIn" delay={300}  animateOnce={true}  >

      <footer>

     <div className="row">
        <div className="twelve columns">
           <ul className="social-links">
              {networks}
           </ul>

        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
     </div>
  </footer>
  </ScrollAnimation>
    );
  }
}

export default Footer;
