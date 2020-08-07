import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Grades extends Component {
  render() {
    
    if(this.props.data){
      var message = this.props.data.skillmessage;
      var educationString = this.props.data.educationString;
      var workString = this.props.data.workExperience;
      var favourites = this.props.data.favourites;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <img className="img-logo" src={education.img} alt=""/>
        <p className="info low-margin">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div className="work-row" key={work.company}>
        <img className="img-logo" src={work.img} alt=""/>
        <h3>{work.company}</h3>
        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
        <p className="low-margin">{work.description}</p>
        {work.umsogn !== '' &&
        <p> {work.umsogn}</p>
      }
      </div>
    })
    var skills = this.props.data.skills.map(function(skills){
      return <div className="columns skill-item" key={skills.name}>
      <img className="skill" src={skills.image} alt={skills.name}></img>
      <h5>{skills.name}</h5>
      <p>{skills.info}</p>
      {/* <span style={{width:skills.level}}className={className}></span> */}
      {/* <em>{skills.name}</em> */}
      </div>
    })
  }
  
  return (
    <section id="resume">
    
    <div className="row education">
    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
    
    <div className="three columns header-col">
    <h1><span>{educationString}</span></h1>
    </div>
    </ScrollAnimation>
    
    <div className="nine columns main-col">
    <div className="row item">
    <ScrollAnimation animateIn="fadeIn" delay="300" animateOnce="true" >
    
    <div className="twelve columns">
    {education}
    </div>
    </ScrollAnimation>
    </div>
    </div>
    </div>
    
    
    <div className="row work">
    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
    
    <div className="three columns header-col">
    <h1><span>{workString}</span></h1>
    </div>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeIn" delay="300" animateOnce="true" >
    
    <div className="nine columns main-col">
    {work}
    </div>
    </ScrollAnimation>

    </div>
    
    
    
    <div className="row skill">
    <ScrollAnimation animateIn="fadeIn" animateOnce="true">
    
    <div className="three columns header-col">
    <h1><span>{favourites}</span></h1>
    </div>
    </ScrollAnimation>
    <div>
    <ScrollAnimation animateIn="fadeIn" animateOnce="true">

    <div className="nine columns main-col">
    <p>{message}</p>
    </div>
    </ScrollAnimation>

    <div className="bgrid-quarters s-bgrid-thirds cf">
    <ScrollAnimation animateIn="fadeIn" delay="300" animateOnce="true">

    <div className="skills">
    {skills}
    </div>
    </ScrollAnimation>

    </div>
    </div>
    </div>
    </section>
    );
  }
}

export default Grades;
