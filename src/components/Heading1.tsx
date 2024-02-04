import { makeStyles } from '@mui/material'
import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  h1: {
    fontSize: "2rem"
  }
})

const Heading1 = (props) => {
  const styles = useStyles()
  return (
    <h1 className={styles.h1}>{props.children}</h1>
  )
}

export default Heading1