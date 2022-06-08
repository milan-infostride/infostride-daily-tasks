import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


var $ = require( "jquery" );
const Navbar_component = () => {
  const history = useHistory();
  const [collapse_classes,setCollapse] = useState("collapse navbar-collapse")
  
    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Milandeep Singh Bhalla</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={collapse_classes} id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={()=>{window.location.assign("#about")}}>
          <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"  href="#about" >About</a>
        </li>
        <li className="nav-item" onClick={()=>{window.location.assign("#languages")}}>
          <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" href="#languages">Languages</a>
        </li>
        <li className="nav-item" onClick={()=>{window.location.assign("#projects")}}>
          <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" href="#projects">Projects</a>
        </li>
        <li className="nav-item" onClick={()=>{window.location.assign("#education")}}>
          <a className="nav-link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" href="#education">Education</a>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav> 
);
}
 
export default Navbar_component