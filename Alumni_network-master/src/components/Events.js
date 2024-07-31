import React from "react";
function Events(){
    return (
        <div class="eve container" style={{backgroundColor:"white"}}>
        <div >
            <h3 class="display-4">EVENTS</h3>
        </div>
    
    <div id="btnContainer" style={{fontSize: "large"}}>
        <span>Filter events - </span>
            <select id="past_events_year_select">
              <option value="" selected="">Year</option>
              <option value="">All</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>         
            </select>
            <select id="past_events_month_select">
                <option value="" selected="">Month</option>
                <option value="">All</option>
                <option value="1">January-April</option>
                <option value="2">May-August</option>
                <option value="3">September-December</option>       
              </select>
              <select id="past_events_name_select">
                <option value="" selected="">Company</option>
                <option value="">All</option>
                <option value="Amazon">Amazon</option>
                <option value="Microsoft">Microsoft</option>
                <option value="Salesforce">Salesforce</option>  
                <option value="Google">Google</option>
                <option value="Apple">Apple</option>  
              </select>
        </div>
        
    <br/>
    <div class="row">
      <div className="q col-lg-2"></div>
      <div class="q col-lg-2" style={{backgroundColor:"#aaa",border:"3px solid #ddd"}}>
        <h2>Event 1</h2>
        <p class="ce"> ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
      <div class="q col-lg-2" style={{backgroundColor:"#bbb",border:"3px solid #ddd"}}>
      <h2>Event 2</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
    
      <div class="q col-lg-2" style={{backgroundColor:"#ccc",border:"3px solid #ddd"}}>
        <h2>Event 3</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
      <div class="q col-lg-2" style={{backgroundColor:"#ddd",border:"3px solid #ddd"}}>
        <h2>Event 4</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
    </div>
    <br/><br/>
    <div class="row">
    <div className="q col-lg-2"></div>
      <div class="q col-lg-2" style={{backgroundColor:"#aaa",border:"3px solid #ddd"}}>
        <h2>Event 5</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
      <div class="q col-lg-2" style={{backgroundColor:"#bbb",border:"3px solid #ddd"}}>
        <h2>Event 6</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
    
      <div class="q col-lg-2" style={{backgroundColor:"#ccc",border:"3px solid #ddd"}}>
        <h2>Event 7</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
      <div class="q col-lg-2" style={{backgroundColor:"#ddd",border:"3px solid #ddd"}}>
        <h2>Event 8</h2>
        <p class="ce">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?</p>
      </div>
      <div id="ji"></div>
    </div>
    </div>
    
    
      );
}

      var elements = document.getElementsByClassName("ce");
    
      var ed=["Certificate of Completion from XLRI Jamshedpur Opportunity to earn a Certificate of Completion from XLRI Jamshedpur",
      "Detailed Course Curriculum A comprehensive syllabus that includes leadership building, holistic approach to management functions, and more",
      "Practical Assignments in Business Development Practical assignments covering major aspects of Business Development to prepare learners in tackling real-life challenges",
      "Learn to Tackle Various Organizational Challenges Exercises & Case-studies to help professionals solve challenges in organizational setups",
      "Lectures by Eminent Faculty from XLRI Experienced faculty from XLRI and Industry experts provide practical insights from everyday issues",
      "User-friendly and easy-to-use Technology Interface Learn from anywhere without any complicated hardware or software installations",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo eum, doloribus eligendi saepe animi blanditiis?"];
      
      for(var i=0;i<elements.length;i++)
      {
          elements[i].innerHTML=ed[i];
      }
    
   
export default Events;
