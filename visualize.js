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
const xdata = birdCount.map(d => d.Month);
const ydata = birdCount.map(d => d.Count);
console.log(xdata);
console.log(ydata);

// create graph title
svg.append("text")
    .attr("x", (xSize / 2))
    .attr("y", 0 - (margin / 2)+10)
    .attr("text-anchor", "left")
    .style("font-size", "20px")
    .text("Graph");

// create axes
const xScale = d3.scaleLinear()
    .domain([0, d3.max(xdata)*1.1])
    .range([xSize*.10, xSize*.80]);
svg.append("g")
    .attr("transform", "translate(0, " + (ySize*.70) + ")")
    .call(d3.axisBottom(xScale));
// x axis label
svg.append("text")
    .attr("transform", "translate(" + (xSize/2) + " ," + (ySize - 75) + ")")
    .style("text-anchor", "middle")
    .text("Month");

const yScale = d3.scaleLinear()
    .domain([0, d3.max(ydata)*1.1])
    .range([ySize*.70, 0]);
svg.append("g")
    .call(d3.axisLeft(yScale))
    .attr("transform", "translate(" + (xSize*.10) + ", 0)");
// y axis label
svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - 20)
    .attr("x", 0 - (ySize / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Bird Count");

// create line
const line = d3.line()
    .x((d, i) => xScale(xdata[i]))
    .y((d, i) => yScale(ydata[i]));


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
