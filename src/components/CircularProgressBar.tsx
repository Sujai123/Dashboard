import React from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../constants/theme';


const useStyles = createUseStyles({
  container: {
    width: "8rem",
    height: "4rem",
    backgroundImage: `repeating-conic-gradient(at 50% 100%, ${theme.background.accent} 0deg 5deg, #fff 5deg 10deg)`,
    borderRadius: '8rem 8rem 0 0',
    position: "relative",
  },
  offset: {
    position: "absolute",
    width: "6rem",
    height: "3rem",
    background: theme.background.accent,
    bottom: "0",
    left: "50%",
    borderRadius: '8rem 8rem 0 0',
    transform: "translateX(-50%)"
  }
})

const CircularProgressBar = () => {

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.offset}>

      </div>
    </div>
  )
}

export default CircularProgressBar