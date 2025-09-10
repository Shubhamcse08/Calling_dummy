import { useState } from "react";
import "./Part3.css";

export default function CallControls() {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  
  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  return (
    <div className="call-container">
      <div className="controls-top">
        <div className="icon-button">
          <div className="icon-circle">
            <img src="/call.png" alt="Keypad" className="icon-img" />
          </div>
          <span className="icon-label">Keypad</span>
        </div>
        
        <div className={`icon-button ${isMuted ? 'active' : ''}`} onClick={toggleMute}>
          <div className="icon-circle">
            <img 
              src={isMuted ? "/mute.png" : "/mic.png"} 
              alt={isMuted ? "Unmute" : "Mute"} 
              className="icon-img" 
            />
          </div>
          <span className="icon-label">{isMuted ? "Unmute" : "Mute"}</span>
        </div>
        
        <div className={`icon-button ${isSpeakerOn ? 'active' : ''}`} onClick={toggleSpeaker}>
          <div className="icon-circle">
            <img 
              src={isSpeakerOn ? "/speaker.png" : "/speaker.png"} 
              alt={isSpeakerOn ? "Speaker On" : "Speaker Off"} 
              className="icon-img" 
            />
          </div>
          <span className="icon-label">Speaker</span>
        </div>
        
        <div className="icon-button">
          <div className="icon-circle">
            <img src="/more.png" alt="More" className="icon-img" />
          </div>
          <span className="icon-label">More</span>
        </div>
      </div>

      <div className="controls-bottom">
        <button className="end-call-button" onClick={() => window.history.back()}>
          <img src="/end.png" alt="End Call" className="end-call-icon" />
        </button>
      </div>
    </div>
  );
}