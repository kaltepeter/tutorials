async function drawScatter() {
  // 1. Access data

  const dataset = await d3.json("./../../../my_weather_data.json");

  // set data constants
  const xAccessor = d => d.temperatureMin;
  const yAccessor = d => d.temperatureMax;

  // 2. Create chart dimensions

  const width = d3.min([window.innerWidth * 0.75, window.innerHeight * 0.75]);
  let dimensions = {
    width: width,
    height: width,
    margin: {
      top: 90,
      right: 90,
      bottom: 50,
      left: 50
    },
    histogramMargin: 10,
    histogramHeight: 70
  };
  dimensions.boundedWidth =
    dimensions.width - dimensions.margin.left - dimensions.margin.right;
  dimensions.boundedHeight =
    dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

  // 3. Draw canvas

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

  const boundsBackground = bounds
    .append("rect")
    .attr("class", "bounds-background")
    .attr("x", 0)
    .attr("width", dimensions.boundedWidth)
    .attr("y", 0)
    .attr("height", dimensions.boundedHeight);

  // 4. Create scales
  const temperaturesExtent = d3.extent([
    ...dataset.map(xAccessor),
    ...dataset.map(yAccessor)
  ]);

  const xScale = d3
    .scaleLinear()
    .domain(temperaturesExtent)
    .range([0, dimensions.boundedWidth])
    .nice();

  const yScale = d3
    .scaleLinear()
    .domain(temperaturesExtent)
    .range([dimensions.boundedHeight, 0])
    .nice();

  const colorScaleYear = 2000;
  const parseDate = d3.timeParse("%Y-%m-%d");
  const colorAccessor = d => parseDate(d.date);

  const colorScale = d3
    .scaleSequential()
    .domain([
      d3.timeParse("%m/%d/%Y")(`1/1/${colorScaleYear}`),
      d3.timeParse("%m/%d/%Y")(`12/31/${colorScaleYear}`)
    ])
    .interpolator(d => d3.interpolateRainbow(-d));

  // 5. Draw data

  const dotsGroup = bounds.append("g");
  const dots = dotsGroup
    .selectAll(".dot")
    .data(dataset, d => d[0])
    .join("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(xAccessor(d)))
    .attr("cy", d => yScale(yAccessor(d)))
    .attr("r", 4)
    .style("fill", d => colorScale(colorAccessor(d)));

  const topHistogramGenerator = d3
    .histogram()
    .domain(xScale.domain())
    .value(xAccessor)
    .thresholds(20);

  const topHistogramBins = topHistogramGenerator(dataset);

  const topHistogramYScale = d3
    .scaleLinear()
    .domain(d3.extent(topHistogramBins, d => d.length))
    .range([dimensions.histogramHeight, 0]);

  const topHistogramBounds = bounds
    .append("g")
    .attr(
      "transform",
      `translate(0, ${-dimensions.histogramHeight -
        dimensions.histogramMargin})`
    );

  const topHistogramLineGenerator = d3
    .area()
    .x(d => xScale((d.x0 + d.x1) / 2))
    .y0(dimensions.histogramHeight)
    .y1(d => topHistogramYScale(d.length))
    .curve(d3.curveBasis);

  const topHistogramElement = topHistogramBounds
    .append("path")
    .attr("d", d => topHistogramLineGenerator(topHistogramBins))
    .attr("class", "histogram-area");

  const rightHistogramGenerator = d3
    .histogram()
    .domain(yScale.domain())
    .value(yAccessor)
    .thresholds(20);

  const rightHistogramBins = rightHistogramGenerator(dataset);

  const rightHistogramYScale = d3
    .scaleLinear()
    .domain(d3.extent(rightHistogramBins, d => d.length))
    .range([dimensions.histogramHeight, 0]);

  const rightHistogramBounds = bounds
    .append("g")
    .attr("class", "right-histogram")
    .style(
      "transform",
      `translate(${dimensions.boundedWidth + dimensions.histogramMargin}px, -${
        dimensions.histogramHeight
      }px) rotate(90deg)`
    );

  const rightHistogramLineGenerator = d3
    .area()
    .x(d => yScale((d.x0 + d.x1) / 2))
    .y0(dimensions.histogramHeight)
    .y1(d => rightHistogramYScale(d.length))
    .curve(d3.curveBasis);

  const rightHistogramElement = rightHistogramBounds
    .append("path")
    .attr("d", d => rightHistogramLineGenerator(rightHistogramBins))
    .attr("class", "histogram-area");

  // 6. Draw peripherals

  const xAxisGenerator = d3
    .axisBottom()
    .scale(xScale)
    .ticks(4);

  const xAxis = bounds
    .append("g")
    .call(xAxisGenerator)
    .style("transform", `translateY(${dimensions.boundedHeight}px)`);

  const xAxisLabel = xAxis
    .append("text")
    .attr("class", "x-axis-label")
    .attr("x", dimensions.boundedWidth / 2)
    .attr("y", dimensions.margin.bottom - 10)
    .html("Minimum Temperature (&deg;F)");

  const yAxisGenerator = d3
    .axisLeft()
    .scale(yScale)
    .ticks(4);

  const yAxis = bounds.append("g").call(yAxisGenerator);

  const yAxisLabel = yAxis
    .append("text")
    .attr("class", "y-axis-label")
    .attr("x", -dimensions.boundedHeight / 2)
    .attr("y", -dimensions.margin.left + 10)
    .html("Maximum Temperature (&deg;F)");

  // 7. Set up interactions
  const voronoiGenerator = d3
    .voronoi()
    .x(d => xScale(xAccessor(d)))
    .y(d => yScale(yAccessor(d)))
    .extent([
      [0, 0],
      [dimensions.boundedWidth, dimensions.boundedHeight]
    ]);

  const voronoiPolygons = voronoiGenerator.polygons(dataset);

  const voronoi = dotsGroup
    .selectAll(".voronoi")
    .data(voronoiPolygons)
    .enter()
    .append("polygon")
    .attr("class", "voronoi")
    .attr("points", (d = []) => d.map(point => point.join(",")).join(" "));

  voronoi.on("mouseenter", onVoronoiMouseEnter);
  voronoi.on("mouseleave", onVoronoiMouseLeave);

  const tooltip = d3.select("#tooltip");
  const hoverElementsGroup = bounds.append("g").attr("opacity", 0);

  const horizontalLine = hoverElementsGroup
    .append("rect")
    .attr("class", "hover-line");
  const verticalLine = hoverElementsGroup
    .append("rect")
    .attr("class", "hover-line");
  const dayDot = hoverElementsGroup
    .append("circle")
    .attr("class", "tooltip-dot");

  function onVoronoiMouseEnter(voronoiDatum) {
    const datum = voronoiDatum.data;
    hoverElementsGroup.style("opacity", 1);

    const x = xScale(xAccessor(datum));
    const y = yScale(yAccessor(datum));

    dayDot
      .attr("cx", d => x)
      .attr("cy", d => y)
      .attr("r", 7);

    const hoverLineThickness = 10;
    horizontalLine
      .attr("x", x)
      .attr("y", y - hoverLineThickness / 2)
      .attr(
        "width",
        dimensions.boundedWidth +
          dimensions.histogramMargin +
          dimensions.histogramHeight -
          x
      )
      .attr("height", hoverLineThickness);

    verticalLine
      .attr("x", x - hoverLineThickness / 2)
      .attr("y", -dimensions.histogramMargin - dimensions.histogramHeight)
      .attr("width", hoverLineThickness)
      .attr(
        "height",
        y + dimensions.histogramMargin + dimensions.histogramHeight
      );

    const formatTemperature = d3.format(".1f");
    tooltip
      .select("#max-temperature")
      .text(formatTemperature(yAccessor(datum)));

    tooltip
      .select("#min-temperature")
      .text(formatTemperature(xAccessor(datum)));

    const dateParser = d3.timeParse("%Y-%m-%d");
    const formatDate = d3.timeFormat("%A, %B %-d, %Y");

    tooltip.select("#date").text(formatDate(dateParser(datum.date)));

    const tooltipX = xScale(xAccessor(datum)) + dimensions.margin.left;
    const tooltipY = yScale(yAccessor(datum)) + dimensions.margin.top - 4;

    tooltip.style(
      "transform",
      `translate(calc( -50% + ${tooltipX}px), calc( -100% + ${tooltipY}px))`
    );

    tooltip.style("opacity", 1);
  }

  function onVoronoiMouseLeave() {
    hoverElementsGroup.style("opacity", 0);
    tooltip.style("opacity", 0);
  }
}
drawScatter();
