import React from 'react'

const Banner = () => {
  return (
    <>
        <div className='bg-[#EEFFF9]'>
            <div className="banner-content flex max-w-285 mx-auto">
                <div className="banner-left">
                    <h4 className='font-Lato font-light text-[60px] leading-[71.5px] text-[#1B1B1B] pt-29'>Empower Your Team <span className='text-[#000000] font-bold'>With CoreWave's</span></h4>
                    <p className='font-Lato font-normal text-[20px] leading-7.5 text-[#717171] mt-9.25'>Boost Productivity and Wellness in Your Organization with CoreWave's Advanced Tools and Techniques</p>
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