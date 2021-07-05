import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  

  render() {

    return (
        <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
                
<div class="wrapper">
  <h2>Contact us</h2>
  <div id="error_message">
     
  </div>
  <form action="" id="myform" onsubmit = "return validate();">
    <div class="input_field">
        <input type="text" placeholder="Name" id="name"></input>
    </div>
    <div class="input_field">
        <input type="text" placeholder="Customer Queiry" id="subject"></input>
    </div>
    <div class="input_field">
        <input type="text" placeholder="Phone" id="phone"></input>
    </div>
    <div class="input_field">
        <input type="text" placeholder="Email" id="email"></input>
    </div>
    <div class="input_field">
        <textarea placeholder="Message" id="message"></textarea>
    </div>
    <div class="btn">
        <input type="submit"></input>
    </div>
  </form>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



export default Contact;
