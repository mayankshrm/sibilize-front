import React, { useState } from "react";
import {useNavigate } from "react-router-dom";
import "./Home.css"

const Boxes = () => {
const navigate= useNavigate();
  const [searchPg ,setSearchpg]=useState("");
const handleSearch=()=>{
navigate("/pg" ,{state:{searchPg}})
}
 
  return (
    <>

    <input type="text" value={searchPg} onChange={(e)=>setSearchpg(e.target.value)

    }/>
    
    <button onClick={handleSearch}>Search</button>
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
    <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "3rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          
          boxShadow: "12px 12px 2px 1px rgba(8, 8, 11, 0.2)",
             }}
      >

     
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              style={{ height: "22rem", width: "15rem", borderRadius: "20px" }}
              src="building.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                }}
                src="img1.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img2.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div
          className="box-text"
          style={{ paddingLeft: "2rem", paddingTop: "5rem",width:"30vw" }}
        >
          <h3>Start living your best life from day one</h3>
          <p>
            Bring a box full of hopes, dreams, ambitions… and of course, your
            personal belongings. Everything else - furniture, appliances, food -
            has already been taken care of.
          </p>
        </div>
      </div>

      <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "1rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          boxShadow: "-23px 23px 0px 1px rgba(8, 8, 11, 0.2)",
        }}
      >
        <div
          className="box-text"
          style={{ paddingRight: "2rem", paddingTop: "5rem",width:"30vw" }}
        >
          <h3>Step into a room that has room for everything</h3>
          <p>
            Your clothes and bag will not be fighting for space on the same
            chair. At Stanza Living, there's ample room for all your
            possessions. Even a framed photo of your family, for the rare
            occasions you miss home.
          </p>
        </div>
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div >
        <img style={{height: "22rem", width:"15rem",borderRadius:"20px"}} src='building.png' alt=''/>
        </div> */}
          <div style={{ display: "flex", padding: "12px" }}>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                  marginTop: "4rem",
                }}
                src="img.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "22rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img12.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>

      <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "1rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          boxShadow: "12px 12px 2px 1px rgba(8, 8, 11, 0.2)",
        }}
      >
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              style={{ height: "22rem", width: "15rem", borderRadius: "20px" }}
              src="img32.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                }}
                src="img31.png"
                alt=""
              ></img>
            </div>
            {/* <div><img style={{height: "11rem", width:"15rem",borderRadius:"20px"}} src='img32.png' alt=''></img></div> */}
          </div>
        </div>
        <div
          className="box-text"
          style={{ paddingLeft: "2rem", paddingTop: "5rem" ,width:"30vw" }}
        >
          <h3>Take your daily list of chores. And tear it up</h3>
          <p>
            You have better things to do than wash your clothes, clean up your
            room and cook your meals. So our team of pros will do them all for
            you.
          </p>
        </div>
      </div>

      <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "1rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          boxShadow: "-23px 23px 0px 1px rgba(8, 8, 11, 0.2)",
        }}
      >
        <div
          className="box-text"
          style={{ paddingRight: "2rem", paddingTop: "5rem" ,width:"30vw" }}
        >
          <h3>Chill in a common area that's anything but common</h3>
          <p>
            Nope, we don't try to pass off a few plastic chairs and a TV as a
            common area. We've replaced them with sofas, bean bags and
            large-screen TVs. And we've also added gaming zones, fitness centres
            and chillout corners as a bonus.
          </p>
        </div>
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                }}
                src="img42.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img43.png"
                alt=""
              ></img>
            </div>
          </div>
          <div>
            <img
              style={{ height: "22rem", width: "15rem", borderRadius: "20px" }}
              src="img41.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div
        className="box-container"
        style={{
          height: "25rem",
          margin: "15rem",
          marginTop: "1rem",
          marginBottom: "5rem",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "2rem ",
          display: "flex",
          boxShadow: "12px 12px 2px 1px rgba(8, 8, 11, 0.2)",
        }}
      >
        <div
          className="box-img"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              style={{ height: "22rem", width: "15rem", borderRadius: "20px" }}
              src="img51.png"
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "12px",
            }}
          >
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                  paddingBottom: "7px",
                }}
                src="img52.png"
                alt=""
              ></img>
            </div>
            <div>
              <img
                style={{
                  height: "11rem",
                  width: "15rem",
                  borderRadius: "20px",
                }}
                src="img53.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div
          className="box-text"
          style={{ paddingLeft: "2rem", paddingTop: "5rem" ,width:"30vw"}}
        >
          <h3>Don't come expecting "hostel-PG food"</h3>
          <p>
            Instead, bring along a big appetite for healthy, yummy meals. With
            flavours that have a local touch. And that, at the same time, take
            your taste buds on a journey back home.
          </p>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Boxes;
