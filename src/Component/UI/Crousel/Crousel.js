import Carousel from 'react-bootstrap/Carousel';
import "./Crousel.css";

function Crousel() {

  const arr=[1,2,3,5,6,7];
  return (
    
    
    <Carousel>
    {
      arr.map(()=>{
        return (
          
          <Carousel.Item>
        <img
          className="d-block w-100 img"
          src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
          
        )
      })
    }
      
     
    </Carousel>
    
    
  );
}

export default Crousel;