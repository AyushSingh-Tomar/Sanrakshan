import { CardTab } from './Card';
import './Card.css'
const cardData = [
    {
      image: "https://th.bing.com/th/id/OIG4.pOdYT8dEST6y98RBqS7F?w=1024&h=1024&rs=1&pid=ImgDetMain", // replace with actual path from assets
      title: "Clear and Concise Information",
      text: "Provide a detailed overview of NOC requirements, procedures, and necessary documents.",
      items: [
        "Ensure all fire exits are operational",
        "Maintain emergency lighting systems",
        "Conduct regular fire drills"
      ],
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    },
    {
      image:"https://th.bing.com/th/id/OIG4.uOGRkix5s9cvk8eNt2UG?w=1024&h=1024&rs=1&pid=ImgDetMain",
      title: "User Authentication",
      text: "Ensure all safety protocols are in place and followed by the staff.",
      items: [
        "Fire alarms tested",
        "Sprinkler systems functional",
        "Evacuation plan visible"
      ],
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    },
    {
      image: "https://th.bing.com/th/id/OIG2.czQhqudxwm0MyDHBqZG6?pid=ImgGn",
      title: "Easy Form Submission",
      text: "Ensure the building has a detailed and practiced emergency preparedness plan.",
      items: [
        "All staff trained in fire safety",
        "Clear evacuation routes marked",
        "Emergency contact numbers available"
      ],
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    },
    {
      image: "https://th.bing.com/th/id/OIG3.2e0EzttwhwhzLR1liMs_?w=1024&h=1024&rs=1&pid=ImgDetMain",
      title: "Real-time Status Update",
      text: "Keep track of all building operations and inspections with real-time status updates.",
      items: [
        "Live updates on inspection progress",
        "Instant notification of any compliance issues",
        "Continuous monitoring of safety systems"
      ],
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    },
    {
      image: "https://th.bing.com/th/id/OIG4.2_gozoVXcOWNL29Llprr?pid=ImgGn",
      title: "Compliance Checklist",
text: "Ensure that the building adheres to all fire safety and emergency regulations through a comprehensive checklist.",
items: [
  "Proper installation of fire alarms and extinguishers",
  "Adherence to building exit regulations",
  "Regular maintenance of safety equipment"
]
,
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    },
    {
      image: "https://th.bing.com/th/id/OIG2.IclmYerJFpyUtWNUFUq.?pid=ImgGn",
      title: "Emergency Preparedness Plan",
      text: "Ensure that the building has a well-developed and actionable emergency preparedness plan.",
      items: [
        "Regularly conducted emergency drills for staff",
        "Clearly posted evacuation maps and instructions",
        "Availability of first-aid kits and fire safety tools"
      ]
      ,
      links: [
        { href: "#", text: "Card Link" },
        { href: "#", text: "Another Link" }
      ]
    }
  ];

const Rendercard = () => {
    return (
        <div id='card'>
          {cardData.map((card, index) => (
            <CardTab
            id="child"
              key={index}
              image={card.image}
              title={card.title}
              text={card.text}
              items={card.items}
              links={card.links}
            />
          ))}
        </div>
      );
}

export default Rendercard;
