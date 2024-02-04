import React from 'react'
import MuiButton from '@mui/material/Button'
import { createUseStyles } from 'react-jss'
import theme from '../constants/theme'


const useStyles = createUseStyles({
  button: {
    textTransform: "none !important",
    borderRadius: "100vh !important",
    backgroundColor: `${theme.background.accent} !important`,
    fontFamily: 'NunitoMedium, system-ui, Avenir, Helvetica, Arial, sans-serif !important',
    fontSize: "1.025rem !important",
    padding: ".8rem .8rem !important"
  }
})

const Button = (props) => {
  const styles = useStyles();
  return (
    <MuiButton variant='contained' className={styles.button}>
      {props.children}
    </MuiButton>
  )
}

export default Button