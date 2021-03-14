import React, {useState} from "react";
import Main from "./Main";
import SignIn from "./SignIn";

export default () => {
  const [name, setName] = useState('');
  console.log({name});
  name === '' ? <SignIn setName={setName}/> : <Main name={name}/>;
};
