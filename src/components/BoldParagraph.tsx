import React from 'react'
import { createUseStyles } from 'react-jss'
import Paragraph from './Paragraph'

const useStyles = createUseStyles({
  p: {
    fontWeight: "bold",
    color: "rgba(255, 255, 255, .5)"
  }
})

const BoldParagraph = (props) => {
  const styles = useStyles()
  return (
    <Paragraph variant="bold">{props.children}</Paragraph>
  )
}

export default BoldParagraph