import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import './Navbar.css';
import { FaGithub } from 'react-icons/fa';

class Navbar1 extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <nav class="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container">
          <Link class="navbar-brand border-none" to="/">
            COURIER
          </Link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              {/* <li class="nav-item active">
                <Link class="nav-link" to="#">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li> */}
            
              <li class="nav-item">
              <h3>
                
                </h3>
              </li>
               
                
              <li class="nav-item">
                <Link
                  className="nav-link btn btn-register button-outline-none"
                  to="/about"
                >
                  About
                </Link>
              </li>
            
              <li class="nav-item">
                <Link
                  className="nav-link btn btn-register button-outline-none"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              
              <li class="nav-item">
                <Link
                  className="nav-link btn btn-register button-outline-none"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              
              
               
                

              <button
                  onClick={this.onLogoutClick}
                  class="nav-item"
                >
                  Logout
                </button>

               

              
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
Navbar1.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar1);

