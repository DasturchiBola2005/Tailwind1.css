import React from 'react'
import icon1 from "../../public/menu.png"
import icon2 from "../../public/ilts.png"
import { FaCloudMeatball } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";  
import { RiScales3Line } from "react-icons/ri";
import { BsFillNutFill } from "react-icons/bs";

const Section4 = () => {
  return (
    <div className='mt-9 cursor-pointer'>
      <div className='flex flex_left'>
       <div className='flex flex_left_nested'>
       <div className='card-4 py-3  ml-[100px] hover:bg-deep-purple-700 hover:text-white bg-white px-[60px] hover:hover:bg-fuchsia-800 duration-500'>
          <div className='w-[90px] h-[90px]  mt-3 mr- flex items-center bg-blue-gray-50   rounded-full'>
          <FaCloudMeatball className=' ml-5 w-[50px] h-[50px] text-black'/>
          </div>
          <p className='text-2xl font-bold mt-4 '>Bulutli VPS</p>
          <h3 className='text-lg mt-4'>Some quick example <br /> text to build on the <br /> card title and make up <br /> the bulk of the card's <br /> content.</h3>
        </div>
        {/*  */}
        <div className=' card_4 py-3 ml-8 hover:bg-deep-purple-700 hover:text-white bg-white px-[60px] hover:hover:bg-fuchsia-800 duration-500'>
          <div className='w-[90px] h-[90px]  mt-3 mr- flex items-center bg-blue-gray-50   rounded-full'>
          <RxHamburgerMenu className=' ml-5 w-[50px] h-[50px] text-black'/>
          </div>
          <p className='text-2xl font-bold mt-4'>Menu</p>
          <h3 className='text-lg mt-4'>Some quick example <br /> text to build on the <br /> card title and make up <br /> the bulk of the card's <br /> content.</h3>
        </div>
       </div>
        <div className='flex items-center'>
         <img className='pl-8' src={icon2} alt="" />
        </div>

      </div>
      {/* 2-chi flex */}
      <div className='flex flex_right '>
      <div className='flex flex-col ml-[50px] pt-[80px] title_text' >
          <p className=' leading-[60px] text-4xl font-extrabold pb-5'>Bizning asosiy <br /> xizmatlarimiz</p>
          <span className='leading-[35px] text-xl'>Even the all-powerful Pointing has no control about the blind <br /> texts it is an almost unorthographic. A small river named <br /> Duden flows by their place and supplies it with the necessary <br /> regelialia. It is a paradisematic country.</span>
        </div>
        <div className=' flex card_5 '>
        <div className=' card-5 py-3 mt-8 ml-[100px] hover:bg-deep-purple-700 hover:text-white bg-white px-[60px] hover:hover:bg-fuchsia-800 duration-500'>
          <div className='w-[90px] h-[90px]  mt-3 mr- flex items-center bg-blue-gray-50   rounded-full'>
            <RiScales3Line className=' ml-5 w-[50px] h-[50px] text-black'/>
          </div>
          <p className='text-2xl font-bold mt-4'>Affectiv</p> 
          <h3 className='text-lg mt-4'>Some quick example <br /> text to build on the <br /> card title and make up <br /> the bulk of the card's <br /> content.</h3>
        </div>
        {/*  */}
        <div className=' card_6 py-3 ml-8 mt-8 hover:bg-deep-purple-700 hover:text-white  bg-white px-[60px] hover:hover:bg-fuchsia-800 duration-500'>
          <div className='w-[90px] h-[90px]  mt-3 mr- flex items-center bg-blue-gray-50   rounded-full'>
           <BsFillNutFill  className=' ml-5 w-[50px] h-[50px] text-black'/>
          </div>
          <p className='text-2xl font-bold mt-4'>Round</p>
          <h3 className='text-lg mt-4'>Some quick example <br /> text to build on the <br /> card title and make up <br /> the bulk of the card's <br /> content.</h3>
        </div>
        </div>

      
      </div>
      

    </div>
  )
}

export default Section4