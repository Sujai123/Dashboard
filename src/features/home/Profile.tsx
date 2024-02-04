import React from 'react'
import { createUseStyles } from 'react-jss'
import Paragraph from '../../components/Paragraph';

const useStyles = createUseStyles({
  container: {
    display: "flex",
    alignItems: "center",
    gap: "1rem"
  },
  image: {
    width: "3.5rem",
    aspectRatio: "1",
    '& > img': {
      aspectRatio: "1",
      borderRadius: "50%",
      objectFit: "cover"
    }
  }
})

const Profile = () => {
  const styles= useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.image} >
        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDY3NjAyODl8&ixlib=rb-4.0.3&q=85" alt="" />
      </div>
      <div>
        <Paragraph variant="bold">
          Hi, Sujai
        </Paragraph>
        <p>
          28 Years old
        </p>
      </div>
    </div>
  )
}

export default Profile