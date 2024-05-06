"use client";
import Link from 'next/link'
const Header = ()=>{
    return (
        <>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/" class="homei text-xl text-black border-0 border-transparent font-normal ">Home</Link></li>
            <li><a class="text-xl text-black border-0 border-transparent font-normal ec">Education and Certifications</a></li>
            <li><a class="text-xl text-black border-0 border-transparent font-normal xp">Experience</a></li>
            <li><a class="text-xl text-black border-0 border-transparent font-normal projects">Projects</a></li>
            <li><a class="text-xl text-black border-0 border-transparent font-normal cr">Contact and Resume</a></li>
            </ul>
            </div>
            <Link href="/" className="ml-8 text-xl font-medium">Rachid Daoudi</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
        <li><Link href='/' class="homei text-xl text-black border-0 border-transparent font-normal ">Home</Link></li>
        <li><Link href='/Education' class="text-xl text-black border-0 border-transparent font-normal ec">Education and Certifications</Link></li>
        <li><Link href='/Experience' class="text-xl text-black border-0 border-transparent font-normal xp">Experience</Link></li>
        <li><Link href='/Projects' class="text-xl text-black border-0 border-transparent font-normal projects">Projects</Link></li>
        <li><Link href='/Contact' class="text-xl text-black border-0 border-transparent font-normal cr">Contact and Resume</Link></li>
        </ul>

        </div>
        </div>
        </>
    )
}


export default Header