import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

const navItems = [
  { name: "Home", path: "/#" }, 
  { name: "Team", path: "/#" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const Navmenu = ({ className }) => {
  return (
    <div className={className}>
      {navItems.map((item, index) => (
        <a key={index} className="text-white text-lg uppercase cursor-pointer" href={item.path}>
          {item.name} 
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [IsNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { y: currentScrollY } = useWindowScroll();
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavbarVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavbarVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setlastScrollY(currentScrollY);
  });
  

  return (
    <div
      ref={navContainerRef}
      className="fixed  h-16 w-screen  z-50 transition-all  duration-700  bg-violet-950 rounded-lg px-[15%] "
    >
      <header>
        <nav className="flex items-center justify-between p-4 ">
          <div className="flex  items-center justify-between w-full">
            <img src="/img/logo.png" alt="logo" className="w-11" />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="block md:hidden text-white"
            >
              <img 
                src={isMenuOpen ? "/img/close.svg" : "/img/menu.svg"}
                alt="Menu"
                className="w-8 h-8"
              />
            </button>
          
          </div>

        <Navmenu className="hidden md:flex space-x-8"/>
        {isMenuOpen && (
          <Navmenu className="absolute top-16 left-0 right-0 bg-black text-white flex flex-col items-center py-4 space-y-4 z-40 rounded-lg" />
        )}
       
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
