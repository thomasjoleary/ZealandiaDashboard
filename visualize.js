console.log("d3 Visualization Version:", d3.version);

// set dimensions of the canvas / graph
const xSize = 200;
const ySize = 200;
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

// create axes
const xScale = d3.scaleLinear()
    .domain([0, d3.max(xdata)*1.1])
    .range([0, xSize*.90]);
svg.append("g")
    .attr("transform", "translate(0, " + (ySize*.90) + ")")
    .call(d3.axisBottom(xScale));

const yScale = d3.scaleLinear()
    .domain([0, d3.max(ydata)*1.1])
    .range([ySize*.90, 0]);
svg.append("g")
    .call(d3.axisLeft(yScale));

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
            .attr('r', 20)
            .attr('fill', 'red');
    })
    .on("mouseout", function(d, i) {
        d3.select(this).transition()
            .duration('750')
            .attr('r', 5)
            .attr('fill', 'black');
    });
