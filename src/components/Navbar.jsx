"use client"; // we have interactivity with the navbar buttons

import React, { useState } from "react";
import Link from "next/link";

import NavLink from "../components/NavLink";


const NavLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
]

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 w-full">

            <div className="flex flex-wrap items-center justify-between mx-auto px-8 py-4">
                
                <Link
                    href={"/"} 
                    className="text-2xl md:text-5xl text-white font-semibold"
                    >
                    LOGO
                </Link>

                <div className="menu hidden md:block md:w-auto" id="navbar">

                    <ul className="flex p-4 md:p-0 flex-row md:space-x-8">
                        {
                            NavLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink href={link.path} title={link.title}></NavLink>
                                    </li>
                                )
                            )
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;