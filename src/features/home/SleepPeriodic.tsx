import React from 'react'
import Select from '../../components/Select'
import { createUseStyles } from 'react-jss'
import BarChart from '../../components/BarChart'
import theme from '../../constants/theme';
import BroaderBar from '../../components/bars/BroaderBar';

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
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
  container: {
    backgroundColor: "#252736",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  },
  sleepPeriodicHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  sleepPeriodicContent: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%"
  },
  chartContainer: {
    width: "70%",
    // height: "30px",
    height: "70%"
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem"
  }
})

const SleepPeriodic = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.sleepPeriodicHeader}>
        <div>
          <h3>Sleep Periodic</h3>
          <p>Control your sleep to create great habit</p>
        </div>
        <div>
          {/* <Select /> */}
        </div>
      </div>
      <div className={styles.sleepPeriodicContent}>
        <div className={styles.textContent}>
          <div>
            <p>Avg you sleep</p>
            <h1>6.2</h1>
            <p>hours</p>
          </div>
          <div>
            <p>Avg you sleep</p>
            <h1>6.2</h1>
            <p>hours</p>
          </div>
        </div>
        <div className={styles.chartContainer}>
            <BarChart data={data} barShape={<BroaderBar />} fill={theme.text.secondary} />
        </div>
      </div>
    </div>
  )
}

export default SleepPeriodic