import React from 'react'
import { createUseStyles } from 'react-jss'


type HomeLayoutProps = {
  children: React.ReactNode
}

const useStyles = createUseStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1.5fr repeat(3, 1fr)",
    gridTemplateRows: "5rem repeat(5, 12rem)",
    gap: "1rem",
    padding: "1rem 2rem",
    
    '& > div': {
      borderRadius: ".8rem",
    },

    "& > div:nth-of-type(1)": {
      gridColumn: "1 / -1"
    },

    "& > div:nth-of-type(2)": {
      gridRow: "2 / -1"
    },

    "& > div:nth-of-type(6)": {
      gridRow: "3 / 5",
      gridColumn: "2 / 4"
    },

    "& > div:nth-of-type(9)": {
      gridRow: "5 / 7",
      gridColumn: "2 / 5"
    },
  },
  "@media screen and (max-width: 1082px)": {
    container: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "5rem repeat(6, 12rem)",

      "& > div:nth-of-type(1)": {
        // gridRow: "8 / -1",
        // gridColumn: "1 / -1",
        display: "none"
      },
      "& > div:nth-of-type(2)": {
        gridRow: "8 / -1",
        gridColumn: "1 / -1",
        // display: "none"
      },
      "& > div:nth-of-type(3)": {
        gridRow: "2 / 3",
        gridColumn: "1 / 3",
      },
      "& > div:nth-of-type(4)": {
        gridRow: "2 / 3",
        gridColumn: "3 / 4",
      },
      "& > div:nth-of-type(5)": {
        gridRow: "3 / 4",
        gridColumn: "1 / 2",
      },
      "& > div:nth-of-type(6)": {
        gridRow: "4 / 6",
        gridColumn: "1 / -2",
      },
      "& > div:nth-of-type(7)": {
        gridRow: "3 / 4",
        gridColumn: "2 / 3",
      },
      "& > div:nth-of-type(8)": {
        gridRow: "3 / 4",
        gridColumn: "3 / 5",
      },
      "& > div:nth-of-type(9)": {
        gridRow: "6 / 8",
        gridColumn: "1 / -1",
        // backgroundColor: "red !important"
      },
    },
  },
  "@media screen and (max-width: 750px)": {
    container: {
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "5rem repeat(20, 8rem)",

      "& > div:nth-of-type(1)": {
        // gridRow: "16 / 18",
        // gridColumn: "1 / -1",
        display: "none"
      },
      "& > div:nth-of-type(2)": {
        gridRow: "15 / -1",
        gridColumn: "1 / -1",
        // display: "none"
      },
      "& > div:nth-of-type(3)": {
        gridRow: "2 / 3",
        gridColumn: "1 / -1",
      },
      "& > div:nth-of-type(4)": {
        gridRow: "3 / 5",
        gridColumn: "1 / -1",
      },
      "& > div:nth-of-type(5)": {
        gridRow: "5 / 7",
        gridColumn: "1 / -1",
      },
      "& > div:nth-of-type(6)": {
        gridRow: "13 / 15",
        gridColumn: "1 / -1",
        // display: "none"
      },
      "& > div:nth-of-type(7)": {
        gridRow: "7 / 9",
        gridColumn: "1 / -1",
      },
      "& > div:nth-of-type(8)": {
        gridRow: "9 / 11",
        gridColumn: "1 / -1",
      },
      "& > div:nth-of-type(9)": {
        gridRow: "11 / 13",
        gridColumn: "1 / -1",
        // display: "none"
        // backgroundColor: "red !important"
      },
    },
  }
})

const HomeLayout = (props: HomeLayoutProps) => {
  const styles = useStyles();
  const {children} = props;

  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default HomeLayout