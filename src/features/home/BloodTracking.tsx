import React from 'react'
import Select from '../../components/Select'
import { createUseStyles } from 'react-jss'
import BloodTrackingGrid from './BloodTrackingGrid'
import Legend from '../../components/Legend'
import theme from '../../constants/theme'


const useStyles = createUseStyles({
  container: {
    backgroundColor: "#252736",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    height: "100%"
  },
  bloodTrackingHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem"
  },
  
})

const BloodTracking = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.bloodTrackingHeader}>
        <div>
          <h3>Blood Tracking</h3>
          <p>Orthopedic doctors</p>
        </div>
        <div>
          {/* <Select /> */}
        </div>
      </div>
      <BloodTrackingGrid />

      <div className={styles.legend}>
        <Legend color={theme.text.primary}>Cholesterol levels</Legend>
        <Legend color={theme.background.accent2}>Iron levels</Legend>
        <Legend color={theme.background.accent}>Sugar levels</Legend>
        <Legend color={theme.text.primary}>Heart Rate</Legend>
      </div>
    </div>
  )
}

export default BloodTracking