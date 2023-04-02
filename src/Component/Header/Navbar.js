import React , {useState} from 'react'
import './Navbar.css'

const Navbar = () => {
   
  const [show ,updateShow] = useState(false);
  const[know , updateknow] = useState(false);
  return (
    <>
  
    <div className="max-width navbars">
    <div className="navbar-centerr hidden_container">
        <div className="navbar-center-search-containerr " style={{marginLeft:"3rem"}}> 
            <div className="property-types ">
               
                
                <div className="location-search-bars hidden_container">
                <div className="containers">
                
                <span className="sup">Enter college/office/city/Locality</span>
                <div className="search-icon icon">
                <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                </div>
            </div>
           
            </div>
             

        </div>
    </div>
    <div className="navbar-rightside">
    <div className="knowmoreee" onClick={()=>updateknow(!know)}>
                <span className="knowmore-head" >Know more</span>
                <div className="drop-downs icon" >
                <i className="fa-sharp fa-solid fa-caret-down"></i>
                </div>
                {
                  know && <div className="Active_know_container">
                    <h4> <a href="/about">About us</a></h4>
                    <h4><a href="/about">Our Team</a></h4>
                    <h4><a href="/about">Partner with us</a></h4>
                  </div>
                }
             </div>
             <div className="calls ">
                <div className=" whatsapp-logo">
                <i className="fa-brands fa-whatsapp "></i>
                </div>
                <span className="requests on_right" > Request A Callback</span>
             </div>
    </div>
    
    </div>
    </>
  )
}

export default Navbar
