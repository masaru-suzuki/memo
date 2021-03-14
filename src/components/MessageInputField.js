import React from 'react';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  }
})
const MessageInputField = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p>MessageInputField</p>
      <p>{props.name}</p>
    </div>
  )
}

export default MessageInputField;
