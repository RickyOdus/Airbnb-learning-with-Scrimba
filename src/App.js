import React from 'react';
import Navbar from './airbnb/navbar';
import Hero from './airbnb/middle';
import Card from './airbnb/card';
import data from './data'
// import Contact from './contact';
// import Map from  './mapping'

export default function App() { 
      const cardContent = data.map (item => {
         return (
            <Card
       key = {item.id}
             {...item}
            //  spread operator  mapped every property in the data.js directly instead 
            // of re reprresenting them one after the other. It removes the previous style 
            // below and cuts short this process
      //  soldout = {item.soldout}
      //  online = {item.online}
      // //  photo = {item.photo}
      //  img= {item.coverImg}
      //  rating = {item.stats.rating}
      //  reviewCount = {item.stats.reviewCount}
      //  location = {item.location}
      //  title = {item.title}
      //  price = {item.price}
      //  openspots = {item.openSpots}
        />
        )
      })

      return (
         <div>
         <Navbar/>
          <Hero/>
          <section className='imagestogether'>
            {cardContent}
            </section>
            </div>
      )
      }
        

       {/* <Card
       status = "soldout"
       action = "SOLDOUT"
       photo = "one"
       img= "../imagez/image12.png" 
       rating = "5.0"
       reviewCount = "(6)"
       country = "USA"
       title = "Life lessons with Kate Zaferes"
       price = "$136"
       />
       <Card
       status = "online"
       img= "../imagez/wedding-photography 1.png"
       action = "ONLINE"
       photo = "two"
        rating = "5.0"
       reviewCount = "(30)"
       country = "Nigeria"
       title = "Learn wedding photography"
       price = "$125"
       />
       <Card
       img= "../imagez/mountain-bike 1.png"
       photo = "three"
        rating = "4.8"
       reviewCount = "(2)"
       country = "China"
       title = "Group Mountain Bikini"
       price = "$50"
       />
      </div> 
      </div>   )
} */}
       

       
    {/* <div className="side-a">  */}
      {/* <Contact */}
   {/* //     img ="../images/mr-whiskerson.png"
   //     name = "Mr. Whiskerson"
   //     phone = "(212) 555-1234"
   //     email = "mr.whiskaz@catnap.meow"
   //  />
   //  <Contact */}
   {/* //      img ="../images/fluffykins.png"
   //      name = "Fluffykins"
   //      phone = "(212) 555-2345"
   //      email = "fluff@me.com"/>
   //      </div> */}

   {/* //      <div className="side-b"> 
   //  <Contact */}
   {/* //        img ="../images/felix.png"
   //        name = "Felix"
   //        phone = "(212) 555-4567"
   //        email = "thecat@hotmail.com"/>
   // <Contact */}
   {/* //        img ="../images/pumpkin.png"
   //        name = "Pumpkin"
   //        phone = "(0800) CAT KING"
   //        email = "pumpkin@scrimba.com"/>
   //   </div> */}