import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav className='py-6.5 bg-[#EEFFF9]'>
            <div className="nav-content max-w-285 mx-auto flex justify-between">
                <div className="nav-left">
                    <img src="public\Logo.png" alt="" />
                </div>
                <div className="nav-right flex gap-35.5">
                    <div className="navmenus">
                        <ul className='flex font-Lato font-[16px] gap-11.25 text-[#1B1B1B] '>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Testimonial</a></li>
                        </ul>
                    </div>
                    <div className="register-btn">
                        <a className='font-Lato font-[16px] text-[#ffffff] bg-[#06C279] py-3.75 px-6.25 rounded-[5px]' href="">Register</a>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar