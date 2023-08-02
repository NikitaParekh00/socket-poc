import logo from "./logo.svg";
import "./App.css";

import socketIOClient from "socket.io-client";

const socket = socketIOClient(
  "http://192.168.11.241:4010/session-controller/fleet_events"
);

socket.on("connect", (data) => {
  console.log("fleet_events connected");
});
console.log(socket);
socket.on("feeders_event", (data) => {
  console.log("feeders_event", data);
});
socket.on("robots_event", (data) => {
  console.log("robots_event", data);
});
socket.on("connect_error", (error) => {
  console.error("Socket connection error:", error);
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
