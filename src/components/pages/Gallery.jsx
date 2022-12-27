import React from "react"
import classes from "../../styles/pages/Gallery.module.css"
import Lottie from "lottie-react"
import video4 from "../../assets/video4.MOV"
import video3 from "../../assets/video3.MP4"
import photo14 from "../../assets/photo14.jpg"
import photo5 from "../../assets/photo5.jpg"
import photo13 from "../../assets/photo13.jpg"
import video5 from "../../assets/video5.MP4"
import photo16 from "../../assets/photo16.jpg"
import photo17 from "../../assets/photo17.jpg"
import photo18 from "../../assets/photo18.jpg"
import { MAIN_PATH } from "../../consts"
import {Link} from "react-router-dom"
import Santa from '../../assets/ny/christmas-santa-claus.json'
import ColLights from '../../assets/ny/coloured-christmas-lights.json'

export default function Gallery() {
    return (
        <div className={classes.menu}>
            <Link to={MAIN_PATH}><button className={classes.more}>Return</button></Link>
            <Lottie className={classes.lights} loop={true} animationData={Santa} />
            <nav>
                <div className={classes.card}>
                    <img src={photo14} className={classes.hor}/>   
                </div>
                <div className={classes.card}>
                    <video src={video4} controls="controls" autoplay="false" className={classes.vert}/>   
                </div>
                <div className={classes.card}>
                    <img src={photo13} className={classes.hor}/>   
                </div>
            </nav>
            <Lottie className={classes.colLights} loop={true} animationData={ColLights} />
            <nav>
                <div className={classes.card}>
                    <video src={video3} muted="true" controls="controls" autoplay="false" className={classes.vert}/>   
                </div>
                <div className={classes.card}>
                    <img src={photo5} className={classes.vert}/>   
                </div>
                <div className={classes.card}>
                    <img src={photo16} className={classes.vert}/>   
                </div>
            </nav>  
            <Lottie className={classes.colLights} loop={true} animationData={ColLights} />
            <nav>
                <div className={classes.card}>
                    <img src={photo17} className={classes.hor}/>   
                </div>
                <div className={classes.card}>
                    <video src={video5} muted="true" controls="controls" loop="true" autoplay="false" className={classes.vert}/>   
                </div>
                <div className={classes.card}>
                    <img src={photo18} className={classes.vert}/>   
                </div>
            </nav>  
        </div>
    )
}