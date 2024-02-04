import React from 'react'
import { createUseStyles } from 'react-jss';


const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    fontSize: ".8rem",
    fontFamily: "NunitoLight"
  },
  dot: {
    width: ".5rem",
    height: ".5rem",
    background: ({color}) => color,
    borderRadius: "50%"
  }
})

const Legend = (props) => {
  const styles = useStyles({
    color: props.color
  });
  const {children} = props;
  return (
    <div className={styles.container}>
      <div className={styles.dot} /><p>{children}</p>
    </div>
  )
}

export default Legend