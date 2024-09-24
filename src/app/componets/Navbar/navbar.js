'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import { LuSettings } from 'react-icons/lu';
import { BsCart3 } from 'react-icons/bs';

export default function Navbar(props) {
    let { navClass, navJustify } = props;
    let [isMenu, setisMenu] = useState(false);
    
    let [manu , setManu] = useState('');
    let pathname = usePathname();
    
    useEffect(()=>{
        setManu(pathname)

        function windowScroll() {
            const navbar = document.getElementById("topnav");
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                if (navbar !== null) {
                    navbar?.classList.add("nav-sticky");
                }
            } else {
                if (navbar !== null) {
                    navbar?.classList.remove("nav-sticky");
                }
            }
        }
        window.addEventListener("scroll", windowScroll);
        window.scrollTo(0, 0)
        return () => {
            window.removeEventListener('scroll', windowScroll);
        };

    },[setManu])
    

    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };


    return (
        <nav id="topnav" className={`defaultscroll ${navClass === "nav-light" ? '' : navClass === "nav-sticky" ?
        'bg-white dark:bg-slate-900' : ''}`}>
        <div className="container relative">
            {
                navClass === "nav-light" ?
                    <Link className="logo" href="/index">
                        <span className="inline-block dark:hidden">
                            <Image src='/images/logo-dark.png' className="l-dark" width={138} height={24}  alt="" />
                            <Image src='/images/logo-light.png' className="l-light" width={138} height={24} alt="" />
                        </span>
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
                    :
                    <Link className="logo" href="#">
                        <Image src='/images/logo-dark.png' width={138} height={24} className="inline-block dark:hidden" alt="" />
                        <Image src='/images/logo-light.png' width={138} height={24} className="hidden dark:inline-block" alt="" />
                    </Link>
            }

            <div className="menu-extras">
                <div className="menu-item">
                    <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>
                </div>
            </div>

            
           
            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className={`navigation-menu ${navClass} ${navJustify}`}>
                    <li className={`${["/index-saas", "/index-classic-saas","/index-modern-saas", "/index-apps","/index-classic-app","/index-ai","/index-smartwatch","/index-marketing","/index-seo","/index-software","/index-payment","/index-charity","/index-it-solution","/index-it-solution-two","/index-digital-agency","/index-restaurent","/index-hosting","/index-nft","/index-hotel","/index-travel","/index-cafe","/index-gym","/index-yoga","/index-spa","/index-job","/index-startup","/index-business","/index-corporate","/index-corporate-two","/index-real-estate","/index-consulting","/index-insurance","/index-construction","/index-law","/index-video","/index-personal","/index-portfolio","/index-photography","/index-studio","/index-coworking","/index-course","/index-event","/index-podcast","/index-hospital","/index-phone-number","/index-forums","/index-shop","/index-crypto","/index-landing-one","/index-landing-two","/index-landing-three","/index-landing-four","/index-service","/index-food-blog","/index-blog","/index-furniture","/index-landing-five","/index-life-coach","/index-landing-six","/index-web-programming","/index-cleaner"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link href="/page-services" >Features</Link>
                    </li>

                    <li className={`${["/page-aboutus", "/page-services","/page-team", "/page-pricing","/page-testimonial","/user-profile","/user-billing","/user-payment","/user-invoice","/user-notification","/user-setting","/property-listing","/property-detail","/course-listing","/course-detail","/nft-explore","/nft-auction","/nft-collection","/nft-creators","/nft-creator-profile","/nft-creator-profile-edit","/nft-wallet","/nft-create-item","/nft-detail","/food-recipe","/shop-grid","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/food-recipe","/shop-grid","/shop-grid-two","/shop-item-detail","/shop-cart","/shop-checkout","/shop-account","/photography-about","/photography-portfolio","/page-job-grid","/page-job-detail","/page-job-apply","/page-job-post","/page-job-career","/page-job-candidates","/page-job-candidate-detail","/page-job-companies","/page-Job-company-detail","/forums-topic","/forums-comments","/helpcenter-overview","/helpcenter-faqs","/helpcenter-guides","/helpcenter-support","/blog","/blog-sidebar","/blog-detail","/blog-standard-post","/blog-slider-post","/blog-gallery-post","/blog-youtube-post","/blog-vimeo-post","/blog-audio-post","/blog-blockquote-post","/blog-left-sidebar-post","/email-confirmation","/email-password-reset","/email-alert","/email-invoice","/auth-login","/auth-signup","/auth-re-password","/auth-lock-screen","/page-terms","/page-privacy","/page-comingsoon","/page-maintenance","/page-error","/page-thankyou","/contact-detail","/contact-one","/contact-two","/page-services","/page-service-detail"].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`}>
                        <Link href="page-pricing">Pricing</Link>
                    </li>

                    <li className={`${["/portfolio-modern-two", "/portfolio-modern-three","/portfolio-modern-four","/portfolio-modern-five","/portfolio-modern-six","/portfolio-classic-two","/portfolio-classic-three","/portfolio-classic-four","/portfolio-classic-five","/portfolio-classic-six","/portfolio-creative-two","/portfolio-creative-three","/portfolio-creative-four","/portfolio-creative-five","/portfolio-creative-six","/portfolio-masonry-two","/portfolio-masonry-three","/portfolio-masonry-four","/portfolio-masonry-five","/portfolio-masonry-six","/portfolio-detail-one","/portfolio-detail-two","/portfolio-detail-three",'/portfolio-detail-four'].includes(manu)? "active" : ""} has-submenu parent-parent-menu-item`} >
                        <Link href="/blog">Blog</Link>
                    </li>

                    <li className={`${["/ui-components", "/documentation","/changelog"].includes(manu)? "active" : ""} has-submenu parent-menu-item`}>
                        <Link href="/page-aboutus">About Us</Link>
                    </li>
                    <li className={manu === "/contact-one" || "" ? "active" : ""}><Link href="/contact-one" className="sub-menu-item">Contact</Link></li>
                    <li className={manu === "/auth-login" || "" ? "active" : ""}><Link href="/auth-login" className="sub-menu-item">login</Link></li>
                </ul>
            </div>
        </div >
    </nav >
    )
}
