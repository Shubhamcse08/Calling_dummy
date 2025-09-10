import './Part1.css'
import { useLocation } from "react-router-dom";

const Part1 = () => {
    const location = useLocation();
  const contact = location.state; 

  return (
    <div className='container'>
      <div className="status-bar1">
          <span>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
          <span>📶</span>
        </div>
      <span>Calling....</span>
      <div >
        <div className='calling'>{contact?.name}</div>
        <div className='number'>Mobile+91 {contact?.phone}</div>
      </div>
      <div className='big-circle'>{contact?.name[0]}</div>
    </div>
  )
}

export default Part1
