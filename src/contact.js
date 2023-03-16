import React from "react"

export default function Contact({img, name, phone, email}){
    return ( 
    // {/* <div className="contacts"> */}
    // //  <div className="side-a"> 
    
    <div className="contact-card" >
        <img className="cat" src={img} width="300px"/>
        <h3 className="font-black text-2xl mt-3 mb-3">{name}</h3>
        <div className="info-group">
            <img className="size" src="../images/phone-icon.png" />
            <p className="pl-2 font-semibold">{phone}</p>
        </div>
        <div className="info-group">
            <img className="size" src="../images/mail-icon.png" />
            <p className="pl-2 font-semibold underline">{email}</p>
            </div>
    </div>  
      )
    }
    

// export default function Contact(props){
//     return ( 
//     // {/* <div className="contacts"> */}
//     // //  <div className="side-a"> 
    
//     <div className="contact-card" >
//         <img className="cat" src={props.img} width="300px"/>
//         <h3 className="font-black text-2xl mt-3 mb-3">{props.name}</h3>
//         <div className="info-group">
//             <img className="size" src="../images/phone-icon.png" />
//             <p className="pl-2 font-semibold">{props.phone}</p>
//         </div>
//         <div className="info-group">
//             <img className="size" src="../images/mail-icon.png" />
//             <p className="pl-2 font-semibold underline">{props.email}</p>
//             </div>
//     </div>  
//       )
//     }


{/* <div className="contact-card">
                <img className="cat" src="../images/fluffykins.png"/>
                <h3 className="font-black text-2xl mt-3 mb-3">Fluffykins</h3>
                <div className="info-group">
                    <img className="size" src="../images/phone-icon.png" />
                    <p className="pl-2 font-semibold">(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img className="size" src="../images/mail-icon.png" />
                    <p className="pl-2 font-semibold">fluff@me.com</p>
                </div>
            </div>
            </div> 

           <div className="side-b">    
            <div className="contact-card">
                <img className="cat" src="../images/felix.png"/>
                <h3 className="font-black text-2xl mt-3 mb-3">Felix</h3>
                <div className="info-group">
                    <img className="size" src="../images/phone-icon.png" />
                    <p className="pl-2 font-semibold">(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img className="size" src="../images/mail-icon.png" />
                    <p className="pl-2 font-semibold">thecat@hotmail.com</p>
                </div>
            </div>
            
            <div className="contact-card">
                <img className="cat"  src="../images/pumpkin.png"/>
                <h3 className="font-black text-2xl mt-3 mb-3">Pumpkin</h3>
                <div className="info-group">
                    <img className="size" src="../images/phone-icon.png" />
                    <p className="pl-2 font-semibold">(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img className="size" src="../images/mail-icon.png" />
                    <p className="pl-2 font-semibold">pumpkin@scrimba.com</p>
                </div>
            </div>
            </div> 
        </div>
              */}
