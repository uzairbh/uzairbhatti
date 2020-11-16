import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/a.jpg";
import f from "../src/images/f.jpg";
import e from "../src/images/f.jpg";
import Common from './Common';
const About=()=>{

return(<>
<section id="header" className="d-flex align-items-center">


<div className="container na_bg">
    <div className="row">
  <div className="col-12 max-auto">
  <div className="row">
  <div className="col-md-10 pt-5 pt-lg-0 order-2 order-lg-1">
  <h1  className="mt-5"  > welcome  <strong className="brand-name">uzair bhatti</strong></h1>
    <h2 className="my-3" >we are the team of talanted developers making web sites</h2>
    <div className="mt-3"  >
<NavLink to="/contact"  ><button  type="button" class="btn-get-started">CONTACT</button></NavLink>
   
    </div>
   
    </div>
    <center><div className=" col-lg-7 order-1 order-lg-2 mt-5  header-iimg">
        
        <img src={web}  className="rounded-circle img-fluid animated  " alt="Common img"  />
        
        
      </div></center>
   
</div>
</div>
    </div>
  
   
</div>

   



</section>
</>
);


};
export default About;