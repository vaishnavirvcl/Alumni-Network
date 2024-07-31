import React from "react";
import Sampledata from "./sample.json"
function Verify(){
    return (
        <div>
        <div className="heading">
            <h1>Verify Alumni</h1>
        </div>
    <div className="outer-wrapper">
    <div className="table-wrapper">
    <table id="emp-table">
        <thead>
            <th id="1" >Alumni ID</th>
            <th id="2">YearOfGraduation</th>
            <th id="3">Trade</th>
            <th id="4">TechnicalSkills</th>
            <th id="5">Languages</th>
            <th id="6">Status</th>
            
        </thead>
        <tbody>
           
            {
            Sampledata.map( (record) => {
                let id=record.id;
                let yog =record.yog;
                let tr = record.trade ;
                let te = record.tech;
                let la = record.lang;
                return (<tr><td>{id}</td><td>{yog}</td><td>{tr}</td><td>{te}</td><td>{la}</td><td><button className="btn-success me-2">Approved</button><button className="btn-danger">Rejected</button></td></tr>);
            })
            }

        </tbody>
    </table>
    
</div>
</div>
</div>
      );
}
export default Verify;
