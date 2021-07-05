import React, { Component } from 'react';
import './Courier.css';
import { Link, withRouter } from 'react-router-dom';

class Courier extends Component {
  

  render() {

    return (
<body>
<div class="loginbox">
      <h1>Courier Details</h1>
      <form name="loginform" action="courier" method="post" onsubmit="return validate_loginform()">
      <p>from name</p>
          <input type="text" name= "name1" placeholder="Enter Reciever Name" required/>
      <p>To person</p>
          <input type="text" name= "name2" placeholder="Enter Reciever Name" required/>
      <p>To Address</p>
          <input type="text" name= "address" placeholder="Enter Reciever Address" required/>
          <label for="birthday"><p>pickup  Date :</p></label>
          <input type="date" id="birthday" name="birthday"></input>
          
      <p>From Address</p>
          <input type="text" name= "to address" placeholder="Enter Reciever Address" required/>
          <label for="birthday"><p>Expected  Date :</p></label>
          <input type="date" id="birthday" name="birthday1			"></input>
          


          <Link to="/Payments" className="text-success">
                        <center><h1> click here for payment</h1></center> 
                        </Link>
          
           
      </form>
      
     
 </div>
 </body>
    );
  
}
}


export default Courier;
