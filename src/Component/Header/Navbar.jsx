import React from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from '../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const links = (
        <div className='md:flex gap-6'>
            <NavLink className={'font-semibold text-2xl'} to="/"><li>Home</li></NavLink>
            <NavLink className={'font-semibold text-2xl'} to="/app"><li>App</li></NavLink>
            <NavLink className={'font-semibold text-2xl'} to="/installation"><li>Installation</li></NavLink>
        </div>


    );
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logoImg} width={'60'} height={'60'} alt="" />
                    <h2 className='text-[#632ee3]'>HERO.lO</h2>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                    <a className='px-2 py-3 text-white rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]  flex justify-center items-center' href="https://github.com/emon35410" target='_blank'>
                        <FaGithub></FaGithub>
                        <h1 className='mx-2 font-semibold'>Contribute</h1>
                    </a>
            </div>
            
        </div>
    );
};

export default Navbar;