import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
  render() {

    if(this.props.data){
      var info = this.props.data.info;
      var about = this.props.data.about;
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var bio1 = this.props.data.bio1;
      var bio2 = this.props.data.bio2;
      var country = this.props.data.address.country;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      var resume = this.props.data.resume; 
    }

    return (
       <section id="about">
      <div className="row">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="50">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="" />
               <h2>{info}</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{zip} {city}, {country}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
         </div>
               </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" delay="300" animateOnce="true" >

         <div className="nine columns main-col">
            <h2>{about}</h2>

            <p>{bio}</p>
            <p>{bio1}</p>
            <p>{bio2}</p>
            <div className="row">
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>{resume}</a>
                  </p>
               </div>
            </div>
         </div>
         </ScrollAnimation>
      </div>

   </section>
    );
  }
}

export default About;
