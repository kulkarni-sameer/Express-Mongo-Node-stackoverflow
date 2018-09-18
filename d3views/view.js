var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

var svgWidth = 500; 
var svgHeight = 300
var barPadding = 5;
var barWidth = (svgWidth / dataset.length);


 var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/testForAuth";
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Finding!!");
  var query = { username : 'dyuthi'};
  db.collection("users").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
var barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
         return svgHeight - d 
    })
    .attr("height", function(d) { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function (d, i) {
        var translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });