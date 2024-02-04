import React from 'react'
import Heading1 from '../../components/Heading1'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  dateTimeContainer: {
    display: "flex",
    alignItems: "flex-end",
    flex: 1,
    justifyContent: 'space-between'
  },
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "1rem"
  }
})

const Overview = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <Heading1>Daily Health Overview</Heading1>
      <div className={styles.dateTimeContainer}>
        <div>
          <p>Sunday 10, October</p>
          <p>2023</p>
        </div>
        <p>11:00 AM</p>
      </div>
    </div>
  )
}

export default Overview