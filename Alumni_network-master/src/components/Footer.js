import React from "react";
function Footer(){
    return (
        <div id="Contact">
    <footer>
        <div className="container" id="footer_bottom1">
            <div className="row">
                <div className="col-4">
                    <h1>Alumni</h1>
                    <h1>Network</h1>
                </div>
                <div className="col-4">
                <p className="h3 me-3">Contact Us</p>
                <a href="mailto:alumni@kmit.in">alumni@kmit.in</a>
                <br/><br/>
                <a href="tel:23261407">23261407</a>
                </div>
            </div>
        </div>
        <div id="footer_bottom">
	        <div class="row">
		        <div class="column large-6 small-12" id="footer_bottom_college">
			        <span>© Copyright 2023</span>
		        </div>
		    <div class="column large-6 small-12" id="powered-by-almabase">
			    <a href="https://almabase.com?utm_source=customer-site&amp;utm_medium=footer&amp;utm_term=alumni.kmit.in" target="_blank">
                    <span>Alumni management software provided by</span>
                </a>
		    </div>
	    </div>
        </div>
    </footer>
    </div>
    
      );
}
export default Footer;
