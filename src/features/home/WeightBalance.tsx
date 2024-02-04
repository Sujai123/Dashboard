import React from "react";
import BoldParagraph from "../../components/BoldParagraph";
import Heading2 from "../../components/Heading2";
import { createUseStyles } from "react-jss";
import Paragraph from "../../components/Paragraph";
import BarChart from "../../components/BarChart";
import ScatterChart from "../../components/ScatterChart";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: [1000, 2000],
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const useStyles = createUseStyles({
  description: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    fontSize: ".8rem",
    fontFamily: "NunitoLight"
  },
  chartContainer: {
    width: "70%",
    height: "100%",
  },
  chart: {
    paddingInline: "1rem",
    display: "flex",
    height: "100%",
    gap: "1rem"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: "#252736",
    padding: "1rem",
    gap: "1rem"
  }
});

const HeartRate = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <BoldParagraph>Weight Balance</BoldParagraph>
      <div style={{flex: "1"}}>
        <div className={styles.chart}>
          <div className={styles.chartContainer}>
            <ScatterChart />
          </div>
          <Heading2>73 kg</Heading2>
        </div>
      </div>
      <div className={styles.description}>
        <Paragraph>60kg - 60kg ideal weight</Paragraph>
        <Paragraph>128cm height</Paragraph>
      </div>
    </div>
  );
};

export default HeartRate;
