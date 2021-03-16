import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { messagesRef } from '../firebase'





const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
})
const MessageList = () => {
  const classes = useStyles()
  const [messages, setMessages] = useState()

  useEffect(() => {
    console.log('useEffect')
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on("value", (snapshot) => {
      const messages = snapshot.val();
      //メッセージが一件もない場合の処理
      // console.log(messages)
      if(messages === null) return

      const entries = Object.entries(messages)

      const newMessages = entries.map((entry) => {
        const [key, nameAndMessage]= entry
        return {key, ...nameAndMessage}
      })

      setMessages(newMessages);
    });
  },[])

// // Attach an asynchronous callback to read the data at our posts reference
// messagesRef
// .orderByKey()
// .limitToLast(3)
// .on("value", (snapshot) => {
//   const messages = snapshot.val();
//   //取得した値
// /**
//  * {-MVsQqKh9RvkjUD4pxnD:{
//  * message: "こんにちは"
//  * name: "鈴木大"
//  * __proto__: Object,
//  * }
//  */

//  //構造を変えたい
//  /**
//  * {
//  * key: -MVsQqKh9RvkjUD4pxnD
//  * message: "こんにちは"
//  * name: "鈴木大"
//  * __proto__: Object,
//  * }
//  */
//   const entries = Object.entries(messages)
//   const newMessages = entries.map((entry) => {
//     /**
//      * console.log(entry[0]); //-MVtiWB9oWb5-w_OkFzm
//      * console.log(entry[1]); //{message: "fds", name: "鈴木大"}
//      * これを並列で並べたい => {key: -MVtiWB9oWb5-w_OkFzm, message: "fds", name: "鈴木大"} このように
//      */

//     // entryってなんだっけってなるから定義しておく
//     // const key = entry[0]
//     // const nameAndMessage = entry[1]

//     //これを書き方変えて
//     const [key, nameAndMessage]= entry
//     //{key:key} = {key}で表現される
//     return {key, ...nameAndMessage}
//   })
// console.log(newMessages)
// //messageにデータを格納する
// setMessages(newMessages) //これだけだとinfinitrool
// //メッセージが更新された時に一度だけメッセージを取得する => useEffectで第二引数に[]


// });


  return <div className={classes.root}>{messagesRef[0]}</div>
}

export default MessageList
