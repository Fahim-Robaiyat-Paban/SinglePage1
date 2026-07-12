import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="grid grid-cols-4 max-w-330 mx-auto">
                <div className="footer-left">
                  <img className='' src="public\Logo.png" alt="" />
                  <h4>mukimsdesign@gmail.com</h4>
                  <p>+88 01767630044</p>
                </div>
                <div className="footer-left-mid">
                  <h4>Services</h4>
                  <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>SEO Marketing</li>
                    <li>UI/UX Analysis</li>
                    <li>Digital Marketing</li>
                  </ul>
                </div>
                <div className="footer-right-mid">
                  <h4>Help</h4>
                  <ul>
                    <li>Account</li>
                    <li>Support Center</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
                <div className="footer-right">
                  <h4>Contact Us</h4>

                  <button className="explore-btn">
                    <a className='font-Lato font-[16px] text-[#ffffff] bg-[#06C279] py-3.75 px-6.25 rounded-[5px] mr-5' href="">Explore More</a>
                  </button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer