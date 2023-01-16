import { io } from 'socket.io-client'
import './App.css';
import cors from 'cors'
import axios from 'axios'
import { useState, useEffect } from 'react'


const socket = io('localhost:8000')

function App() {
  const [msg, setMsg] = useState('')

  const handleChange = (e) => {
    setMsg(e.target.value)
  }


  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('my_event', msg)
  }

  // const getPls = () => {
  //   axios.get('http://localhost:8000')
  //   .then((response) => {(console.log(response))})
  // }

  // useEffect(() => {
  //   getPls()
  // }, []) 

  return (
    <div className="App">
      <form onSubmit={sendMessage}>
      <input 
        type='text'
        onChange={handleChange} placeholder="Message.." />
      <input type="submit" />
      {/* <button onClick={sendMessage}> Send Message</button> */}
      </form>
    </div>
  );
}

export default App;
