import green from '../../public/images/green.png';

const ContactUs = () => {
    return ( 
    <div style={{backgroundColor:'#121B25'}}>
        {/* heading */}
    <h1 style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'50px'}}>Let’s Simply<br/> begin with <br/>Rentiz.</h1> 
        {/* paragraph */}

        <p style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'15px'}}>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue <br/>justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi <br/>congue eget lorem viverra porta id lobortis.
        </p>
            <span className="dropdown" style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'15px',margin:'0px'}}>
                {/* btn */}
           <button className="button">Get Started</button>
       </span>


       {/* image */}
       <section><img src={green} alt=""  /></section>
        
        </div>




       
  
    );
}
 
export default ContactUs;