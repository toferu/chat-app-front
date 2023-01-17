import { io } from 'socket.io-client'
import './App.css';
import cors from 'cors'
import axios from 'axios'
import { useState, useEffect } from 'react'


const socket = io('localhost:8000')

function App() {
  const [msg, setMsg] = useState('')
  const [incomingMsg, setIncomingMsg] = useState([])

  const handleChange = (e) => {
    setMsg(e.target.value)
  }


  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('send_message', msg)
  }

  // const getPls = () => {
  //   axios.get('http://localhost:8000')
  //   .then((response) => {(console.log(response))})
  // }

  useEffect(() => {
    socket.on('my_response', (message) => {
      setIncomingMsg(message.data)
    })
  }, [socket]) 

  return (
    <div className="App">
      <form onSubmit={sendMessage}>
      <input 
        type='text'
        onChange={handleChange} placeholder="Message.." />
      <input type="submit" />
      </form>
      <h1>{incomingMsg}</h1>
    </div>
  );
}

export default App;
