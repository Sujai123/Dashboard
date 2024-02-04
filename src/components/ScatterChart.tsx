import React, { PureComponent } from "react";
import {
  ScatterChart as ReScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import theme from "../constants/theme";

const data = [
  { x: 0, y: 3, z: 0 },
  { x: 1, y: 2, z: 0 },
  { x: 2, y: 4, z: 0 },
  { x: 3, y: 1, z: 0 },
  { x: 4, y: 6, z: 0 },
  { x: 5, y: 8, z: 0 },
  { x: 6, y: 3, z: 0 },
  { x: 7, y: 5, z: 0 },
  { x: 8, y: 3, z: 0 },
];

const ScatterChart = () => {
  return (
    <ResponsiveContainer>
      <ReScatterChart>
        {/* <CartesianGrid /> */}
        <XAxis type="number" dataKey="x" name="stature" unit="cm" hide />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" hide />
        <Scatter name="A school" data={data} fill={theme.text.secondary} />
      </ReScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterChart;
