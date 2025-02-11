var w = 600;
var h = 200;
var padding = 30;
var dataset = [[5, 20], [480, 90], [250, 50], [100, 33], [330, 95], [410, 12], [475, 44], [25, 67], [85, 21], [220, 88]];

var xScale = d3.scaleLinear()
    .domain([d3.min(dataset, function (d) {
        return d[0];
    }),
    d3.max(dataset, function (d) {
        return d[0];
    })])
    .range([padding, w - padding]);
var yScale = d3.scaleLinear()
    .domain([d3.min(dataset, function (d) {
        return d[1];
    }),
    d3.max(dataset, function (d) {
        return d[1];
    })])
    .range([h - padding, padding]);
var svg = d3.select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

// Create circles based on the dataset
svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", function (d, i) {
        return xScale(d[0]);
    })
    .attr("cy", function (d) {
        return yScale(d[1]);
    })
    .attr("r", 5)
    .attr("fill", function (d) {
        // Set fill color based on a condition
        if (d[0] == 100) {
            return "red";
        } else {
            // Use a colorful palette for other circles
            return d3.interpolateRainbow(Math.random());
        }
    });

// Create text labels based on the dataset
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function (d) {
        return d[0] + "," + d[1];
    })
    .attr("x", function (d) {
        return xScale(d[0]);
    })
    .attr("y", function (d) {
        return yScale(d[1]) - 5;
    })
    .attr("font-size", "11px")
    .attr("fill", function (d) {
        // Set text fill color based on a condition
        if (d[0] == 100) {
            return "red";
        } else {
            // Use a colorful palette for other text
            return d3.interpolateRainbow(Math.random());
        }
    });
