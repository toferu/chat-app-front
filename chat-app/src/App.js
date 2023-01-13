import io from 'socket.io-client'
import './App.css';

const socket = io.connect('http://localhost:3000')

function App() {

  const sendMessage = () => {
    socket.emit()
  }

  return (
    <div className="App">
      <input placeholder="Message.." />
      <button onClick={sendMessage}> Send Message</button>
    </div>
  );
}

export default App;
