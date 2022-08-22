import React, { useState, useEffect } from "react";
import "./App.css";

import Section1 from "./Components/Section1/Section1"
import Section2 from "./Components/Section2/Section2"
import Section3 from "./Components/Section3/Section3"
// import Search from "./Components/Search/Search"

function App() {
  const [data, setData] = useState(0);
  const [currentConditions, setCurrentConditions] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/alwar?unitGroup=metric&include=days%2Chours%2Calerts%2Ccurrent%2Cevents&key=UT36N2ZZHCQ3BZRNQ2PK3MVQZ&contentType=json`)
      .then((response) => response.json()).then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(`http://worldtimeapi.org/api/ip`)
      .then((response) => response.json().then((time) => setTime(time.datetime)));
  }, []);


  return (
    <div className="App">
      <div className="bg"></div>
      <div className="Main">
        {console.log('data', data)}
        {/* <Search/> */}
        <div className="search">
          <div className="city">Alwar</div>
          <img
            className="searchIcon"
            src="../Resources/search iconn.png"
            alt=""
          />
        </div>

        <div className="display">
          <div className="section1">
            <Section1 city={data?.address} time={time} wind={data?.currentConditions?.windspeed} humidity={data?.currentConditions?.humidity} icon={data?.currentConditions?.icon} />
          </div>
          <div className="section2">
            <Section2 temp={data?.currentConditions?.temp} />
          </div>
          <div className="section3">
            <Section3 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
