// Here you have to put all images and icons you use so that use can export it in a cleaner manner

//ex -->
// import <any name of your choice> from <comparative address/ link of your image(png,jpeg ,etc...)>
import logo from './logo.jpg';
import search_icon from './search_icon.png';



// below here you will put all these images in form of an object to export, keep this export at the end , do not form copy of it.

export const assets ={
    //ex-> MyImage,
    logo,
    search_icon
    // if you add your variable at last , then no need to add a comma but add comma at the end of upper variable.
} 

// this is Inspector List
export const CheckList =[
   { Description: "You have to.....",
    CheckMark: false},
   { Description: "You have to.....",
    CheckMark: false},
   { Description: "You have to.....",
    CheckMark: false}
]

export const PracticeList =[
    { Description: "You have to.....",
     CheckMark: false},
    { Description: "You have to.....",
     CheckMark: false},
    { Description: "You have to.....",
     CheckMark: false}
 ]