import React from 'react'
import partner1 from "../../public/partner-3.png.webp"
import partner2 from "../../public/partner-2.png.webp"
import partner3 from "../../public/partner-1.png.webp"
import partner4 from "../../public/partner-4.png.webp"
import partner5 from "../../public/partner-5.png.webp"

const Sectionimg = () => {
  return (
  <div className='flex items-center justify-center pt-8 section-img'>
    <img className='w-[200px] h-[90px] m-[20px] opacity-25 hover:opacity-100 duration-500 cursor-pointer' src={partner1} alt="" />
    <img className='w-[200px] h-[90px] m-[20px] opacity-25 hover:opacity-100 duration-500 cursor-pointer' src={partner2} alt="" />
    <img className='w-[200px] h-[90px] m-[20px] opacity-25 hover:opacity-100 duration-500 cursor-pointer' src={partner3} alt="" />
    <img className='w-[200px] h-[90px] m-[20px] opacity-25 hover:opacity-100 duration-500 cursor-pointer' src={partner4} alt="" />
    <img className='w-[200px] h-[90px] m-[20px] opacity-25 hover:opacity-100 duration-500 cursor-pointer' src={partner5} alt="" />
  </div>
  )
}

export default Sectionimg