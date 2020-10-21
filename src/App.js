import React, { useRef, useState } from 'react';
// import './App.css';
import './final.css'

//Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faUser, faCoffee, faPaperPlane, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
library.add(fab, faUser, faCoffee, faPaperPlane, faSignOutAlt);

firebase.initializeApp({
  apiKey: "AIzaSyA-zwGYIfiWLBu5gjQ1ZZq9Iv17A3XEFTg",
  authDomain: "webchat-f8df8.firebaseapp.com",
  databaseURL: "https://webchat-f8df8.firebaseio.com",
  projectId: "webchat-f8df8",
  storageBucket: "webchat-f8df8.appspot.com",
  messagingSenderId: "519649131888",
  appId: "1:519649131888:web:40a26e2582f578a0c4a3b5",
  measurementId: "G-7LWYNXZC1E"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>ReactJS Learning Chat</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}><FontAwesomeIcon icon={['fab', 'google']} /> Sign in with Google</button>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}><FontAwesomeIcon icon="sign-out-alt" /></button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Message" />

      <button className="form-btn" type="submit" disabled={!formValue}><FontAwesomeIcon icon="paper-plane" /></button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;