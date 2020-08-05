import React, { Component } from 'react';

class Grades extends Component {
  render() {

    if(this.props.data){
      var message = this.props.data.skillmessage;
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
            <p>Umsagnaraðili: {work.umsogn}</p>
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
         <div className="three columns header-col">
            <h1><span>Menntun</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Starfsferill</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>



      <div className="row skill">

        <div className="three columns header-col">
            <h1><span>Í uppáhaldi</span></h1>
        </div>
        <div>
          <div className="nine columns main-col">
            <p>{message}</p>
          </div>
  				<div className="bgrid-quarters s-bgrid-thirds cf">
  			    <div className="skills">
					    {skills}
					  </div>
				  </div>
		  	</div>
      </div>
   </section>
    );
  }
}

export default Grades;
