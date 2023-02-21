import React from 'react';
import Navbar from './airbnb/navbar';
import Hero from './airbnb/middle';
import Bottom from './airbnb/bottom';

export default function App() { 
   return (
         <div className="body">
      <div>
       <Navbar/>
       <Hero/>
       <Bottom/>
    </div>
    </div>  
   )
}