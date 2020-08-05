import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
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
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="" />
            <h2>Upplýsingar</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{zip} {city}, {country}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
         </div>
         <div className="nine columns main-col">
            <h2>Um mig</h2>

            <p>{bio}</p>
            <p>{bio1}</p>
            <p>{bio2}</p>
            <div className="row">
               {/* <div className="columns contact-details">
                  <h2>Upplýsingar</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{zip} {city}, {country}</span><br />
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div> */}
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Ferilskráin mín</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
