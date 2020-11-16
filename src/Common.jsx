import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
const Common=(props)=>{
return(<>
<section id="header" className="d-flex align-items-center">


<div className="container na_bg">
    <div className="row">
  <div className="col-10 max-auto">
  <div className="row">
  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
  <h1  className="mt-5"  >{props.name} <strong className="brand-name">uzair bhatti</strong></h1>
    <h2 className="my-3" >we are the team of talanted developers making web sites</h2>
    <div className="mt-3"  >
<NavLink to={props.visit}  ><button  type="button" class="btn-get-started">{props.btname}</button></NavLink>
   
    </div>
   
    </div>
    <div className="col-lg-12 order-1 order-lg-2 mt-5 header-img">
  <img src={props.imgsrc} style={{ float:"right"  }} className="rounded-circle img-fluid animated  " alt="Common img"  />
  <img src={props.e} style={{ float:"right"  }} className="rounded-circle img-fluid animated  " alt="Common img"  />
  <img src={props.f} style={{ float:"right"  }} className="rounded-circle img-fluid animated " alt="Common img"  />
  
</div>
</div>
</div>
    </div>
   
</div>




</section>
</>
);


};
export default Common;