// import React from "react";
// import { Link } from "react-router-dom";
// import "../Navbar/Navbar.css";
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//      <Link to={"/home"} className="">Go To Home</Link>
//       <ul>

// <li>
//         <Link to={"/buying"}>Go To Buying</Link>
// </li>
// <li>

//         <Link to={"/Selling"} >Go To Selling</Link>
// </li>
// <li>
//         <Link to={"/Renting"}>Go To Renting</Link>
// </li>



// <li>

//         <Link to={"/AboutUs"}>Go To AboutUs</Link>

// </li>
// <li>
//         <Link to={"/ContactUs"}>Go To ContactUs</Link>
//      </li> 

//     </ul>


//     </nav>

//   );
// };

// export default Navbar;
import { Link  } from "react-router-dom";
const Navbar = () => {
        return <header className="section-navbar">
  <div className="container">
    <div className="navbar-brand">
      <h1>Rentiz</h1>
     
      
    </div>
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-Link ">Home</Link>
          
        </li>
        <li className="nav-item">
        <Link to="/aboutus" className="nav-Link ">aboutus</Link>
        </li>
        <li className="nav-item">
        <Link to="/buying" className="nav-Link ">Buying</Link>
        </li>
        <li className="nav-item">
        <Link to="/Renting" className="nav-Link ">Renting</Link>
        </li>
        <li className="nav-item">
        <Link to="/selling" className="nav-Link ">Selling</Link>
          
        </li>
        <li className="nav-item">
        <Link to="/contactus" className="nav-Link ">ContactUs</Link>
        </li>


       

        <li className="btn" >

        <Link to="" className="nav-Link ">Login In</Link>
        </li>
        <li className="btn">
        <Link to="" className="nav-Link ">Sign Up</Link>
        </li>
        
      </ul>
    </nav>
  </div>
</header>




         
}
 
export default Navbar;