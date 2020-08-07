import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var country = this.props.data.address.country;
      var city = this.props.data.address.city;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span></span></h1>
               
            </div>
            <ScrollAnimation animateIn="fadeIn" delay="300" animateOnce="true" >

            <div className="ten columns">
                  <h2><span>Endilega hafðu samband</span></h2>

                  <p>{message}</p>

                  <p className="address">
						   {name}<br />
						   {zip} {city}, {country} <br />
						   {phone}<br />
						   <a href ="mailto:bjorgvin.hall@hotmail.com"><span>{email}</span></a>
					   </p>
            </div>
            </ScrollAnimation>
         </div>
   </section>
    );
  }
}

export default Contact;
