import React, { useState } from 'react'
import Main from './Main'
import SignIn from './SignIn'
import config from '../config.json'

export default () => {
  const [name, setName] = useState('鈴木大') //仮に鈴木大と入れておく
  // console.log({name});
  if (config.signInEnabled && name === '') {
    //signInの状態も入れる
    return <SignIn setName={setName} />
  } else {
    return <Main name={name} />
  }
}
