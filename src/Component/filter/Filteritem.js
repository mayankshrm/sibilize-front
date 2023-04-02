import React, {useState,useRef,useEffect} from 'react'
import FilterModal from './FilterModal';

import './Filters.css'
import Responsive from './Responsive';


const Filteritem = () => {
  const ref = useRef();
  const [gender, setGender] = useState('');
  
  const[bud , updatebud] = useState(false); 
  const[occ , updateoccu] = useState(false); 
  const [gen, updategen] = useState(false);
  const[Amen, updateAmen] = useState(false);
  const[sort, updatesort] = useState(false);
  useEffect(() => {
   const clickOutside =(e)=>{
    if((bud && ref.current && !ref.current.contains(e.target) )|| (occ && ref.current && !ref.current.contains(e.target))
    || (gen && ref.current && !ref.current.contains(e.target) )|| (Amen && ref.current && !ref.current.contains(e.target))
    || (sort && ref.current && !ref.current.contains(e.target)) ){
      updatebud(false);
      updateoccu(false);
      updategen(false);
      updateAmen(false);
      updatesort(false)
    }
   };
   document.addEventListener('click',clickOutside);
    return () => {
        document.removeEventListener('click',clickOutside);
    };
  }, [bud,occ, Amen, sort, gen]);
  const handleChange = (event) => {
    setGender(event.target.value)
  }
  const resetRadioState = () => {
    setGender('');
  }


  const occupan =()=>{

    updateoccu(!occ);
    if(bud) updatebud(!bud);  
    if(gen) updategen(!gen); 
    if(Amen) updateAmen(!Amen); 
    if (sort) updatesort(!sort)
  }
const budjet =()=>{
  updatebud(!bud);
  if(occ) updateoccu(!occ);  
    if(gen) updategen(!gen); 
    if(Amen) updateAmen(!Amen); 
    if (sort) updatesort(!sort);
}
  const gend =()=>{
    updategen(!gen);
    if(bud) updateoccu(!bud);  
    if(occ) updateoccu(!occ); 
    if(Amen) updateAmen(!Amen); 
    if (sort) updatesort(!sort)
  }
  const Ameni =()=>{
    updateAmen(!Amen); 
    if(bud) updateoccu(!bud);  
    if(occ) updateoccu(!occ); 
    if(gen) updategen(!gen); 
    if (sort) updatesort(!sort)
  }
  const sortby=()=>{
    updatesort(!sort);
    if(bud) updateoccu(!bud);  
    if(occ) updateoccu(!occ); 
    if(gen) updategen(!gen); 
    if (Amen) updateAmen(!Amen)

  }
  return (
    <>
      
      <div className="filters hidden_filter" ref={ref} style={{marginTop:"2rem"}}>

        <div className="filter_button_1 filter_items" onClick={budjet}>
              <div className="budget filter_item" >Budget</div>
          
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
        {
            bud && 
                 <div className="wrapper">
      <header>
        <h2>Price Range</h2>
        <p>Use slider or enter min and max price</p>
      </header>
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
      </div>
      <div class="slider">
        <div class="progress"></div>
      </div>
      <div class="range-input">
        <input type="range" class="range-min" min="0" max="10000" value="2500" step="100" />
        <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" />
      </div>
    </div>
           
          
        }
        <div className="filter_button_2 filter_items" onClick={occupan}>
              <div className="Occupancy filter_item">Occupancy</div>
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
              {
                
               occ &&  <div className="occupancy">
                <div className="occupancy_button">
                <div className="single">Single Occupancy</div>
                <div className="single">Double Occupancy</div>
                <div className="single">Tripl Occupancy</div>
                <div className="single">quadraple Occupancy</div>
                <div className="single">quintuple Occupancy</div>
                <div className="single">Dorm Occupancy</div>
                </div>
                <br />
                <div className="button_occupancy">
                  <button className='btn' style={{background:"white",color:"black"}}>clear</button>
                  <button className='btn' style={{background:"white",color:"black"}}>save</button>
                </div>
                
               </div>
               
              }
        <div className="filter_button_3 filter_items" onClick={gend}>
              <div className="Gender filter_item">Gender</div>
              
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
              </div>
              {
                  gen && <div className="gen_container">
                        <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio"name="inlineRadioOptions"  id="inlineRadio1" value="male" 
  checked={gender === 'male'}  onChange={handleChange}/>
  <label class="form-check-label" for="inlineRadio1">Male</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="female"
  checked={gender === 'female'} onChange={handleChange}/>
  <label class="form-check-label" for="inlineRadio2">Female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="transgender" 
 checked={gender === 'transgender'}  onChange={handleChange}/>
  <label class="form-check-label" for="inlineRadio3">Unisex</label>
</div>

  <div className="button_occupancy gen_button">
                  <button className='btn' style={{background:"white",color:"black"}}  onClick={resetRadioState}>clear</button>
                  <button className='btn' style={{background:"white",color:"black"}}>save</button>
                </div>
                  </div>
              }
          
        <div className="filter_button_4 filter_items" onClick={Ameni}>
              <div className="Amenities filter_item">Amenities</div>
          
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
        {
      Amen && <div className="Amen_container">
                  <div class="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio1" value="Attached Balcony" 
    />
  <label className="form-check-label" for="inlineRadio1">Attached Balcony</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio2" value="option2" 
    />
  <label className="form-check-label" for="inlineRadio2">Air Conditioning</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio3" value="option3" 
     />
  <label className="form-check-label">Attached Washroom</label>
</div>
<div class="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio4" value="option4" 
    />
  <label className="form-check-label" for="inlineRadio4">Storage Self</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio5" value="option5"  
   />
  <label className="form-check-label" for="inlineRadio5">Spacious Cupboard</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio6" value="option6"  
     />
  <label className="form-check-label" for="inlineRadio6">Desert Cooler</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio7" value="option7" 
  />
  <label className="form-check-label" for="inlineRadio7">Shared Washroom</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" type='checkBox'  id="inlineRadio8" value="option8"  
    />
  <label className="form-check-label" for="inlineRadio8">Window</label>
</div>

  <div className="button_occupancy Amen_button">
    
                  <button className='save' style={{color:"black"}}>save</button>
                </div>

      </div>
        }
        <div className="filter_button_5 filter_items"onClick={sortby}>
              <div className="sortBy filter_item" >Sort By :<span className='change' >  Distance</span></div>
          
              <i class="fa-sharp fa-solid fa-sort-down icon" ></i>
        </div>
        {
            sort && <div className="sort_container">
                  <div className='price'>Price : Low to high</div>
                  <div className='price'>Price : high to low</div>
                  <div className='price'>Sort By Distance</div>

            </div>
        }
      </div>
     <div className='FilterMO'>
      <FilterModal  />

     </div>

      
    
    </>
  )
}

export default Filteritem