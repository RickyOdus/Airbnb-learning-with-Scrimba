import React from 'react';
import Navbar from './airbnb/navbar';
import Hero from './airbnb/middle';
import Card from './airbnb/card';

export default function App() { 
   return (
         <div className="body">
      <div>
       <Navbar/>
       <Hero/>
       <Card/>
    </div>
    </div>  
   )
}