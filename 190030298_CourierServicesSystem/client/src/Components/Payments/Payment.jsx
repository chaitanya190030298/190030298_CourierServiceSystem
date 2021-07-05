import React, { Component } from 'react';
import './Payment.css';
import { Link, withRouter } from 'react-router-dom';

class Payment extends Component {
  

  render() {

    return (
        <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="content">
              <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width,
               initial-scale=1.0"/>
    <link rel="stylesheet" href="style.css" 
          class="css" />
  </head>
  <body>
    <div class="container">
      
  
      <div class="centre-content">
    
        <p class="course">
            <h1>PAYMENT</h1>
        <center>  FREE COUPONS FOR FIRST BOOKING</center>
        </p>
      </div>
  
      <div class="last-content">
        <button type="button" class="pay-now-btn">
           Apply Coupons
        </button>
        <button type="button" class="pay-now-btn">
           Pay with Netbanking
        </button>
  
         <button type="button" class="pay-now-btn">
        Netbanking options
        </button> 
      </div>
  
      <div class="card-details">
        <p>Pay using Credit or Debit card</p>
  
        <div class="card-number">
          <label> Card Number </label>
          <input
            type="text"
            class="card-number-field"
            placeholder="###-###-###"/>
        </div>
        <br />
        <div class="date-number">
          <label> Expiry Date </label>
          <input type="text" class="date-number-field" 
                 placeholder="DD-MM-YY" />
        </div>
  
        <div class="cvv-number">
          <label> CVV number </label>
          <input type="text" class="cvv-number-field" 
                 placeholder="xxx" />
        </div>
        <div class="nameholder-number">
          <label> Card Holder name </label>
          <input
            type="text"
            class="card-name-field"
            placeholder="Enter your Name"/>
        </div>
        <Link to="/Thankyou" className="text-success">
                          submit
                        </Link>
      </div>
    </div>
  </body>
</html>           
               
             
                
                
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



export default Payment;
