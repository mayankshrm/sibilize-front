import React from "react";
import Cards from "../Card/Cards";
import SimpleMap from "../../UI/Maps/GoogleMaps";
import "./Page.css";
import Mainnavbar from "../../Header/Mainnavbar";
import Navbar from "../../Header/Navbar";
import Footer from "../../footer/down_part";
import Filteritem from "../../filter/Filteritem";



const Page = () => {
  return (
    <>
      <Mainnavbar />
      <Navbar />
      <Filteritem/>
      <div className="Container1">
        <div className="Container2">
          <div className="card">
            <Cards />
          </div>
          <div
            className="Map"
            style={{ position: "sticky", height: "98vh" ,marginBottom:"10px"}}
          >
            <SimpleMap />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Page;
