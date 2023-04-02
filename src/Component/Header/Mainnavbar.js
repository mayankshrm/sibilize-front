import React  from 'react'
import './Mainnavbar.css'
import { useNavigate } from "react-router-dom";
const Mainnavbar = () => {
  // const[isMobile, setIsMobile]= useState(false);
  const navigate = useNavigate(""); 
  const gotohome =()=>{
    navigate('/');
  }
  return (
    
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light mr-auto">
 <img src="/sibilize_logo.png" alt="siblize-logo"
      className="header-logo" onClick={gotohome} style={{marginLeft:"3rem"}}/>
     {
      <div className="icons " style={{display:"flex",marginLeft:"10rem", justifyContent:"space-between", width:"17vw" , alignItems:"center"}}>
        <div className="glass hidden_icons" style={{background:"black", color:"white" ,width:"3rem" , height:"3rem",justifyContent:"center",borderRadius:"50%",paddingLeft:"1rem" , paddingTop:".8rem",cursor:"pointer"}}>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      <div className="phone_icon hidden_icons" style={{background:"black", color:"white" ,width:"3rem" , height:"3rem",justifyContent:"center",borderRadius:"50%",paddingLeft:"1rem" , paddingTop:".8rem",cursor:"pointer"}}>
      <i class="fa-solid fa-phone"></i>
      </div>
      
      </div>
      
     }
  
     
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-tar  get="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent" >
    
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active mx-3">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active mx-3">
        <a className="nav-link " href="/About">About</a>
      </li>
      <li className="nav-item active mx-3">
      <a className='nav-link' href='#'>Add property</a>
      </li>
      <li className="nav-item active mx-3">
      <a className='nav-link' href="#">Support</a>
      </li>
    
    <li className="nav-item active mx-4">
      <a className='nav-link' href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Mainnavbar