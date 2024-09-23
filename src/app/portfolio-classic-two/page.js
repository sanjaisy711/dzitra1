"use client"
import React from "react"
import Link from "next/link"

import Navbar from "../componets/Navbar/navbar";
import Switcher from "../componets/switcher";
import Footer from "../componets/Footer/footer";
import PortfolioClassicFilter from "../componets/portfolioClassicFilter";
import { MdKeyboardArrowRight } from "react-icons/md";


export default function Page() {
    return (
        <>
            <Navbar navClass="nav-light" />
            <section className="relative table w-full py-32 lg:py-40  bg-no-repeat bg-center bg-cover" style={{backgroundImage:"url('/images/portfolio/bg-inner.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-3 text-3xl leading-normal font-medium text-white">Portfolio & Works</h3>

                        <p className="text-slate-300 text-lg max-w-xl mx-auto">Showcase of Our Awesome Works in Two Columns</p>
                    </div>
                </div>

                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-flex mx-auto space-x-1">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="/">Dzitra</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white"><Link href="#">Portfolio</Link></li>
                        <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180"><MdKeyboardArrowRight className="text-xl"/></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white" aria-current="page">Classic</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <PortfolioClassicFilter className="grid lg:w-3/4 mx-auto lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 mt-4 gap-[30px]"/>
            <Footer />
            <Switcher/>
        </>
    )
}