import React from 'react'

const Carasoul = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{height: "31rem"}}>
    <div className="carousel-item active">
    <img src="/building.png" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}>Come, live the new kind of Living.</h5>
        <p style={{ fontSize: " x-large" }}>Life at a professionally managed accommodation awaits you.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="meal.png" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}>Homely meals that make you miss home a little less.</h5>
        <p style={{ fontSize: " x-large" }}>Prepared by expert chefs who serve nothing less than yum.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="pool.png" className="d-block w-100" alt="..." style={{ height: "31rem"}}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{fontSize:" 3.25rem"}}>Facilities that give local PGs an inferiority complex</h5>
        <p style={{ fontSize: " x-large" }}>Get daily housekeeping, laundry and more at your service.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className='info' style={{ width: "100vw", maxWidth:"100%"}}>
    <div className='info-container' style={{display:"flex", paddingTop:"3.1em" , justifyContent:"space-evenly"}}>
        <div className='coll' style={{display: "flex",
    flexDirection: "column", 
   
    background:" rgb(255, 255, 255)",
    border: "1px solid rgb(239, 239, 239)",
    borderRadius: "1.9em",
    padding: "3.8em 2em 3.2em",
    flex: " 0 0 19em",
    width:" 9em"}}>
   <div className='siblize-num' style={{display:"flex", flexDirection:"column", justifyContent:"flex-start",alignItems:"center"}}>
    <div style={{height: "36px", width:"36px"}} ><i className="far fa-city"></i></div>
    <span style={{fontSize:" -webkit-xxx-large"}}>"24+" Cities</span>
   </div>
        </div>

        <div className='coll' style={{display: "flex",
    flexDirection: "column", 
   
    background:" rgb(255, 255, 255)",
    border: "1px solid rgb(239, 239, 239)",
    borderRadius: "1.9em",
    padding: "3.8em 2em 3.2em",
    flex: " 0 0 19em",
    width:" 9em"}}>
   <div className='siblize-num' style={{display:"flex", flexDirection:"column", justifyContent:"flex-start" ,alignItems:"center"}}>
    <div  ><i class="fas fa-house" style={{height: "36px", width:"36px"}}></i></div>
    <span style={{fontSize:" -webkit-xxx-large"}}>"450+ Residences"</span>
   </div>
        </div>

        <div className='coll' style={{display: "flex",
    flexDirection: "column", 
   
    background:" rgb(255, 255, 255)",
    border: "1px solid rgb(239, 239, 239)",
    borderRadius: "1.9em",
    padding: "3.8em 2em 3.2em",
    flex: " 0 0 19em",
    width:" 9em"}}>
   <div className='siblize-num' style={{display:"flex", flexDirection:"column", justifyContent:"flex-start",alignItems:"center"}}>
    <div style={{height: "36px", width:"36px"}} ><i className="fas fa-bed-alt"></i></div>
    <span style={{fontSize:" -webkit-xxx-large"}}>"1000+ Beds"</span>
   </div>
        </div>
    </div>

</div>
    <div className="text-wrap" style={{height:"maxContent", width:"100%" , backgroundColor: "azure" ,padding: "44px" , textAlign:"center"}}>
        <h2 style={{fontWeight:"bold"}}>Not just four walls and a roof</h2>
        <p>Come over and experience how a place to stay can be so much more</p>

    </div>
    </>
  )
}

export default Carasoul
