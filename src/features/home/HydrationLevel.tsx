import React from "react";
import BoldParagraph from "../../components/BoldParagraph";
import Heading2 from "../../components/Heading2";
import { createUseStyles } from "react-jss";
import Paragraph from "../../components/Paragraph";
import BarChart from "../../components/BarChart";
import heartRate from "../../constants/heartRate";
import theme from "../../constants/theme";
import RadialBarChart from "../../components/RadialBarChart";
import CircularProgressBar from "../../components/CircularProgressBar";


const useStyles = createUseStyles({
  description: {
    display: "flex",
  },
  chartContainer: {
    // width: "70%",
    // // height: "30px",
    // height: "100%"
    alignSelf: "center"
  },
  chart: {
    display: "flex",
    height: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: theme.background.accent,
    color: `${theme.text.primary} !important`,
    padding: "1rem"
  }
});

const HeartRate = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <BoldParagraph>Heart rate</BoldParagraph>
      <div style={{flex: "1"}}>
        <div className={styles.chart}>
          <div className={styles.chartContainer}>
            <CircularProgressBar />
          </div>
          <Heading2>73 kg</Heading2>
        </div>
      </div>
      <div className={styles.description}>
        <Paragraph>Reduce Caffeine</Paragraph>
        <p>60 - 100 beats per minute</p>
      </div>
    </div>
  );
};

export default HeartRate;
