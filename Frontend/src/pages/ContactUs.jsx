import React from "react";
import Contacts from "./contact";
import Card from "./Card";
import './Card.css';

function ContactUs(){
    return (
        <div>
        <div className="cont1">
          <Card
             key="Suraj Patel"
             name="Suraj Patel"
             phone="Instructor"
             image="image/boss.jpg"
             email="suraj.2023ug2054@iiitranchi.ac.in"
             linkedInLink="https://linkedin.com/in/indranil-saha-8859135"
             instagramLink="khwdbc"
          />
          <Card
             key="Vikram Singh"
             image="images/vikram.jpeg"
             name="Vikram Singh"
             phone="Technical Assistant"
             email="vikram.2023ug2060@iiitranchi.ac.in"
             linkedInLink="https://www.linkedin.com/in/abhilash-chandra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
             instagramLink="jeghcb"
          />
        </div>
        <div className='cont'>
          { Contacts.map((item) => {
            return (
              <Card 
              key ={item.name}
              name = {item.name}
              phone ={item.phone}
              email ={item.email}
              image ={item.image}
              linkedInLink={item.linkedInLink}
              instagramLink={item.instagramLink}
              />
              );
           })}
           
        </div>
        </div>
      );
}

export default ContactUs;