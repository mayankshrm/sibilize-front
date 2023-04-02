import { Link } from "react-scroll";
import SimpleMap from "../../UI/Maps/GoogleMaps";
import FoodMenu from "../FoodMenu/FoodMenu";
import "./SmoothScroll.css";

function SmoothScroll() {
  return (
    <>
      <div className="container1">
        <Link
          to="Occupancy"
          
          smooth={false}
          offset={-90}
          duration={1}
          style={{ margin: "10px",cursor:"pointer"}}
          
        >
          Occupancy
        </Link>
        <Link
          to="Amenities"
          
          smooth={false}
          offset={-70}
          duration={1}
          style={{ margin: "10px",cursor:"pointer" }}
        >
          Amenities
        </Link>
        <Link
          to="Details"
          
          smooth={false}
          offset={-70}
          duration={1}
          style={{ margin: "10px" ,cursor:"pointer"}}
        >
          Details
        </Link>
        <Link
          to="Map"
         
          smooth={true}
          offset={-90}
          duration={1}
          style={{ margin: "10px" ,cursor:"pointer" }}
        >
          Locality
        </Link>
      </div>

      <main >
      <div style={{marginLeft:"3rem"}}>
        <div id="Occupancy" style={{ height: "100px" }}>
          <h3>Occupancy</h3>
        </div>
      <div id="Amenities" style={{ height: "100px" }}>
          <h3>Amenities</h3>
        </div>
        <div id="Details" style={{ height: "100px" }}>
          <h3>Details</h3>
        </div>
      </div>
        <div style={{display:"flex",justifyContent:"center" ,backgroundColor:"#ECECEC "}}>
          <div style={{display:"flex",width:"100%"}}>
            <div className="Food" style={{flex:3}}>
              <FoodMenu />
            </div>
            <div className="Map" style={{flex:4,height:"100%",zIndex:"0"}}>
              <SimpleMap />
            </div>
          </div>
        </div>
        
      </main>
    </>
  );
}

export default SmoothScroll;
