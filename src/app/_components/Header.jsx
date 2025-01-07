'use client'
import React, { useCallback, useState } from 'react'
import Wrapper from './Wrapper'
import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = useCallback(() => setIsMenuOpen(prev => !prev), [])
    const menuClick = useCallback(() => {
        setIsMenuOpen(false)
    }, [])
    return (
        <header className='w-full bg-white text-black  py-3 border-b border-gray-300  sticky top-0 left-0 right-0 z-50 '>
            <section className='max-w-screen-xl  mx-auto py-2 lg:px-0 px-8'>
                <div className='flex justify-between items-center'>

                    <nav className='lg:flex hidden'>
                        <ul className='flex  text-lg gap-5'>
                            <Link href="/" className='hover:text-[var(--maincolor)]' ><li>Home </li></Link>
                            <Link href="/resume" className='hover:text-[var(--maincolor)]' ><li>Resume </li></Link>
                            <Link href="/research-paper" className='hover:text-[var(--maincolor)]' ><li>Research Paper</li></Link>
                            <Link href="/published-case-study" className='hover:text-[var(--maincolor)]' ><li>Published Case Study</li></Link>
                            <Link href="/society-work" className='hover:text-[var(--maincolor)]' ><li>Society Work </li></Link>
                            <Link href="/internship" className='hover:text-[var(--maincolor)]' ><li>Internship</li></Link>
                            <Link href="/contact" className='hover:text-[var(--maincolor)] ' ><li>Contact </li></Link>
                        </ul>
                    </nav>

                    {/* Mobile navbar */}
                    <nav className='lg:hidden'>
                        <button onClick={handleClick}>{isMenuOpen ? <RxCross2 size={35} /> : <RxHamburgerMenu size={35} />}</button>
                    </nav>
                    <div className='flex gap-3'>
                        <FaLinkedinIn color='#0077B5' size={22} />
                        <LuMail color='#D44638' size={22} />
                        <FaXTwitter color='black' size={22} />
                        <FaInstagram color='#cd486b' size={22} />
                        <FaFacebook color='#1877F2' size={22} />
                    </div>
                </div>
            </section>
            {isMenuOpen && (
                <div className='absolute w-full text-gray-900  bg-white'>
                    <Wrapper className='py-4'>
                        <ul className='flex flex-col text-lg gap-5'>
                            <Link href="/" ><li>Home </li></Link>
                            <Link onClick={menuClick} href="/resume"  ><li>Resume </li></Link>
                            <Link onClick={menuClick} href="/research-paper"  ><li>Research Paper</li></Link>
                            <Link onClick={menuClick} href="/published-case-study" ><li>Published Case Study</li></Link>
                            <Link onClick={menuClick} href="/society-work"  ><li>Society Work </li></Link>
                            <Link onClick={menuClick} href="/internship"  ><li>Internship</li></Link>
                            <Link onClick={menuClick} href="/contact"  ><li>Contact </li></Link>
                        </ul>
                    </Wrapper>
                </div>


            )
            }
        </header>
    )
}