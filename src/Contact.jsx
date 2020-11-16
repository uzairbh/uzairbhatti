import React, { useState } from 'react';

const Contact=()=>{
// const [data , setdata] = useState({
//     fname:"",
//     lname:"",
//     mail:"",
// });
// const InputEvent = (event) => {
// const {name , value} = event.targate;
// setdata ((prevVal)=>{
//     return{
//         ...prevVal,
//         [name]: value,
//     }
// })
// };

// const formSubmit = () => {
//  event.preventDefault();
//  alert(`$data.fname`);
// };

return(<>
<div className="my-5">

    <h1 className="text-center">Contact US</h1>
</div>
<div className="container contact_div" >
   

    <div class="contact-form">

    <form method="post" action=""
     //onSubmit={formSubmit}  
     class="form-horizontal" role="form" align="center" >
        <div class="form-group" align="center">
            <label class="control-label col-sm-6" align="left"  for="username">First Name</label>
            <div class="col-sm-6">
                <input type="text" name="username" id="username" name="fname" 
                //value={data.fname} 
                //onChange={InputEvent} 
                placeholder="username" required="true" class="form-control"/>
            </div>
        </div>  

        <div class="form-group" align="center">
            <label class="control-label col-sm-6"  align="left" for="username">Last Name</label>
            <div class="col-sm-6">
                <input type="text" name="username" id="username" name="lname" 
                //value={data.lname} 
                //onChange={InputEvent} 
                placeholder="username" required="true" class="form-control"/>
            </div>
        </div>  

        <div class="form-group" align="center">
            <label class="control-label col-sm-6" align="left"  for="username">Email</label>
            <div class="col-sm-6">
                <input type="email" name="username" id="username" name="mail" 
                //value={data.mail} 
                //onChange={InputEvent} 
                placeholder="username" required="true" class="form-control"/>
            </div>
        </div>  
      

      
        <div class="form-group" align="center">
           
            <div class=" mt-3 " >
                <button className="btn btn-primary"> Submit </button>
            </div>
        </div>  
            
    </form>
</div>
    </div>


</>
);


};
export default Contact;