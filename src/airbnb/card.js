import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Card({img, openSpots, rating,soldout, online, reviewCount, location, title, price}){
        
// let status 
// if (openspots === 0) 
// {
//     status = 'SOLD OUT'
// }
// else if (location === "Online")
// {
//     status = 'ONLINE'
// }
// this is an option to displaying various options under conditional rendering

return ( <div>
<div className='imagestogether'>
<div className='oneflex'>
{/* {status && <p className= 'soldout' >{status}</p>} */}
{openSpots === 0 && <p className= 'soldout' >{soldout}</p>}
{openSpots === 27 && <p className= 'online' >{online}</p>}
<img className= 'one' src={img} width="" alt="" />
{/* <img className= {photo} src={img} width="" alt="" />  */}
<div className='star-flex'>
<div className='faStar'>
<FaStar size={20} color='red'/>
</div>    
<p className='font-semibold text-xl tracking-wide'>{rating} <span className='text-gray-400 font-semibold'>{reviewCount} · {location} </span> </p>
</div>
{/* Title */}
<p className="title">{title}<br/>
<span className="font-bold">From ${price}</span>/ person</p>
</div>
</div>
</div>
)}

//set classname green if status = online
//if(status == "online")
// {
//     div.className = "green";
// }

//div.className = (status == "online") ? green : status
// classname ? green : status = online 

{/* <div className='twoflex'>
<p className='online'>online</p>
<img className='two' src={wed} width="" alt="" />
<div className='star-flex-two'>
<div className='faStar'>
<FaStar size={20} color='red'/>
</div>
<p className='font-semibold text-xl tracking-wide'>5.0 <span className='text-gray-400 font-semibold'> · USA</span> </p>
</div>
{/* title */}
{/* <p className="title-two"> <br/>
<span className="font-bold">From </span>/ person</p>
</div>


<div className='threeflex'>
<img className='three' src={mountain} width="" alt="" />
<div className='star-flex-three'>
<div className='faStar'>
<FaStar size={20} color='red'/>
</div>
<p className='font-semibold text-xl tracking-wide'>4.8 <span className='text-gray-400 font-semibold'>(2) · USA</span> </p>
</div>
{/* title */}
{/* <p className="title-three"><br/>
<span className="font-bold">From $50</span>/ person</p>
</div>
    // </div> */}