"use client";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "https://omi.com" },
    { name: "Projects", href: "https://omi.com" },
    { name: "About", href: "https://omi.com" },
    { name: "Contact", href: "https://omi.com" },
  ];

  return (
    <div
      className={`fixed top-0 right-0 h-full transition-all duration-300 ${
        isOpen ? "w-40" : "w-6"
      } bg-zinc-900 text-white flex flex-col justify-center items-center`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="group">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-opacity-80 text-sm font-mono text-black rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: getColor(index),
                clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)",
              }}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Function to generate different colors
const getColor = (index: number) => {
  const colors = [
    "#A3E635", // Green
    "#C4B5FD", // Light Purple
    "#FBBF24", // Orange
    "#F472B6", // Pink
    "#FDE68A", // Yellow
    "#7DD3FC", // Light Blue
    "#F9A8D4", // Light Pink
    "#93C5FD", // Blue
  ];
  return colors[index % colors.length];
};

export default Navbar;
