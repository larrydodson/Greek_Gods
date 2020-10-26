// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
    return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
});

// Slice the first 10 objects for plotting
data1 = data.slice(0, 12);

// Reverse the array due to Plotly's defaults
data1 = data1.reverse();

// Trace1 for the Greek Data
var trace1 = {
    x: data1.map(row => row.greekSearchResults),
    y: data1.map(row => row.greekName),
    text: data1.map(row => row.greekName),
    name: "Greek",
    marker: { color: '#004c99' },
    type: "bar",
    orientation: "h"
};
// data
var data1 = [trace1];


// Sort the data array using the romanSearchResults value
data.sort(function(c, d) {
    return parseFloat(d.romanSearchResults) - parseFloat(c.romanSearchResults);
});

// Slice the first 10 objects for plotting
data2 = data.slice(0, 12);

// Reverse the array due to Plotly's defaults
data2 = data2.reverse();

// Trace2 for the Roman Data
var trace2 = {
    x: data2.map(row => row.romanSearchResults),
    y: data2.map(row => row.romanName),
    text: data.map(row => row.romanName),
    name: "Roman",
    marker: { color: '#6600cc' },
    type: "bar",
    orientation: "h"
};
// data
var data2 = [trace2];

// Apply the group bar mode to the layout
var layout1 = {
    title: "Greek gods search results",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot1", data1, layout1);

// Apply the group bar mode to the layout
var layout2 = {
    title: "Roman gods search results",
    margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
    }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot2", data2, layout2);