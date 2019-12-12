import React from "react";
import PropTypes from "prop-types";
import * as d3 from "d3";
import { dimensionsPropsType } from "./utils";
import { useChartDimensions } from "./Chart";

const axisComponentsByDimension = {
  x: AxisHorizontal,
  y: AxisVertical
};
const Axis = ({ dimension, ...props }) => {
  const dimensions = useChartDimensions();
  const Component = axisComponentsByDimension[dimension];
  if (!Component) return null;

  return <Component {...props} dimensions={dimensions} />;
};

Axis.propTypes = {
  dimension: PropTypes.oneOf(["x", "y"]),
  dimensions: dimensionsPropsType,
  scale: PropTypes.func,
  label: PropTypes.string,
  formatTick: PropTypes.func
};

const formatNumber = d3.format(",");
Axis.defaultProps = {
  dimension: "x",
  scale: null,
  formatTick: formatNumber
};

export default Axis;

function AxisHorizontal({ dimensions, label, formatTick, scale, ...props }) {
  const numberOfTicks =
    dimensions.boundedWidth < 600
      ? dimensions.boundedWidth / 100
      : dimensions.boundedWidth / 250;
  const ticks = scale.ticks(numberOfTicks);
  return (
    <g
      className="Axis AxisHorizontal"
      transform={`translate(0, ${dimensions.boundedHeight})`}
      {...props}
    >
      <line className="Axis__line" x2={dimensions.boundedWidth} />
      {ticks.map((tick, i) => (
        <text
          key={tick}
          className="Axis__tick"
          transform={`translate(${scale(tick)}, 25)`}
        >
          {formatTick(tick)}
        </text>
      ))}
      {label && (
        <text
          className="Axis__label"
          transform={`translate(${dimensions.boundedWidth / 2}, 60)`}
        >
          {label}
        </text>
      )}
    </g>
  );
}

function AxisVertical({ dimensions, label, formatTick, scale, ...props }) {
  return <g className="Axis AxisVertical" {...props}></g>;
}
