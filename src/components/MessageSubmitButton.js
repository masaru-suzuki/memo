import * as React from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { pushMessagesToFirebase } from '../firebase'

const MessageSubmitButton = ({name, message, initMessage }) => {

  //ボタンがクリックされたら、情報をfirebaseに登録する
  return(
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      size="small"
      //テキストの入力があればsubmitボタンを押せるようにする
      disabled={message === ''}
      onClick={()=>{
        pushMessagesToFirebase(name,message)
        initMessage()
      }}
    >
      Send
    </Button>
  )
}

export default MessageSubmitButton
