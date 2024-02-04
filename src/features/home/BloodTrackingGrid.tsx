import React from 'react'
import { createUseStyles } from 'react-jss';
import Marker from '../../components/Marker';
import Paragraph from '../../components/Paragraph';
import theme from '../../constants/theme';

const useStyles = createUseStyles({
  container: {
    flex: 1,
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gridTemplateRows: "repeat(5, 1fr)",
    gap: ".5rem",
    alignItems: "center",
    justifyItems: "center",

    "& > div": {
      // backgroundColor: "red"
    }
  }
})

const BloodTrackingGrid = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
        {new Array(10).fill(null).map(() => <Marker background={theme.text.primary} />)}
        {new Array(10).fill(null).map(() => <Marker background={theme.background.accent2} />)}
        {new Array(10).fill(null).map(() => <Marker background={theme.background.accent} />)}
        {new Array(10).fill(null).map(() => <Marker background={theme.text.primary} />)}
        {new Array(10).fill(null).map((_, index) => (
          <Paragraph>0{index}:00 AM</Paragraph>
        ))}
    </div>
  )
}

export default BloodTrackingGrid