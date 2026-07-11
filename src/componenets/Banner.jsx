import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='bg-[#EEFFF9]'>
            <div className="banner-content flex max-w-285 mx-auto">
                <div className="banner-left">
                    <h4 className='font-Lato font-light text-[60px] leading-[71.5px] text-[#1B1B1B] pt-29'>Empower Your Team <span className='text-[#000000] font-bold'>With CoreWave's</span></h4>
                    <p className='font-Lato font-normal text-[20px] leading-7.5 text-[#717171] mt-9.25'>Boost Productivity and Wellness in Your Organization with CoreWave's Advanced Tools and Techniques</p>
                    <div className="btns-banner mt-12.75 flex ">
                        <button className="explore-btn">
                        <a className='font-Lato font-[16px] text-[#ffffff] bg-[#06C279] py-3.75 px-6.25 rounded-[5px] mr-5' href="">Explore More</a>
                        </button>
                        <button className="watch-now-btn border-2 py-3 px-6 border-[#06C279] bg-[#EEFFF9] rounded-[5px] flex justify-baseline align-baseline">
                          <img className='w-5 h-5 mr-3' src="public\playbtn.png" alt="" /><a className='font-Lato font-semibold text-[#1B1B1B]' href="">Watch Now</a>
                        </button>
                    </div>
                </div>
                <div className="banner-right w-full">
                    <img src="public\Banner img.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner