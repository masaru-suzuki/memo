import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {ListItem,ListItemText, Typography,ListItemAvatar, Avatar} from '@material-ui/core';
import { gravatarPath } from '../gravatar'

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
}));

const MessageItem = ({ message, name}) => {
    const classes = useStyles();
    const avatarPath = gravatarPath(name)

  return(
    <ListItem divider={true}>
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
