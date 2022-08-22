import "./Section1.css"
import React from "react";
import moment from "moment"

function Section1(props) {
  {/* <div>{props.icon}</div> */}
    return(
        <>
        <div>
              <div className="text location">{props.city} </div>
              <div className="text timedate"> {moment(props.time).format('DD/MM/YYYY HH:mm')}</div>
            </div>
            <div className="otherDetail">
              <div className="text">
                <div>Wind</div>
                <div className="details">{props.wind}km/h</div>
              </div>
              <div className="br1"></div>
              <div className="text">
                <div>Humidity</div>
                <div className="details">{props.humidity}%</div>
              </div>
            </div>
            <img
              className="mainImg"
              src="Resources/3D Weather Icons Pack/3d weather icons/moon/21.png"
              alt=""
            />
        </>
    )
}

export default Section1;