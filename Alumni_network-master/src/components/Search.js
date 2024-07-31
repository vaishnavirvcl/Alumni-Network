import React from "react";
function Search(){
    return (
        <div>
        <div className="heading">
            <h1>Search Alumni</h1>
        </div>
    <div className="outer-wrapper">
    <div className="table-wrapper">
    <table id="emp-table">
        <thead>
            <th id="1" >Alumni ID</th>
            <th id="2">YearOfGraduation
                <select className="table-filter" onchange="filter_rows()">
                    <option value="all"></option>
                </select>
            </th>

            <th id="3">Trade
                <select className="table-filter" onchange="filter_rows()">
                    <option value="all"></option>
                </select>
            </th>
            <th id="4">TechnicalSkills
                <select className="table-filter" onchange="filter_rows()">
                    <option value="all"></option>
                </select>
            </th>
            <th id="5">Languages
                <select className="table-filter" onchange="filter_rows()">
                    <option value="all"></option>
                </select>
            </th>
            
        </thead>
        <tbody>
            <tr>
                <td>101</td>
                <td>2020</td>
                <td>cse</td>
                <td>Developer</td>
                <td>python</td>
            </tr>
            <tr>
                <td>102</td>
                <td>2021</td>
                <td>cse</td>
                <td>animation</td>
                <td>R</td>
            </tr>
            <tr>
                <td>103</td>
                <td>2019</td>
                <td>it</td>
                <td>developer</td>
                <td>java</td>
            </tr>
            <tr>
                <td>104</td>
                <td>2020</td>
                <td>cse</td>
                <td>hr</td>
                <td>java</td>
            </tr>
            <tr>
                <td>201</td>
                <td>2019</td>
                <td>aiml</td>
                <td>non technical</td>
                <td>python</td>
            </tr>
            <tr>
                <td>202</td>
                <td>2007</td>
                <td>it</td>
                <td>developer</td>
                <td>java</td>
            </tr>
            <tr>
                <td>203</td>
                <td>2020</td>
                <td>cse</td>
                <td>animation</td>
                <td>R</td>
            </tr>
            <tr>
                <td>204</td>
                <td>2019</td>
                <td>aiml</td>
                <td>design</td>
                <td>java</td>
            </tr>
            <tr>
                <td>301</td>
                <td>2018</td>
                <td>cse</td>
                <td>developer</td>
                <td>python</td>
            </tr>
            <tr>
                <td>302</td>
                <td>2007</td>
                <td>it</td>
                <td>design</td>
                <td>R</td>
            </tr>
            <tr>
                <td>303</td>
                <td>2010</td>
                <td>cse</td>
                <td>Terminated</td>
                <td>java</td>
            </tr>
            <tr>
                <td>304</td>
                <td>2010</td>
                <td>cse</td>
                <td>On Leave</td>
                <td>java</td>
            </tr>
            

        </tbody>
    </table>
    
</div>
</div>
</div>
      );
}

// window.onload = () => {
//     console.log(document.querySelector("#emp-table > tbody > tr:nth-child(1) > td:nth-child(2) ").innerHTML);
// };

getUniqueValuesFromColumn()

function getUniqueValuesFromColumn() {

    var unique_col_values_dict = {}

    let allFilters = document.querySelectorAll(".table-filter")
    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute("id");
        // alert(col_index)
        const rows = document.querySelectorAll("#emp-table > tbody > tr")

        rows.forEach((row) => {
            var cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;
            // if the col index is already present in the dict
            if (col_index in unique_col_values_dict) {

                // if the cell value is already present in the array
                if (unique_col_values_dict[col_index].includes(cell_value)) {
                    // alert(cell_value + " is already present in the array : " + unique_col_values_dict[col_index])

                } else {
                    unique_col_values_dict[col_index].push(cell_value)
                    // alert("Array after adding the cell value : " + unique_col_values_dict[col_index])

                }


            } else {
                unique_col_values_dict[col_index] = new Array(cell_value)
            }
        });

        
    });

    // for(i in unique_col_values_dict) {
    //     alert("Column index : " + i + " has Unique values : \n" + unique_col_values_dict[i]);
    // }

    updateSelectOptions(unique_col_values_dict)

};

// Add <option> tags to the desired columns based on the unique values

function updateSelectOptions(unique_col_values_dict) {
    let allFilters = document.querySelectorAll(".table-filter")

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('id')

        unique_col_values_dict[col_index].forEach((i) => {
            filter_i.innerHTML = filter_i.innerHTML + `\n<option value="${i}">${i}</option>`
        });

    });
};


// Create filter_rows() function

// filter_value_dict {2 : Value selected, 4:value, 5: value}

function filter_rows() {
    let allFilters = document.querySelectorAll(".table-filter")
    var filter_value_dict = {}

    allFilters.forEach((filter_i) => {
        var col_index = filter_i.parentElement.getAttribute('id')

        var value = filter_i.value
        if (value != "all") {
            filter_value_dict[col_index] = value;
        }
    });

    var col_cell_value_dict = {};

    const rows = document.querySelectorAll("#emp-table tbody tr");
    rows.forEach((row) => {
        var display_row = true;

        allFilters.forEach((filter_i) => {
            var col_index = filter_i.parentElement.getAttribute('col-index')
            col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index+ ")").innerHTML
        })

        for (var col_i in filter_value_dict) {
            var filter_value = filter_value_dict[col_i]
            var row_cell_value = col_cell_value_dict[col_i]
            
            if (row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") {
                display_row = false;
                break;
            }


        }

        if (display_row == true) {
            row.style.display = "table-row"

        } else {
            row.style.display = "none"

        }





    })

}  
export default Search;
