import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
    fullscreen="true sm-down"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h2 style={{color:"white" , margin:"2rem"}}>Price Range</h2>

      <div class="price-input">
        <div class="field">
          <span>Min</span>
          <input type="number" class="input-min" value="2500" />
        </div>
        <div class="separator">-</div>
        <div class="field">
          <span>Max</span>
          <input type="number" class="input-max" value="7500" />
        </div>
      <div class="slider">
        <div class="progress"></div>
      </div>
      <div class="range-input">
        <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
        <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
      </div>
      </div>
    

      <div className="add_locality" style={{ marginTop:"1rem",marginLeft:"2rem" }}>
      <h2>select Locality</h2>
      <div className="search_box" style={{width:"90vw"}}>
        <input type="text" className='searchText' placeholder='Seach........' style={{width:"maxContent"}} />
         <i class="fa-solid fa-magnifying-glass" style={{fontSize:"1.5rem",marginLeft:"0.4rem"}}></i> 
      </div>
    </div>

     {/* occupancy colomn */}
     <div className="occupancy_button" style={{display:"flex", flexDirection:"column" ,justifyContent:"space-between",marginTop:"1rem",fontSize:"1.5rem",borderStyle:"solid",borderColor:'gray' ,padding:"2rem",height:"500px"}}>
              <div className="btn_1 same_btn"> <a href="">Single Occupancy</a> </div>
              <div className="btn_2 same_btn"><a href="">Double Occupancy</a> </div>
              <div className="btn_3 same_btn"><a href="">Triple Occupancy</a> </div>
              <div className="btn_4 same_btn"><a href="">Quadraple Occupancy</a> </div>
              <div className="btn_5 same_btn"><a href=""> quintuple Occupancy</a></div>
              
            </div>

            {/*gender colomn  */}
            <div class="form-check form-check-inline resp_gen" style={{marginTop:"1rem"}}>
  <input class="form-check-input" type="checkbox"name="inlineRadioOptions"  id="inlineRadio1" value="male"  />
  <label class="form-check-label" for="inlineRadio1 ">Male</label>
</div>
<div class="form-check form-check-inline resp_gen">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="female"
  />
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline resp_gen">
  <input class="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio3" value="transgender" 
 />
  <label class="form-check-label" for="inlineRadio3">Unisex</label>
</div>    



              {/* amenities */}
<div className="ameninties"  style={{borderStyle:"solid",borderColor:"gray" ,marginTop:"2rem"}}>
              <div class="form-check form-check-inline  resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio1" value="Attached Balcony" 
    />
  <label className="form-check-label" for="inlineRadio1">Attached Balcony</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio2" value="option2" 
    />
  <label className="form-check-label" for="inlineRadio2">Air Conditioning</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio3" value="option3" 
     />
  <label className="form-check-label">Attached Washroom</label>
</div>
<div class="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio4" value="option4" 
    />
  <label className="form-check-label" for="inlineRadio4">Storage Self</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio5" value="option5"  
   />
  <label className="form-check-label" for="inlineRadio5">Spacious Cupboard</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio6" value="option6"  
     />
  <label className="form-check-label" for="inlineRadio6">Desert Cooler</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio7" value="option7" 
  />
  <label className="form-check-label" for="inlineRadio7">Shared Washroom</label>
</div>
<div className="form-check form-check-inline resp_amen">
  <input className="form-check-input" type='checkBox'  id="inlineRadio8" value="option8"  
    />
  <label className="form-check-label" for="inlineRadio8">Window</label>
</div>   
</div>
<div className="saveButton" style={{margin:"2rem"}}>
 
</div>
  
            
          
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={props.onHide}>Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function FilterModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="light" onClick={() => setModalShow(true)}>
        Filter
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default FilterModal;
