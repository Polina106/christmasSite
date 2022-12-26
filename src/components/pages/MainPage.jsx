import React from "react"
import classes from "../../styles/pages/MainPage.module.css"
import Lottie from "lottie-react"
import SantaSleigh from '../../assets/ny/santa-sleigh.json'
import Lights from '../../assets/ny/xmas-star.json'
import snow from "../../assets/mainPageImgs/snow2.png"
import elka from "../../assets/photo1.jpg"
import people from "../../assets/photo6.jpg"
import house from "../../assets/photo7.jpg"
import photo9 from "../../assets/photo9.jpg"
import photo10 from "../../assets/photo10.jpg"
import photo11 from "../../assets/photo11.jpg"
import photo12 from "../../assets/photo12.jpg"
import video1 from "../../assets/video1.MOV"
import video2 from "../../assets/video2.mp4"
import Timer from "../Timer"
import { GALLERY_PATH } from "../../consts"
import {Link} from "react-router-dom"


export default function MainPage() {

    return (
        <div>
            <div className={classes.menu}>
                <div>
                    <Lottie className={classes.santaSleigh} loop={true} animationData={SantaSleigh} />
                    <h2 className={classes.kickOff}>Kick Off <br/><b> New Year!</b></h2>
                    <Timer/>
                    {/*<Lottie className={classes.santa} loop={true} animationData={Santa} />*/}
                    <div className={classes.imageWrap}>
                        <img src={snow} className={classes.snow}/>
                    </div>
                </div>
            </div>
            <div className={classes.menu2}>
                <nav>
                    <div className={classes.card}>
                        <video src={video1} controls="controls" autoplay="true" className={classes.vert}/>   
                    </div>
                    <div className={classes.card}>
                        <img src={people} className={classes.hor}/>   
                    </div>
                    <div className={classes.card}>
                        <img src={house} className={classes.vert}/>   
                    </div>
                </nav>
                <Lottie className={classes.lights} loop={true} animationData={Lights} />
                <nav>
                    <div className={classes.card}>
                        <img src={elka} className={classes.vert}/>   
                    </div>
                    <div className={classes.card}>
                        <img src={photo11} className={classes.hor}/>   
                    </div>
                    <div className={classes.card}>
                        <img src={photo9} className={classes.vert}/>   
                    </div>
                </nav>
                <Lottie className={classes.lights2} loop={true} animationData={Lights} />
                <nav>
                    <div className={classes.card}>
                        <img src={photo10} className={classes.hor}/>   
                    </div>
                    <div className={classes.card}>
                        <video src={video2} muted="true" loop="true" controls="controls" autoplay="false" className={classes.vert}/>   
                    </div>
                    <div className={classes.card}>
                        <img src={photo12} className={classes.hor}/>   
                    </div>
                </nav>
                <Link to={GALLERY_PATH}><button className={classes.more}>More</button></Link>
            </div>
        </div>  
    )
}
