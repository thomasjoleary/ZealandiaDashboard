console.log("d3 Visualization Version:", d3.version);

// set dimensions of the canvas / graph
const xSize = 400;
const ySize = 400;
const margin = 20;

// create svg element
const svg = d3.select("#graph").append("svg")
  .attr("width", xSize + margin)
  .attr("height", ySize + margin)
  .append("g")
  .attr("transform", "translate(" + margin + "," + margin + ")");

// read data from json
console.log(birdCount);
const birdCountData = birdCount[1].data;
const xdata = birdCountData.map(d => d.Month);
const ydata = birdCountData.map(d => d.Count);
console.log(xdata);
console.log(ydata);

// create graph title
const title = birdCount.map(d => d.Title)[0];
console.log(title);
svg.append("text")
    .attr("x", (xSize / 2))
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text(title);


// set axis positions
const axisLeft = xSize * 0.10;
const axisRight = xSize * 0.90;
const axisTop = ySize * 0.10;
const axisBottom = ySize * 0.90;

// create axes
// create x axis
const xScale = d3.scaleLinear()
    .domain([0, d3.max(xdata)*1.1])
    .range([axisLeft, axisRight]);
svg.append("g")
    .attr("transform", "translate(0, " + axisRight + ")")
    .call(d3.axisBottom(xScale));
// x axis label
svg.append("text")
    .attr("transform", "translate(" + (xSize/2) + " ," + (ySize) + ")")
    .style("text-anchor", "middle")
    .text("Month");

// create y axis
const yScale = d3.scaleLinear()
    .domain([0, d3.max(ydata)*1.1])
    .range([axisBottom, axisTop]);
svg.append("g")
    .call(d3.axisLeft(yScale))
    .attr("transform", "translate(" + axisLeft + ", 0)");
// y axis label
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0)
    .attr("x", 0 - (ySize / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Bird Count");


// add dots to svg
svg.selectAll(".dot")
    .data(ydata)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", (d, i) => xScale(xdata[i]))
    .attr("cy", (d, i) => yScale(ydata[i]))
    .attr("r", 5)
    .on("mouseover", function(d, i) {
        d3.select(this).transition()
            .duration('750')
            .attr('r', 12.5)
            .attr('fill', 'red');
    })
    .on("mouseout", function(d, i) {
        d3.select(this).transition()
            .duration('750')
            .attr('r', 5)
            .attr('fill', 'black');
    });
