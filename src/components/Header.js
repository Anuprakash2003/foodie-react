import React from 'react';
import LoginForm from '../styles/LoginForm.css'
import img1 from '../resources/logoWhite.png';
const Header= ()=>{
    return(
        <div>
           
      
               <div class="header">
         
               <div class="header-wrapper">
              <div class="header-logo">
                  <img src={img1} alt=""/>
              </div>
              <div class="header-content">
                  <div class="header-name">
                      <h1>Hello Anuprakash </h1>
                  </div>
                  <div class="header-logo1">
                      <i class="fa fa-user-circle " aria-hidden="true"></i>
                  </div>
              </div>
            </div>
          </div>
          </div>
      
    )
}

export default Header;