'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const navLinks = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Blogs",
            path: "/blogs"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Contacts",
            path: "/contact"
        },
    ];
    const handler = () => {
        router.push('/login');
    }
    return (
        <div>
            <nav className="flex items-center justify-evenly bg-red-500 p-5">
                <h4 className='text-3xl'>Next<span className='text-slate-300'>Hero</span></h4>
                <ul className='flex justify-between items-center space-x-3'>
                    {
                        navLinks?.map((link) => <>

                            <li key={link?.path} className={`${pathName === link?.path && 'text-blue-700'}`}>
                                <Link href={link?.path}>{link?.title}</Link>
                            </li>
                        </>
                        )
                    }
                    {/* <li><a href="/">home</a> </li>
                    <li><a href='/contact'>Contact</a></li> */}
                    {/* next js link tag */}
                </ul>
                <button onClick={() => handler()} className='p-2 bg-purple-200 text-pink-700 rounded-3xl'>Login</button>
            </nav>
        </div>
    );
};

export default Navbar;