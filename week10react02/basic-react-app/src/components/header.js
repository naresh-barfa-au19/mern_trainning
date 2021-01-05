import React from "react";
import "./../css/header.css"

class Header extends React.Component {
    render() {
        return (
            
            <div className="mainDiv">

        
        <h2 >To-Do app</h2>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link " >home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" >profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">shop</a>
  </li>
 
</ul>
        </div>
    )
    }
}


export default Header