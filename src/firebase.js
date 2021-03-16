import firebase from 'firebase'

  //import .env fileここで環境変数を読み込む
  const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PRIJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    REACT_APP_FIREBASE_APP_ID,
    REACT_APP_FIREBASE_MEASUREMENT_ID
  } = process.env

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PRIJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_APP_ID,
    measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//これでfirebaseのデータベースにアクセスできる
const database = firebase.database();

//保存先の指定（保存名の指定）
export const messagesRef = database.ref('messages')

export const pushMessagesToFirebase = (name, text) => {
  messagesRef.push({
    name: name,
    message: text
  })
}
