import { io } from 'socket.io-client'
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'


const socket = io('localhost:8000')

function App() {
  const [msg, setMsg] = useState({})
  const [incomingMsg, setIncomingMsg] = useState('')

  const handleChange = (e) => {
    setMsg(e.target.value)
  }


  const sendMessage = (e) => {
    e.preventDefault()
    socket.emit('send_message', {message: msg}, (response) => {
      console.log(response)

    } )
  }

  socket.on('mult', (data, cb) => {
    const result = data.numbers[0] * data.numbers[1]
    cb(result)
  })

  // useEffect(() => {
  //   socket.on('my_response', (message) => {
  //     setIncomingMsg(message.data)
  //     // console.log(message.id)
  //   })
  // }, [socket]) 

  // let hasContent = incomingMsg.length
  // console.log(hasContent)
  return (
    <div className="App">
      <form onSubmit={sendMessage}>
      <input 
        type='text'
        onChange={handleChange} placeholder="Message.." />
      <input type="submit" />
      </form>
      {/* {hasContent > 0 ?
      incomingMsg.map((message) => { */}
        
         {/* <> */}
        {/* <h4>{message.socket.id}</h4> */}
        <h1>{incomingMsg}</h1>
        {/* </>
      )
      }) : null } */}
      
    </div>
  );
}

export default App;
