'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <nav className={`navbar navbar-light fixed-top p-0`} style={{fontFamily: 'var(--font-montserrat)'}}>
            <div className={`w-100 py-1 main-navbar ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
                <div className='d-flex justify-content-between align-items-center container'>
                    <Link className="navbar-brand fs-3 fw-bold text-white" href='/'>
                        Logo
                    </Link>
                    <div className='d-flex align-items-center gap-2'>
                        <Link className="text-uppercase text-decoration-none responsive-nav-link fw-normal text-white" href='/' >
                            who we are
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                        >
                            <Icon icon="lineicons:menu" fontSize={30} color='#fff' />
                        </button>
                    </div>
                </div>
            </div>
            <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas" aria-label="Close"
                        style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
                    >
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
                .main-navbar {
                    transition: background-color 0.3s ease;
                    backdrop-filter: blur(10px);
                    background-color: transparent;
                }
                .main-navbar.scrolled {
                    background-color: rgba(0, 0, 0, 0.4);
                }
            `}</style>
        </nav>
    )
}

export default Navbar

// import Link from 'next/link'
// import React from 'react'
// import { Icon } from '@iconify/react';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-light bg-transparent fixed-top">
//             <div className="container">
//                 <div className="container-fluid">
//                     <div className='d-flex justify-content-between align-items-center'>
//                         <Link className="navbar-brand fs-3 fw-bold text-white" href='/'>
//                             Logo
//                         </Link>
//                         <div className='d-flex align-items-center gap-2'>
//                             <Link className="text-uppercase text-decoration-none fs-6 fw-normal text-white" href='/'>
//                                 who we are
//                             </Link>
//                             <button
//                                 className="navbar-toggler"
//                                 type="button"
//                                 data-bs-toggle="offcanvas"
//                                 data-bs-target="#offcanvasNavbar"
//                                 aria-controls="offcanvasNavbar"
//                                 style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
//                             >
//                                 <Icon icon="lineicons:menu" fontSize={30} color='#fff'/>
//                             </button>
//                         </div>
//                     </div>
//                     <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
//                         <div className="offcanvas-header">
//                             <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Logo</h5>
//                             <button
//                                 type="button"
//                                 className="btn-close text-reset"
//                                 data-bs-dismiss="offcanvas" aria-label="Close"
//                                 style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
//                             >
//                             </button>
//                         </div>
//                         <div className="offcanvas-body">
//                             <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
//                                 <li className="nav-item">
//                                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Link</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="nav-link" href="#">Link</a>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default Navbar