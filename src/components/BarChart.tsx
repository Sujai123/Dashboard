import React, { PureComponent } from "react";
import {
  BarChart as ReBarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import StandardBar from "./bars/StandardBar";
import theme from "../constants/theme";


const BarChart = (props) => {
  const fill = props.fill || theme.background.accent
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart width={150} height={40} data={props.data}>
        <Bar dataKey="uv" fill={fill} shape={props.barShape} />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
