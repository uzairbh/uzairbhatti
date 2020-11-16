import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.jpg";
import f from "../src/images/f.jpg";
import e from "../src/images/e.jpg";
import Common from './Common';
const Home=()=>{

return(<>
<Common

name="Grow Your Bussines With"
imgsrc={web}
f={f}
e={e}
visit="/service"
btname="Get Started"

/>
</>
);


};
export default Home;