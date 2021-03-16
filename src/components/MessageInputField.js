import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Avatar } from '@material-ui/core'
import { gravatarPath } from '../gravatar'
import MessageField from './MessageField'
import MessageSubmitButton from './MessageSubmitButton'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
})
const MessageInputField = ({ name }) => {
  const [message, setMessage] = useState('')
  // console.log(message)
  //ボタンにフォーカスを当てるために該当するelementを取得する
  const inputEl = useRef(null);


  //ボタンを押した時とtextfieldでenterを押した時にtextfieldないのメッセージを初期化する
  const initMessage = () => {
    setMessage('')
    console.log('message clear')
  }

  // console.log(name)
  const classes = useStyles()
  const avatarPath = gravatarPath(name)
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar alt="avatar" src={avatarPath} />
          {/* アバター画像を好きな画像に変更できるようにしたい */}
        </Grid>
        <Grid item xs={10}>
          <MessageField
            name={name}
            message={message}
            setMessage={setMessage}
            initMessage={initMessage}
            inputEl={inputEl}
          />
        </Grid>
        <Grid item xs={1}>
          <MessageSubmitButton
            name={name}
            message={message}
            setMessage={setMessage}
            initMessage={initMessage}
            inputEl={inputEl}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField
