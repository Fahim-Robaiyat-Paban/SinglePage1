import React from 'react'

const Corewave = () => {
  return (
    <>
        <div className='max-w-285 mx-auto flex py-25'>
            <div className="left-content justify-center flex-1 py-10.25">
                <h4 className='font-Lato font-semibold text-[45px] leading-13.5 text-[#1B1B1B] mb-7.5'>Experience the power <span className='font-Lato font-semibold text-[45px] leading-13.5 text-[#000000]'>of Corewave</span></h4>
                <p className='font-Lato font-normal text-[16px] leading-6.5 text-[#7B7B7B] mb-11.25'>Are you ready to take your business to the next level? Look no further than Corewave. Our innovative technology and expert team can help you unlock your business's full potential. By harnessing the power of Corewave, you can streamline your operations, improve efficiency</p>
                <button className="explore-btn">
                <a className='font-Lato font-[16px] text-[#06C279] bg-[#DAF6EB] py-3.75 px-6.25 rounded-[5px]' href="">Learn More</a>
                </button>
            </div>
            <div className="right-content flex-1">
                <img className='w-full' src="src\assets\corewave.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Corewave