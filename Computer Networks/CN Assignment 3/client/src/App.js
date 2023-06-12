import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import {StreamChat} from 'stream-chat'
import {Chat} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import { useState } from "react"
import JoinGame from './components/JoinGame';

function App() {
  const api_key = "xxpq8z5ve96a"
  const cookies = new Cookies()
  const token = cookies.get("token");

  const client = StreamChat.getInstance(api_key)
  const [isAuth, setIsAuth] = useState(false)

  const logOut = () => {
    cookies.remove("token");
    cookies.remove("userID");
    cookies.remove("username");
    client.disconnectUser();
    setIsAuth(false);
  }

  if (token) {
    client.connectUser(
      {
        id: cookies.get("userID"),
        name: cookies.get("username"),
        hashedPassword: cookies.get("hashedPassword")
      }, token
    ).then((user) => {
      setIsAuth(true)
    })
  }


  return (
    <div className="App">
      {isAuth ? (
        <Chat client={client}>
          <JoinGame/>
          <button onClick={logOut}> Log Out </button>
        </Chat>
      ) : (
        <>
          <Login setIsAuth={setIsAuth}/>
          <SignUp setIsAuth={setIsAuth}/>
        </> 
      )}
    </div>
  );
}

export default App;
