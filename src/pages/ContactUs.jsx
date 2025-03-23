import green from '../../public/images/green.png';

const ContactUs = () => {
    return ( 
    <div style={{backgroundColor:'#121B25'}}>
        {/* heading */}
    <h1 style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'50px'}}>Let’s Simply<br/> begin with <br/>Rentiz.</h1> 
        {/* paragraph */}
        <p style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'15px'}}>Neque, vestibulum sed varius magna et at. Eu, adipiscing morbi augue <br/>justo. Nibh laoreet volutpat quis velit. Blandit aliquam donec sed morbi <br/>congue eget lorem viverra porta id lobortis.</p>
            <div class="dropdown" style={{paddingLeft:'290px',paddingTop:'50px',fontSize:'15px'}}>
                {/* btn */}
           <button class="button">Get Started</button>
       </div>
       {/* image */}
       <section><img src={green} alt=""  /></section>
        
        </div>




       
  
    );
}
 
export default ContactUs;