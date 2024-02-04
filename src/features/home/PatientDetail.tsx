import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    backgroundColor: "#2e303e",
    padding: "1rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    flex: "1"
  },
  imageContainer: {
    width: "2rem",
    aspectRatio: "1",
    '& > img': {
      aspectRatio: "1",
      borderRadius: ".5rem",
      objectFit: "cover"
    }
  }
})

const PatientDetail = () => {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <h4>11.00 AM</h4>
      <div className={styles.imageContainer}>
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDY3NjAyODl8&ixlib=rb-4.0.3&q=85" alt="" />
      </div>
      <div>
        <h4>Yanto Parcel</h4>
        <p>22 years</p>
      </div>
    </div>
  )
}

export default PatientDetail