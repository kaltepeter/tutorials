async function drawBars() {
  // your code goes here
  const dataset = await d3.json("./../../my_weather_data.json");
  // console.table(dataset[0]);
  const metricAccessor = d => d.humidity;
  const yAccessor = d => d.length;
  const width = 600;
  const barPadding = 1;

  let dimensions = {
    width,
    height: width * 0.6,
    margin: {
      top: 30,
      right: 10,
      bottom: 50,
      left: 50
    }
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  const wrapper = d3
    .select("#wrapper")
    .append("svg")
    .attr("width", dimensions.width)
    .attr("height", dimensions.height);

  const bounds = wrapper
    .append("g")
    .style(
      "transform",
      `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
    );

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(dataset, metricAccessor))
    .range([0, dimensions.boundedWidth])
    .nice();

  const binsGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(metricAccessor)
    .thresholds(12);

  const bins = binsGenerator(dataset);
  // console.log("TCL: drawBars -> bins", bins);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(bins, yAccessor)])
    .range([dimensions.boundedHeight, 0])
    .nice();

  const binsGroup = bounds.append("g");
  const binsGroups = binsGroup
    .selectAll("g")
    .data(bins)
    .enter()
    .append("g");

  const barRects = binsGroups.append('rect')
      .attr('x', d => xScale(d.x0) + barPadding / 2)
      .attr('y', d => yScale(yAccessor(d)))
      .attr('width', d => d3.max([
        0, 
        xScale(d.x1) - xScale(d.x0) - barPadding
      ]))
      .attr('height', d => dimensions.boundedHeight - yScale(yAccessor(d)))
      .attr('fill', 'cornflowerblue');

  const barText = binsGroups.filter(yAccessor)
    .append('text')
    .attr('x', d => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
    .attr('y', d => yScale(yAccessor(d)) - 5)
    .text(yAccessor)
    .style('text-anchor', 'middle')
    .attr('fill', 'darkgrey')
    .style('font-size', '12px')
    .style('font-family', 'sans-serif');

  const mean = d3.mean(dataset, metricAccessor);
  const meanLine = bounds.append('line')
      .attr('x1', xScale(mean))
      .attr('x2', xScale(mean))
      .attr('y1', -15)
      .attr('y2', dimensions.boundedHeight)
      .attr('stroke', 'maroon')
      .attr('stroke-dasharray', '2px 4px');

  const meanLabel = bounds.append('text')
      .attr('x', xScale(mean))
      .attr('y', -20)
      .text('mean')
      .attr('fill', 'maroon')
      .style('font-size', '12px')
      .style('text-anchor', 'middle');

  const xAxisGenerator = d3.axisBottom()
      .scale(xScale);

  const xAxis = bounds.append('g')
      .call(xAxisGenerator)
        .style('transform', `translateY(${dimensions.boundedHeight}px)`);

  const xAxisLabel = xAxis.append('text')
      .attr('x', dimensions.boundedWidth / 2)
      .attr('y', dimensions.margin.bottom - 10)
      .attr('fill', 'black')
      .style('font-size', '1.4em')
      .text('Humidity');
}
drawBars();
