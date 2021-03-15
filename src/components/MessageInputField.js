import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { gravatarPath } from '../gravatar'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
})
const MessageInputField = ({name}) => {
  console.log(name);
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={1}>
          <Avatar alt="avatar" src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          <input />
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField
