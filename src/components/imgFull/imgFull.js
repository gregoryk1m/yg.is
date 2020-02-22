import React from "react";
import "../imgRight/imgRight.css";
import "./imgFull.css";
import "../paragraph/paragraph.css";
import "../../css/normalize.css";
import "../../css/global.css";
import imgFull from "../../pages/phishing/images/fb-messenger.png"; 

export default props => (
    <>
          <figure className="imgFull">
            <img src={imgFull} alt="" className="imgFull__img"/>
            <figcaption className="imgRight__caption">
                <span className="imgRight__number">01</span> Pew Research Center
            </figcaption>
          </figure>
    </>
);  
