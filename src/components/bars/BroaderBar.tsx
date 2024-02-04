import React from 'react'

const BroaderBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <rect x={x} y={y} width={width} height={height} rx={8} fill={fill} />
  )
}

export default BroaderBar