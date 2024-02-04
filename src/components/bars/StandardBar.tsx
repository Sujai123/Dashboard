import React from "react";

const StandardBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <g>
      <circle cx={x + width / 4} cy={y} r={width / 4} fill={fill} />
      <circle cx={x + width / 4} cy={y + height} r={width / 4} fill={fill} />
      <rect x={x} y={y} width={width / 2} height={height} fill={fill} />
    </g>
  );
};

export default StandardBar;
