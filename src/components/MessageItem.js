import React, { useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ListItem,
  ListItemText,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import { gravatarPath } from '../gravatar'

const useStyles = makeStyles(() => ({
  inline: {
    display: 'inline',
  },
}))

const MessageItem = ({ message, name, isLastMessage }) => {
  const classes = useStyles()
  const avatarPath = gravatarPath(name)

  //最後の要素があったら、そこまでスクロールする
  //最後の要素を取得
  const ref = useRef(null)
  //isLastMessageを監視して、値がtrueになった時に発火させる => useEffect
  useEffect(() => {
    if (isLastMessage) {
      // console.log('last message scroll')
      //ここでスクロールする
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLastMessage])

  return (
    <ListItem divider={true} ref={ref}>
      <ListItemAvatar>
        <Avatar src={avatarPath} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            {message}
          </Typography>
        }
      />
    </ListItem>
  )
}

export default MessageItem
