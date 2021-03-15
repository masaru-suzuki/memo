import React, { useState, useEffect } from 'react'
import { TextField } from '@material-ui/core'

const MessageField = ({ name, message, setMessage, initMessage }) => {
  // 日本語変換に対応する。日本語入力で変換が完了したら、isComposingJapaneseをtrueにする
  const [isComposingJapanese, setIsComposingJapanese] = useState(false)

  return (
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      name="name"
      autoFocus
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyDown={(e) => {
        //Enterを押したらfirebaseに登録したい
        //textfieldのmessageを初期化
        //日本語編集完了の時のEnterでは登録しない
        //メッセージを入力していない時のEnterでは登録しない
        /**
         * この書き方もあり
         * const text = e.target.value
         * if(text === ') return
         * if (e.key === 'Enter' && !isComposingJapanese) {
         * ~~~~~~~
         */
        if (e.key === 'Enter' && !isComposingJapanese && message !== '') {
          console.log('push message to firebase')
          initMessage()
          e.preventDefault() //リクエストをキャンセル
        }
      }}
      //日本語変換に対応する
      onCompositionStart={() => {
        setIsComposingJapanese(true)
      }}
      onCompositionEnd={() => {
        setIsComposingJapanese(false)
      }}
    />
  )
}

export default MessageField