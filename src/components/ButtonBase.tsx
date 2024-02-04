import React from 'react'
import MuiButtonBase from '@mui/material/ButtonBase'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  button: {
    padding: ".8rem !important",
    display: 'inline-block !important',
    borderRadius: ({borderRadius}) => `${borderRadius} !important`,
    backgroundColor: ({backgroundColor}) => `${backgroundColor} !important`
  }
})

const ButtonBase = (props) => {
  const styles = useStyles({
    borderRadius: props.borderRadius || "1rem",
    backgroundColor: props.backgroundColor || '#252736'
  });

  return (
    <MuiButtonBase className={styles.button}>
      {props.children}
    </MuiButtonBase>
  )
}

export default ButtonBase