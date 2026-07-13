import React from 'react'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="grid grid-cols-12 max-w-330 mx-auto">
                <div className="footer-left col-start-1 col-span-2">
                  <img className='' src="public\Logo.png" alt="" />
                  <h4>mukimsdesign@gmail.com</h4>
                  <p>+88 01767630044</p>
                </div>
                <div className="footer-left-mid col-start-4 col-span-2">
                  <h4>Services</h4>
                  <ul>
                    <li>Web Design</li>
                    <li>Web Development</li>
                    <li>SEO Marketing</li>
                    <li>UI/UX Analysis</li>
                    <li>Digital Marketing</li>
                  </ul>
                </div>
                <div className="footer-right-mid col-start-7 col-span-2">
                  <h4>Help</h4>
                  <ul>
                    <li>Account</li>
                    <li>Support Center</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
                <div className="footer-right col-start-10 col-span-3">
                  <h4>Contact Us</h4>
                    <input
                      type="email"
                      placeholder="Enter your mail"
                      className="w-84.25 h-12 px-3.75 border-2 border-[#DDDDDD] rounded-[5px] font-Lato text-[14px] leading-5.5"
                    />
                  <button className="explore-btn">
                    <a className='font-Lato font-[16px] text-[#ffffff] bg-[#06C279] py-3.75 px-6.25 rounded-[5px] mr-5' href="">Request & Callback</a>
                  </button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer