import React from 'react'
import { FaStar } from 'react-icons/fa'
import image12 from "../images/image12.png"
import wed from "../images/wedding-photography 1.png"
import mountain from "../images/mountain-bike 1.png"



export default function Card(){
    return <div>
<div className='imagestogether'>
<div className='oneflex'>
<p className='soldout'>sold out</p>
<img className='one' src={image12} width="" alt="" />
<div className='star-flex'>
<div className='faStar'>
<FaStar size={20} color='red'/>
</div>    
<p className=' font-semibold text-xl tracking-wide'>5.0 <span className='text-gray-400 font-semibold'>(6) · USA</span> </p>
</div>
{/* Title */}
<p className="title">Life lessons with Kate Zaferes <br/>
<span className="font-bold">From $136</span>/ person</p>
</div>

<div className='twoflex'>
<p className='online'>online</p>
<img className='two' src={wed} width="" alt="" />
<div className='star-flex-two'>
<div className='faStar'>
<FaStar size={20} color='red'/>
</div>
<p className='font-semibold text-xl tracking-wide'>5.0 <span className='text-gray-400 font-semibold'>(30) · USA</span> </p>
</div>
{/* title */}
<p className="title-two">Learn wedding photography <br/>
<span className="font-bold">From $125</span>/ person</p>
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
<p className="title-three">Group Mountain Bikini<br/>
<span className="font-bold">From $50</span>/ person</p>
</div>
    </div>
    </div>
}