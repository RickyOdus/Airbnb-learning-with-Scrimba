import React from 'react'
import airbnb from "../images/airbnb1.png"
import topimages from "../images/topimages.png"

export default function Navbar(){
    return <div>
        <div className="logo">
    <img src={airbnb} width="120px" alt="" />
        </div>
        <div className='jointimages'>
    <img src={topimages} width="600px" alt="" />
        </div>
    </div>
}