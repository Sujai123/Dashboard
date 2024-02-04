import React from "react";
import BoldParagraph from "../../components/BoldParagraph";
import Heading2 from "../../components/Heading2";
import { createUseStyles } from "react-jss";
import Paragraph from "../../components/Paragraph";
import BarChart from "../../components/BarChart";
import theme from "../../constants/theme";
import DumbellBar from "../../components/bars/DumbellBar";
import heartRate from "../../constants/heartRate";

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
  },
  chartContainer: {
    width: "70%",
    // height: "30px",
    height: "100%"
  },
  chart: {
    display: "flex",
    height: "100%"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.text.primary,
    color: `${theme.background.primary} !important`,
    padding: "1rem"
  }
});

const BloodCells = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Paragraph variant="bold" color={theme.background.primary}>Heart rate</Paragraph>
      <div style={{flex: "1"}}>
        <div className={styles.chart}>
          <div className={styles.chartContainer}>
            <BarChart data={heartRate} barShape={<DumbellBar fill={theme.background.accent2} />} />
          </div>
          <Heading2>73 kg</Heading2>
        </div>
      </div>
      <div className={styles.description}>
        <Paragraph color={theme.background.primary}>Reduce Caffeine</Paragraph>
        <p>60 - 100 beats per minute</p>
      </div>
    </div>
  );
};

export default BloodCells;
