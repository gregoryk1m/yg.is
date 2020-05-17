import React from "react";
import "./more.css";
import "../../css/normalize.css";
import "../../css/global.css";
import { Constants } from "../../constants"
import { Link } from "gatsby"
import Ticker from 'react-ticker'
import defaultHero from "../../images/hero.gif"
import phisherHero from "../../pages/phisher/images/hero.png"; 
import cluseHero from "../../pages/cluse/images/hero.png"; 
import dittoHero from "../../pages/ditto/images/hero.png"; 
import fisqualHero from "../../pages/fisqual/images/hero.png"; 
import trunksHero from "../../pages/trunks/images/hero.png"; 

var images = {
    default: defaultHero,
    phisher: phisherHero,
    cluse: cluseHero,
    ditto: dittoHero,
    fisqual: fisqualHero,
    trunks: trunksHero
}

function buildMoreProjects(projects){
    console.log("projects: " + JSON.stringify(projects));

    var project1 = projects["trunks"];
    var project2 = projects["fisqual"];
    var project3 = projects["phisher"];

    console.log("project 1 is " + JSON.stringify(project1));

    return     <Ticker>
    {({ index }) => (
        <>
        <div className="more__group">
            <Link to="/trunks">
                <figure className="more__item">
                    <img className="more__img" src={images.trunks} alt=""/>
                    <figcaption className="more__title">{project1.heroTitle}</figcaption>
                    <h4 className="more__head">{project1.heroCategory} - {project1.heroYear} - {project1.heroDeliverable}</h4>
                </figure>
            </Link>
        </div>
        </>
        )}
    </Ticker>

}

export default props => (
    <>
        <section className="more">
            {/* <h4 className="more__head">Check Out More</h4> */}
            <div>
               {buildMoreProjects(Constants)}
            </div>
        </section>
    </>
);  
