// from data.js
var tableData = data;

// YOUR CODE HERE!
//adding the whole dataset in table
var tbody = d3.select("tbody")

tableData.forEach((element) => {
    var row = tbody.append("tr")
    Object.entries(element).forEach(([key,value]) => {
        var cell = row.append("td")
        cell.text(value)
    }) 
})

var filterButton = d3.select("#filter-btn")
filterButton.on("click", function() {
    var filterDate = d3.select("#datetime")
    var filterCity = d3.select("#city") 
    var filterState = d3.select("#state")
    var filterCountry = d3.select("#country")
    var filterShape = d3.select("#shape")
    var inputValue = (filterDate.property("value") || filterCity.property("value") || 
    filterState.property("value") || filterCountry.property("value") || filterShape.property("value"))
    console.log(inputValue)
    tbody.html("")
    var filteredData = tableData.filter(element => 
        element.datetime == inputValue || element.city == inputValue || 
        element.state == inputValue || element.country == inputValue || 
        element.shape == inputValue)
        console.log(filteredData)
    filteredData.forEach((info) => {
        var row = tbody.append("tr")
        Object.entries(info).forEach(([key,value]) => {
            var cell = row.append("td")
            cell.text(value)
        })
    })   
})