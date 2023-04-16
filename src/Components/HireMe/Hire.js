import React from 'react'
import {Parallax} from "react-parallax";
import image from  './Images/pic1.jpg';
function Hire() {
  return (
    <>
    <Parallax strength={600} bgImage={image}>

    <div className="content">
        <h1>hello my name is khan</h1>
    </div>
    </Parallax>
    </>
  )
}   

export default Hire;