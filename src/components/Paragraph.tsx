import React from 'react'
import { createUseStyles } from 'react-jss'
import theme from '../constants/theme';

const useStyles = createUseStyles({
  p: {
    color: (props) => props.color,
    fontFamily: (props) => props.fontFamily
  }
})

const Paragraph = (props) => {
  const {variant = 'normal', color = theme.text.primary} = props;
  let fontFamily;
  switch(variant){
    case 'normal':
      fontFamily = 'NunitoMedium, system-ui, Avenir, Helvetica, Arial, sans-serif';
      break;
    case 'bold':
      fontFamily = 'NunitoBold, system-ui, Avenir, Helvetica, Arial, sans-serif'
      break;
    case 'light':
      fontFamily = 'NunitoLight, system-ui, Avenir, Helvetica, Arial, sans-serif'
      break;
  }
  const styles = useStyles({fontFamily, color})

  return (
    <p className={styles.p}>{props.children}</p>
  )
}

export default Paragraph;