import React from 'react';
import kc from './pictures/kmit_campus1.jpg';
function AboutUs(){
    return (
        <div>
            <div class="container" id="about">
        <h1 class="p-4">About Us</h1>
    </div>
    <br/>
    
    <div class="container">
        <div class="container-fluid">
            <div class="content row">
                <div class="col">
                    <br/>
                    <img src={kc} alt="" class="img-fluid"/>
                    <br/><br/>
                </div>
                <div class="col" >
                    <br/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quaerat ex harum.
                         Sit qui illum nulla dolorum, velit optio consectetur labore nisi commodi repudiandae
                          tenetur, quasi placeat? Nulla, corporis sed!</p>
                </div>
                
            </div>
            <div class="content row">
                <div class="col">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid quaerat ex harum.
                         Sit qui illum nulla dolorum, velit optio consectetur labore nisi commodi repudiandae
                          tenetur, quasi placeat? Nulla, corporis sed!</p>
                </div>
                <div class="col">
                    <img src={kc} alt="" class="img-fluid"/>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <p class="kmitp">KMIT, established in year 2007, is one of the premier engineering colleges in the state of Telangana. KMIT is sponsored by Keshav Memorial Education Society (KMES), well known in Hyderabad, for the past 75 years, for running various educational institutions of repute.</p>
            
            <p class="kmitp">KMIT is approved by All India Council for Technical Education (AICTE), New Delhi, and affiliated to Jawaharlal Nehru Technological University (JNTU), Hyderabad and recognized by Govt. of Telangana.</p>
            
            <p class="kmitp">KMIT is co-promoted and powered by GENESIS SOLUTIONS PVT LTD, a premier and pioneer institute in Hyderabad imparting industry focused software training and education in emerging technologies and having tie-ups with leading MNCs.</p>
            
            <p class="kmitp">KMIT campus is located in Narayanaguda, a central place in the city of Hyderabad. The vision of the institution is to create 360 degree thinking engineers to cater to industry needs.</p>
    </div>
        </div>
    );
}
export default AboutUs;