import React from 'react'
import { createUseStyles } from 'react-jss'

type NavigationBarPops = {
  data: string[]
}

const useStyles = createUseStyles({
  container: {
    padding: '.8rem 1.6rem',
    display: 'flex',
    backgroundColor: "#252736",
    gap: '1rem',
    borderRadius: "1rem",
  }
})

const NavigationBar = (props: NavigationBarPops) => {
  const {data} = props;
  const styles = useStyles();

  return (
    <div className={styles.container}>
      {data.map(item => (
        <div>{item}</div>
      ))}
    </div>
  )
}

export default NavigationBar