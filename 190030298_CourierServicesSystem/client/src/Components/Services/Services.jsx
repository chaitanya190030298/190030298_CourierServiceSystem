import React from "react";
import './Services.css';
import { Link, withRouter } from 'react-router-dom';

function App() {
  return (
    <div class="services">
      <h1>Our Services</h1>
      <div class="cen">
        <div class="service">
          <i class="fas fa-anchor"></i>
          <h2>OverNight Courier services</h2>
          <p>To get the shipments delivered overnight, there is a certain time frame within which one needs to place an order. </p>
          
          <Link to="/Courier" className="text-success">
                          click here for payment
                        </Link>
        </div>

        <div class="service">
          <i class="fab fa-android"></i>
          <h2>Pallet Courier Services</h2>
          <p>Large, heavy items are likely to fall outside of most courier companies’ standard size and weight regulations.</p>
          
          <Link to="/Courier" className="text-success">
                          click here for payment
                        </Link>
        </div>
        <div class="service">
          <i class="fab fa-android"></i>
          <h2>Same Day Express Courier Service</h2>
          <p>get delivery on the same day.</p>
          
          <Link to="/Courier" className="text-success">
                          click here for payment
                        </Link>
        </div>


        <div class="service">
          <i class="fab fa-angellist"></i>
          <h2>WareHousing courie services</h2>
          <p>The most common process would be as follows:  the warehouse receives goods from multiple suppliers, repackages </p>
      
        <div class="form-row">
                    <div class="form-group col-md-12">
                      <p>
                       
                        <Link to="/Courier" className="text-success">
                          click here for payment
                        </Link>
                      </p>
                    </div>
        </div>
      </div>
      </div>
    </div>
  
  
  );
}

export default App;