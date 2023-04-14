import { useState } from "react";

import "./App.css";
import Battlefield from "./components/battlefield";

function App() {
  const [showSinkMessage, setShowSinkMessage] = useState(false);
  const [showHitMessage, setShowHitMessage] = useState(false);
  return (
    <div className="App">
      <Battlefield />
      {showSinkMessage && <div className="message sink">You sank my ship!</div>}
      {showHitMessage && <div className="message hit">HIT!</div>}
    </div>
  );
}

export default App;
