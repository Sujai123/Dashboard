import React from 'react'

const DumbellBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <g>
      <circle cx={x + width / 8} cy={y} r={width / 3} fill={fill} />
      <circle cx={x + width / 8} cy={y + height} r={width / 3} fill={fill} />
      <rect x={x} y={y} width={width / 4} height={height} fill={fill} />
    </g>
  );
}

export default DumbellBar