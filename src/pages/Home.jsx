import logo4 from '../../public/images/logo4.png';
import logo3 from '../../public/images/logo3.png';
import logo6 from '../../public/images/logo6.png';
import logo2 from '../../public/images/logo2.png';
import logo1 from '../../public/images/logo1.png';
import pic1 from '../../public/images/pic1.png';
// import header from "./header.css";






const Home = () => {
    return ( 
      
        <div className="homepage">
        
            <img  src={pic1} alt=".."  />
          
            <h1 style={{ fontSize: '65px' }}>
                Perfect Way to Buy
            </h1>
            <h1 style={{ fontSize: '65px' }}>And Sell A Home </h1>

            <p style={{ paddingTop: '30px', fontSize: '18px' }}>Diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa aliqua <br />
                dui pellentesque. Ac, gravida in eget non amet eget purus non.

            </p>

            <div style={{ paddingTop: '50px' }}>
                <table>
                    <tr >
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn">Purpose</button>
                                <div class="dropdown-content">
                                    <a href="#">Buy</a>
                                    <a href="#">Rent</a>
                                    <a href="#">Sell</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn">loaction</button>
                                <div class="dropdown-content">
                                    <a href="#">Faisalabad</a>
                                    <a href="#">Lahore</a>
                                    <a href="#">Karachi</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <button class="dropbtn">Type</button>
                                <div class="dropdown-content">
                                    <a href="#">Industrial</a>
                                    <a href="#">Commerical</a>
                                    <a href="#">Residential</a>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="dropdown">
                                <button class="button">Dropdown</button>
                            </div>
                        </td>

                    </tr>
                </table>
            </div>


            <h1 style={{ paddingTop: '200px' }}>Featured In</h1>
            <div className="row"style={{ paddingTop: '100px' }}>
  
  

  <div className="column" >
    <img src={logo4} alt="Logo 4" />
  </div>
  <div className="column">
    <img src={logo3} alt="Logo 3" />
  </div>
  <div className="column">
    <img src={logo6} alt="Logo 6" />
  </div>
  <div className="column">
    <img src={logo2} alt="Logo 2" />
  </div>
  <div className="column">
    <img src={logo1} alt="Logo 1" />
  </div>


</div>
        </div>

    );
}

export default Home;