import React, { useEffect } from "react";
import { Data } from "./Food";
import { useState } from "react";
import "./FoodMenu.css";

const FoodMenu = () => {
  const [item, setItem] = useState(Data);

    useEffect(()=>{
      const updateitem = Data.filter((u) => {
        return u.category === "day1";
      });
      setItem(updateitem);
    },[])

  const day1 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day2 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day3 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day4 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day5 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day6 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };

  const day7 = (cat) => {
    const updateitem = Data.filter((u) => {
      return u.category === cat;
    });
    setItem(updateitem);
  };
  return (
    <>
   
    <div className="Food-menu">
        <div className="buttons">
          <button  className="btn1" onClick={() => day1("day1")} >
            day1
          </button>
          <button className="btn1" onClick={() => day2("day2")}>
            day2
          </button>
          <button className="btn1" onClick={() => day3("day3")}>
            day3
          </button>
          <button className="btn1" onClick={() => day4("day4")}>
            day4
          </button>
          <button className="btn1" onClick={() => day5("day5")}>
            day5
          </button>
          <button className="btn1" onClick={() => day6("day6")}>
            day6
          </button>
          <button className="btn1" onClick={() => day7("day7")}>
            day7
          </button>
        </div>
        <div className="Menu">
          <div className="breakFast">
            <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline",marginBottom:"0.5rem"}}>
              <h6>BREAKFAST</h6>
            </div>
            {item
              .filter((u) => u.time.includes("breakfast"))
              .map((a) => {
                return (
                  <div>
                    {a.name.map((optn) => (
                      <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{optn}</div>
                    ))}
                  </div>
                );
              })}
          </div>
          <div className="Lunch">
            <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline" ,marginBottom:"0.5rem"}}>
              <h6>LUNCH</h6>
            </div>
            {item
              .filter((u) => u.time.includes("lunch"))
              .map((a) => {
                return <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{a.name}</div>;
              })}
          </div>
        </div>
        <div className="Snacks">
          <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline",marginBottom:"0.5rem" }}>
            <h6>SNACKS</h6>
          </div>
          {item
            .filter((u) => u.time.includes("snacks"))
            .map((a) => {
              return <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{a.name}</div>;
            })}
        </div>
        <div className="Dinner">
          <div style={{ background:"black",color:"white",padding:"0.1rem",borderRadius:"0.2rem",textDecoration:"underline" ,marginBottom:"0.5rem"}}>
            <h6>DINNER</h6>
          </div>
          {item
            .filter((u) => u.time.includes("dinner"))
            .map((a) => {
              return <div style={{textAlign:"center",borderBottom:"1px solid grey"}}>{a.name}</div>;
            })}
        </div>
      </div>
    
      
    </>
  );
};

export default FoodMenu;
