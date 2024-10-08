"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const AvailableProject = dynamic(()=>import('./availaleProject'));

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {MdKeyboardArrowRight,MdOutlineKeyboardArrowLeft} from "react-icons/md"

import { portfolioOne } from '../Data/data';
import { portfolioOneImage } from '../Data/data';

export default function PortfolioCreativeFilter(props) {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isOpen, setisOpen] = useState(false);
    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioOneImage.length - 1) % portfolioOneImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioOneImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setisOpen(true);
    };
    const currentImage = portfolioOneImage[currentImageIndex];

  
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioOne.filter((item) => item.category === selectedCategory)
        : portfolioOne;

   
    return (
        <section className="relative md:py-24 py-16">
            {props.containerClass === true ? <div className="container-fluid relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-creative filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Brandin</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                        {
                                    filteredData.map((data, index) => {
                                        return (
                                            <div className=" picture-item" data-groups='["branding"]' key={index}>
                                                <div className="group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out">
                                                    <div className="relative bg-indigo-600 overflow-hidden rounded-md">
                                                        <Link href="#" onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-700 ease-in-out group-hover:p-[10px] tobii-zoom" title="">
                                                            <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="content transition-all duration-700 ease-in-out">
                                                        <div className="bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 start-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100">
                                                            <Link href="/portfolio-detail-one" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                            <p className="text-slate-400 mb-0">Abstract</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            {isOpen && (
                                <Lightbox
                                    mainSrc={currentImage}
                                    prevSrc={portfolioOneImage[(currentImageIndex + portfolioOneImage.length - 1) % portfolioOneImage.length]}
                                    nextSrc={portfolioOneImage[(currentImageIndex + 1) % portfolioOneImage.length]}

                                    onCloseRequest={() => setisOpen(false)}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div className="md:col-span-12 text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="mb-0 list-none container-filter-border-bottom filter-options flex mx-auto justify-center">
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> : <div className="container relative">
                        <div className="grid grid-cols-1 items-center gap-[30px]">
                            <div className="filters-group-wrap text-center">
                                <div className="filters-group">
                                    <ul className="mb-0 list-none container-creative filter-options">
                                        <li className={`${selectedCategory === null ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                        <li className={`${selectedCategory === 'branding' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="branding" onClick={() => matchCategory('branding')} >Branding</li>
                                        <li className={`${selectedCategory === 'designing' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                        <li className={`${selectedCategory === 'photography' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                        <li className={`${selectedCategory === 'development' ? 'active' : ''} inline-block font-medium text-lg mx-2 mb-3 cursor-pointer relative text-slate-400 transition duration-500`} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={props.className}>
                                {
                                    filteredData.map((data, index) => {
                                        return (
                                            <div className=" picture-item" data-groups='["branding"]' key={index}>
                                                <div className="group relative block overflow-hidden rounded-md transition-all duration-700 ease-in-out">
                                                    <div className="relative bg-indigo-600 overflow-hidden rounded-md">
                                                        <Link href="#" onClick={() => handleImageClick(data.id)} className="lightbox transition-all duration-700 ease-in-out group-hover:p-[10px] tobii-zoom" title="">
                                                            <Image src={data.image} width={0} height={0} sizes='100vw' style={{width:"100%", height:"auto"}} className="rounded-md" alt=""/>
                                                        </Link>
                                                    </div>
                                                    <div className="content transition-all duration-700 ease-in-out">
                                                        <div className="bg-white dark:bg-slate-900 p-3 rounded-md absolute z-10 bottom-5 start-5 transition-all duration-700 ease-in-out scale-0 group-hover:scale-100">
                                                            <Link href="/portfolio-detail-one" className="h6 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out">Mockup Collection</Link>
                                                            <p className="text-slate-400 mb-0">Abstract</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            {isOpen && (
                                <Lightbox
                                    mainSrc={currentImage}
                                    prevSrc={portfolioOneImage[(currentImageIndex + portfolioOneImage.length - 1) % portfolioOneImage.length]}
                                    nextSrc={portfolioOneImage[(currentImageIndex + 1) % portfolioOneImage.length]}

                                    onCloseRequest={() => setisOpen(false)}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}
                        </div>
                        <div className="grid md:grid-cols-12 grid-cols-1 mt-8">
                            <div className="md:col-span-12 text-center">
                                <nav aria-label="Page navigation example">
                                    <ul className="mb-0 list-none container-filter-border-bottom filter-options flex mx-auto justify-center">
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-s-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdOutlineKeyboardArrowLeft className="text-[20px] rtl:rotate-180 rtl:-mt-1"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">1</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">2</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" aria-current="page" className="z-10 size-[40px] inline-flex justify-center items-center text-white bg-indigo-600 border border-indigo-600">3</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">4</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">5</Link>
                                        </li>
                                        <li>
                                            <Link href="/#" className="size-[40px] inline-flex justify-center items-center text-slate-400 bg-white dark:bg-slate-900 rounded-e-lg hover:text-white border border-gray-100 dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600">
                                                <MdKeyboardArrowRight className="text-xl rtl:rotate-180 rtl:-mt-1" />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div> }
             
           <AvailableProject/>
        </section>


    )
}
