import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
})
const MessageInputField = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={1}>
          <Avatar alt="avatar" src="" />
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
