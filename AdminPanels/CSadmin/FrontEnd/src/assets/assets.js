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
    guideline
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