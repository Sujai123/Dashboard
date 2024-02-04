import React from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../constants/theme';
import { generateRandomNumber } from '../constants/utils';

const useStyles = createUseStyles({
  container: {

  },
  marker: {
    display: "inline-block",
    width: ({randomNumber}) => `${randomNumber}rem`,
    aspectRatio: "1",
    background: ({background}) => background,
    borderRadius: "50%",
    boxShadow: ({background}) => `0 0 0 .1rem ${theme.background.primary}, 0 0 0 .2rem ${background}`
  }
})

const Marker = (props) => {
  const randomNumber = generateRandomNumber()
  const styles = useStyles({
    randomNumber,
    ...props
  });
  return (
    <div className={styles.container}>
      <div className={styles.marker}></div>
    </div>
  )
}

export default Marker