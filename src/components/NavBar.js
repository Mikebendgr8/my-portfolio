import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" activeclassname="text-white" className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive">
                        Ndubuisi_AndeOrji
                    </NavLink>
                    <NavLink to="/" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        About Me
                    </NavLink>
                    <NavLink to="/services" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        Services
                    </NavLink>
                    <NavLink to="/skills" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        Skills
                    </NavLink>
                    <NavLink to="/project" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        Project
                    </NavLink>
                    <NavLink to="/post" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                            Blog Posts
                    </NavLink>
                    {/*
                        <NavLink to="/post" className={({isActive}) => (isActive ? "text-red-100 bg-red-700" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800")}>
                            Blog Posts
                        </NavLink>
                    */}
                    {/*
                    <NavLink to="/post" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Blog Posts
                    </NavLink>
                    */}
                    <NavLink to="/contact" className={(e) => e.isActive ? "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800" : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                        Contact Me
                    </NavLink>
                </nav>
                <div className="py-3 px-3 my-6 inline-flex">
                    <SocialIcon url="http://github.com/Ndubuisi-AndeOrji" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://twitter.com/ND_AndeOrji" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    {/*<SocialIcon url="http://whatsapp.com" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>*/}
                    <SocialIcon url="https://web.facebook.com/ndubuisi.andeorji" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="https://www.linkedin.com/in/ndubuisi-andeorji-429991256" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                    <SocialIcon url="http://dribbble.com/Ndubuisi_AndeOrji" className="mr-4" target="_blank" fgColor="#fff" style={{height:35, width: 35}}/>
                </div>
            </div>
        </header>
    )
}