import icon1 from '../images/acm.png';
import icon2 from '../images/dronaid.jpeg';
import icon3 from '../images/leanin.jpeg';
import icon4 from '../images/varise.png';
import icon5 from '../images/mist.jpeg';
import icon6 from '../images/tacm.jpeg';
import icon7 from '../images/adg_logo.jpg';
import icon8 from '../images/iste.png';
import icon9 from '../images/Blank.jpeg';
import icon10 from '../images/iste.png';
import icon11 from '../images/ACMW_LOGO.png';

export const workshops = [
  { id: 1, title: "CONVenient-Convolutional Neural Network Workshop", date: "24th January, 2025", time: "5:30 PM - 8:30 PM" , club : "ACM"},
  { id: 2, title: "Fusion 360 Generative Design and PCB Designing", date: "24th January, 2025", time: "5:30 PM - 8:30 PM" , club : "DRONAID"},
  { id: 3, title: "UI/UX Designing", date: "24th January, 2025", time: "5:30 PM - 8:30 PM" , club : "LEANIN"},
  { id: 4, title: "GameCraft: Intro to VR and GameDev", date: "26th January, 2025", time: "2:30 - 5:30 PM", club : "VARISE"},
  { id: 5, title: "HackLinux: Cryptography and Web Exploitation ", date: "27th January, 2025", time: "5:30 - 8:30 PM", club : "MIST"},
  { id: 6, title: "StarTrail: Stargazing and Astrophotography workshop", date: "26th January, 2025", time: "2:30 PM - 5:30 PM", club : "ASTRONOMY"},
  { id: 7, title: "App Development: App Dev and Backend Workshop", date: "28th January, 2025", time: "5:30 - 8:30 PM", club : "ADG"},
  { id: 8, title: "Crafting the Web:  A Beginner's Guide to WebDev", date: "29th January, 2025", time: "5:30 - 8:30 PM", club : "ISTE1"},
  { id: 9, title: "Tech Divide: A Tech Debate competition", date: "30th January, 2025", time: "5:30 - 8:30 PM", club : "BLANK101"},
  { id: 10, title: "CloudQuest: Intro to Cloud Computing with Azure", date: "31st January, 2025", time: "5:30 - 8:30 PM", club : "ISTE2"},
  { id: 11, title: "VisionCraft: Mastering Computer Vision", date: "31st January, 2025", time: "5:30 - 8:30 PM", club : "ACMW"},

];
export const workshopsData = [
  {
    id: 1,
    title: "CONVenient-Convolutional Neural Network Workshop",
    description: "Learn the basics of the building blocks of Computer Vision, the Convolutional Neural Network WITHOUT the worries of prerequisite coding and machine learning knowledge. We'll look into the inner workings with awesome visualizations and clarity you won't find anywhere else! Finally, implement an End to End CNN Project with you own architecture and deploy the project on Flask.",
    slots: [
      { day: "1", date: "24th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "26th January, 2025", time: "10:00 AM - 1:00 PM", location: "AB 3" },
      { day: "3", date: "27th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon1,
    clubInfo: '"The ACM Manipal Chapter is a technical club that hosts events like Codentine (coding contest), Epoch (ML contest), as well as MIT Open and Cryptic Finds in TechTatva. We focus on coding, AI/ML, development, and other technical domains, offering opportunities to learn, grow, and collaborate on impactful projects."',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 2,
    title: "Fusion 360 Generative Design and PCB Designing",
    description: "PCB (Printed Circuit Board) designing involves creating the layout and schematic for electronic circuits, ensuring optimal connectivity between components. It combines electrical engineering principles with design tools to fabricate efficient and reliable circuit boards.",
    slots: [
      { day: "1", date: "24th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "26th January, 2025", time: "2:30 PM - 5:30 PM", location: "AB 3" },
    ],
    clubLogo: icon2,
    clubInfo: "DRONAID - Coming Soon...",
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 3,
    title: "Intro to UI/UX",
    description: "Intro to UI/UX: Designing Wireframes and Prototypes. A beginner-friendly workshop that introduces the essentials of UI/UX design. Learn how to create wireframes and interactive prototypes using Canva, focusing on simplicity, consistency, and accessibility. Perfect for those with no prior experience in design!",
    slots: [
      { day: "1", date: "24th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "26th January, 2025", time: "10:00 AM - 1:00 PM", location: "AB 3" },
      
    ],
    clubLogo: icon3,
    clubInfo: "LEAN IN MANIPAL is a technical club dedicated to innovation and excellence in technology. With a focus on web design, graphic design, frontend development, and content creation, we create impactful digital solutions. Our projects emphasize creativity, collaboration, and technical precision, fostering growth and inspiring innovation within our community.",
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 4,
    title: "GameCraft: Intro to VR and GameDev",
    description: "Dive into the world of VR game development with our interactive workshop on creating a VR Basketball Arcade Game! Learn the essentials of game environment setup, realistic physics, and intuitive player interactions. With hands-on guidance, you'll craft a seamless VR experience from start menus to hoop collisions, all while testing your skills in real-time. Whether you're a gamer, developer, or tech enthusiast, this workshop promises an exciting blend of creativity and innovation. Don't just play—create it!",
    slots: [
      { day: "1", date: "26th January, 2025", time: "2:30 PM - 5:30 PM", location: "AB 3" },
      { day: "2", date: "27th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    
    ],
    clubLogo: icon4,
    clubInfo: "Project V.ARISE- Coming Soon...",
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 5,
    title: "HackLinux: Cryptography and Web Exploitation",
    description: "Unlock the art of cyber warfare! Join our HACKLINUX workshop on Cryptography and Web Exploitation. Master ciphers, launch attacks, wield Burp Suite, and outsmart using SQL injections. Get hands-on and elevate your hacking game!",
    slots: [
      { day: "1", date: "27th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "28th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon5,
    clubInfo: "MIST is a vibrant community of cybersecurity enthusiasts dedicated to exploring ethical hacking, cryptography, and web exploitation. Through workshops, CTFs, and projects, we equip members with the skills to tackle real-world security challenges. Join us to dive into the fascinating world of information security!",
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 6,
    title: "StarTrail: Stargazing and Astrophotography workshop",
    description: "Interested in astrophotography and stargazing? Then here is your opportunity to discover the cosmos like never before with our two-day workshop! Topics like telescope basics and handling, astrophotography techniques especially using smartphones and image stacking will be covered in these sessions along with a mesmerizing stargazing session. Join us to explore and connect with the universe!",
    slots: [
      { day: "1", date: "26th January, 2025", time: "2:30 PM - 5:30 PM", location: "AB 3" },
      { day: "2", date: "28th January, 2025", time: "9:00 PM - 11:30 PM", location: "MIT Athletic Ground" },
    ],
    clubLogo: icon6,
    clubInfo: '"TACM - Ever wondered how captivating images of stars, nebulae, and galaxies are produced? Learn how astronomical data is stacked to create stunning visuals. Join our workshop to understand how basic stacking for stargazing works!"',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 7,
    title: "App Development: App Dev and Backend Workshop",
    description: "Learn App Dev...",
    slots: [
      { day: "1", date: "28th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "29th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon7,
    clubInfo: "ADG mainly known as Apple developers’ group a tech club that is known for conducting hackathons and workshops like App-a-thon (App dev hackathon), iDesign (UI/UX hackathon), App-lab (a Web dev Hackathon). We focus on App, Web, iOS dev, AI/ML, and other technical domains offering various expertise at every single level of your coding journey while you stay in the college.",
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 8,
    title: "Crafting the Web: A Beginner's Guide to WebDev",
    description: '"Crafting the Web: A Beginner\'s Guide to WebDev" is an introductory guide to building websites, covering HTML, CSS, and JavaScript basics. It empowers beginners to create modern, responsive, and interactive web experiences.',
    slots: [
      { day: "1", date: "29th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "30th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon8,
    clubInfo: '"The ISTE Student Chapter, Manipal, provides students with opportunities to explore domains, enhance skills, and grow professionally. With five specialized domains, including a coding community, ISTE fosters learning through workshops, seminars, and hands-on experiences."',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 9,
    title: "Tech Divide: A Tech Debate Competition",
    description: "Engage in the interesting Tech-Based Debates.",
    slots: [
      { day: "1", date: "30th January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3, 305" },
    ],
    clubLogo: icon9,
    clubInfo: '"Welcome to MIT\'s official Public Speaking Club, Blank101, the center of eloquence, where words take flight and voices ring out with assurance. We\'re not just a club; we\'re a thriving community of individuals who share a passion for making an impact. Beyond public speaking, we also delve into the realm of written expression, crafting compelling articles, and thought-provoking pieces that engage and enlighten."',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 10,
    title: "CloudQuest: Intro to Cloud Computing with Azure",
    description: "CloudQuest introduces the fundamentals of cloud computing, focusing on Microsoft's Azure platform. Learn to deploy, manage, and scale applications in the cloud with hands-on exercises.",
    slots: [
      { day: "1", date: "31st January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "1st February, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon10,
    clubInfo: '"The ISTE Student Chapter fosters learning through workshops, seminars, and hands-on experiences in cloud computing and other technical domains."',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
  {
    id: 11,
    title: "VisionCraft: Mastering Computer Vision",
    description: "VisionCraft introduces participants to OpenCV for image processing and Convolutional Neural Networks (CNNs) for computer vision. Apply learning by creating a hands-on project.",
    slots: [
      { day: "1", date: "31st January, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
      { day: "2", date: "1st February, 2025", time: "5:30 PM - 8:30 PM", location: "AB 3" },
    ],
    clubLogo: icon11,
    clubInfo: '"ACM-W empowers women in computing, exploring fields like AI, machine learning, software development, and data science through workshops, mentorship, and collaborative projects."',
    buttonText: "Go To Workshop Page",
    navigateTo: "/Workshop",
  },
];


