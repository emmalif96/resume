import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Portfolio extends Component {
  render() {
    
    if(this.props.data){
      var online = this.props.data.projectOnline;
      var attachment = this.props.data.attach;
      var portfolioDesc = this.props.data.portfolioDesc; 
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
        <img className="portfolio-item" alt={projects.title} src={projectImage} />
        <div className="overlay">
        <div className="portfolio-item-meta">
        <h5>{attachment}</h5>
        { projects.giturl ? 
        <a href={projects.giturl} target="_blank" rel="noopener noreferrer"><span className="fa fa-link"></span>GitHub</a>
          : '' }
        <a href={projects.url} target="_blank" rel="noopener noreferrer"><span className="fa fa-link"></span>{online}</a>
        </div>
        </div>
        <div className="item-info">
        <h3>{projects.title}</h3>
        <p>{projects.category}</p>
        </div>
        </div>
        {/* <p>{projects.title}</p> */}
        </div>
      })
    }
    
    return (
      <section id="portfolio">
      
      <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce={true}  >
      
      <div className="row">
      
      <div className="twelve columns collapsed">
      
    <h1>{portfolioDesc}</h1>
      
      <div id="portfolio-wrapper" className="bgrid-halves s-bgrid-ones cf">
      {projects}
      </div>
      </div>
      </div>
      </ScrollAnimation>
      </section>
      );
    }
  }
  
  export default Portfolio;
  