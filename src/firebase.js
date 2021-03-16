import firebase from 'firebase'
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCLe5N6y8eek1PNQDv5EUSZtd0OJlNyVMc",
    authDomain: "message-exchange-app.firebaseapp.com",
    projectId: "message-exchange-app",
    storageBucket: "message-exchange-app.appspot.com",
    messagingSenderId: "420096056913",
    appId: "1:420096056913:web:8b4afb7d59f44908486270",
    measurementId: "G-52XCHJ9SVV"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//これでfirebaseのデータベースにアクセスできる
const database = firebase.database();

//保存先の指定（保存名の指定）
const messagesRef = database.ref('messages')

export const pushMessagesToFirebase = (name, text) => {
  messagesRef.push({
    name: name,
    message: text
  })
}
