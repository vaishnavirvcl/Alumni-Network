import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { GridColumns } from '@mui/x-data-grid';
import Sampledata from "./sample.json"



const columns= [
  { field: 'id', headerName: 'ID', width: 110 },
  {
    field: 'name',
    headerName: 'Name',
    width: 210,
    editable: true,
  },
  {
    field: 'yog',
    headerName: 'YearOfGraduation',
    width: 210,
    editable: true,
  },
  {
    field: 'trade',
    headerName: 'Trade',
    width: 210,
    editable: true,
  },
  {
    field: 'lang',
    headerName: 'Languages',
    width: 210,
    editable: true,
  },
  {
    field: 'tech',
    headerName: 'Technical Skills',
    width: 210,
    editable: true,
  },
];
// {
//     Sampledata.map( (record) => {
//         let id=record.id;
//         let yog =record.yog;
//         let tr = record.trade ;
//         let te = record.tech;
//         let la = record.lang;
//         return (<tr><td>{id}</td><td>{yog}</td><td>{tr}</td><td>{te}</td><td>{la}</td></tr>);
//     })
//     }

const rows = [
    { id:Sampledata[0].id,name:"lmn",yog: 2020, trade: "CSE", tech: "Developer" , lang : "Java" },
    { id:102,name:"abc",yog: 2021,  trade:"IT" , tech:"Animation" , lang : "R"},
    { id:103,name:"abc",yog: 2019,  trade:"CSE", tech: "Developer" , lang : "CPP"},
    { id:104,name:"abc",yog: 2008, trade: "IT",  tech: "HR" , lang : "Java"},
    { id:105,name:"xyz",yog: 2009,  trade: "AIML",  tech: "Non-Technical" , lang : "Java"},
    { id:106,name:"lmn",yog: 2022,  trade: "IT",  tech: "Developer" , lang : "CPP"},
    { id:107,name:"xyz",yog: 2019, trade: "AIML", tech: "Design" , lang : "R"},
    { id:108,name:"lmn",yog: 2008,  trade:"CSE",  tech: "Terminated" , lang : "R"},
    { id:109,name:"xyz",yog: 2020,  trade: "AIML",  tech: "Animation" , lang : "Java"},
    { id:110,name:"lmn",yog: 2021,  trade:"CSE",  tech:"Non-Technical", lang : "Python"},
];

export default function Directory() {
  return (
    <div>
      <div className="heading">
            <h1>Search Alumni</h1>
        </div>
    <Box sx={{ height: 400, width: '100%' , backgroundColor:"white" ,  boxShadow: 2,}}>
      <DataGrid 
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
  );
}