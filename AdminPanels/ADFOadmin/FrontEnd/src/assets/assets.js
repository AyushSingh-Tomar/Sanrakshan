// Here you have to put all images and icons you use so that use can export it in a cleaner manner

//ex -->
// import <any name of your choice> from <comparative address/ link of your image(png,jpeg ,etc...)>
import logo from './logo.png';
import search_icon from './search_icon.png';
import phone from './phone.png';
import mail from './mail.png';
import complaint from './complaint.png';
import heroimg from './fireHomepage.jpg';
import besafe from './besafe.jpg';
import guideline from './guideline.jpg';

import Db_mall from "./Db_mall.png";
import hospital from "./hospital.jpg";
import commercial_building from "./commercial_bilding.png";
import residential_building from "./residential_building.png";
import fire_sprinkler from "./fire_sprinkler.jpg";
import lpg from "./lpg.png";
import voc from "./voc.png";
import gas_detector from "./gas_detector.jpg";

// below here you will put all these images in form of an object to export, keep this export at the end , do not form copy of it.

export const assets ={
    //ex-> MyImage,
    logo,
    search_icon,
    phone,
    mail,
    complaint,
    heroimg,
    besafe,
    guideline,

    Db_mall,
    hospital,
    commercial_building,
    residential_building,
    fire_sprinkler,
    lpg,
    voc,
    gas_detector,
    // if you add your variable at last , then no need to add a comma but add comma at the end of upper variable.
} 

// this is Inspector List
export const checkList =[
   {name:"Aadhar card", 
    Description: "You have to.....",
    CheckMark: false},
   {name:"Aadhar card", 
    Description: "You have to.....",
    CheckMark: false},
   {name:"Aadhar card", 
    Description: "You have to.....",
    CheckMark: false}
]

export const UserList =[
    {name:"Praful Joshi", 
     Reference_Id: "678yuh",
     CheckMark: "Under Procedure"},
    {name:"Aanand kumar", 
     Reference_Id: "650lol",
     CheckMark: "Under Procedure"},
    {name:"Smriti Irani", 
    Reference_Id: "pizza234",
     CheckMark: "Under Procedure"}
 ]

export const practiceList =[
    { Description: "You have to.....",
     CheckMark: false},
    { Description: "You have to.....",
     CheckMark: false},
    { Description: "You have to.....",
     CheckMark: false}
 ]