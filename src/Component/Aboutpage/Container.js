import React from "react";
import "./About.css";

const Container = () => {
  return (
    <>
      <div
        className="path"
        style={{ padding: "2rem", height: "25%", backgroundColor: "black" }}
      >
        <div className="path-container">
          <h2 style={{ fontSize: "12px", color: "white" }}>
            {" "}
            SIBILIZE / About Us{" "}
          </h2>
        </div>
        <div
          className="path-container2"
          style={{ textAlign: "center", marginTop: "2rem" }}
        >
          <h2 style={{ color: "white", fontSize: "3rem" }}>ABOUT US</h2>
        </div>
        
      </div>
      <div
        className="whyinfo"
        style={{
          height: "30rem ",
          width: "95vw",
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginRight: "6rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem" }}>
            We didn't find it for us,so{" "}
            <span style={{ color: "skyblue" }}>we created it for you</span>{" "}
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
            That's essentially our story in one sentence. Crammed up hostels or
            cooped up PGs - not much of a choice, is it? Thats why we created
            Stanza Living - a place designed by people who've been in your
            shoes. Understand you. And are inspired by you.
          </p>
        </div>
        <div>
          <img
            className="ip "
            style={{ width: "30vw", height: "50vh" }}
            src="img.png"
            alt="..."
          ></img>
          
        </div>
      </div>

      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div>
          <img
            className="ip "
            style={{ width: "25rem", height: "28rem", marginTop: "2rem" }}
            src="pghouse.png"
            alt="..."
          ></img>
        </div>
        <div
        className="mm"
           style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
            marginLeft:"2rem"
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem" }}>
            You needed a place like home, so we{" "}
            <span style={{ color: "skyblue" }}>moved back home</span>
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
            That's essentially our story in one sentence. Crammed up hostels or
            cooped up PGs - not much of a choice, is it? Thats why we created
            Stanza Living - a place designed by people who've been in your
            shoes. Understand you. And are inspired by you.
          </p>
          <hr/>
        </div>
      </div>

      {/* food area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem" }}>
            Don't come expecting
            <span style={{ color: "skyblue" }}> "hostel-PG food"</span>{" "}
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
            Instead, bring along a big appetite for healthy, yummy meals. With
            flavours that have a local touch. And that, at the same time, take
            your taste buds on a journey back home.
          </p>
        </div>
        <div>
          <img
            className="ipf "
            style={{
              width: "25rem",
              height: "28rem",
              marginTop: "2rem",
              marginLeft: "8rem",
            }}
            src="pgfood.png"
            alt="..."
          ></img>
        </div>
      </div>

      {/* chill area */}
      <div
        className="whyinfo"
        style={{
          height: "30rem",
          display: "flex",
          justifyContent: "space-between",
          flex: "1 1 0%",
          padding: "7rem",
          paddingTop: "2rem",
          marginBottom: "8rem",
        }}
      >
        <div>
          <img
            className="ipp "
            style={{
              width: "25rem",
              height: "28rem",
              marginTop: "2rem",
              marginRight: "6rem",
            }}
            src="chillarea.png"
            alt="..."
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "5rem",
          }}
        >
          <h2 className="info" style={{ fontSize: "2.5rem" }}>
            Chill in a<span style={{ color: "skyblue" }}> common area</span>{" "}
            that's anything but common
          </h2>
          <p className="infop" style={{ fontSize: "1.5rem" }}>
            Nope, we don't try to pass off a few plastic chairs and a TV as a
            common area. We've replaced them with sofas, bean bags and
            large-screen TVs. And we've also added gaming zones, fitness centres
            and chillout corners as a bonus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Container;
