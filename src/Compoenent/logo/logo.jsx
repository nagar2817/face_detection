import React from "react";
import "./logo.style.scss";
import Tilt from 'react-tilt'
import brain from "../../asset/brain.png";

// logo component as function
const Logo = ()=>(
    <div style={{margin:"10px",padding:"20px",borderRadius:"5px",boxShadow:"3px",borderColor:"pink"}}>
    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
    <div className="Tilt-inner" style={{width:"10px"}}><img src={brain} style={{width:'100px',height:"100px", padding:"20px"
   
}} alt="logo" /> </div>
   </Tilt>
    </div>
   
)
export default Logo;
