import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import onIcon from "./icons/on.svg";
import offIcon from "./icons/off.svg";

function App() {
  const [isMuted, setIsMuted] = useState(false); // State to track mute/unmute
  const toggleMute = () => {
    setIsMuted(!isMuted); // Toggle state
  };

  return (
    <div>
      <img
        src={isMuted ? offIcon : onIcon} // Show the correct icon
        alt="Mute Button"
        onClick={toggleMute} // Handle click
        style={{ cursor: "pointer", width: "50px" }} // Add some styles
      />
    </div>
  )
}

export default App
