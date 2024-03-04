import React from 'react'
import { TbBrandTwitter } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' py-8 bg-deep-purple-800 text-white'>
      <div className='flex flex-col-1'>
       <div className='dic flex'>
       <div className='flex flex-col ml-[100px] pt-9 pb-5 footer-top '>
          <span className='text-lg font-medium pb-5 '>Oson taklifni oling</span>
          <p className='text-3xl font-bold'>Bugun veb -xostingga yoziling!</p>
        </div>
        <div className='flex flex-col ml-[100px] pt-9 pb-5 pl-8  footer-top-2'>
          <h4 className='text-lg font-medium pb-5 '>Hoziroq boshlang</h4>
          <h5 className=' flex text-5xl font-extrabold'>$ 4.50 <h6 className='text-xs pt-7 pl-2'>/oy</h6></h5>
        </div>
       </div>
        <div>
          <button className='py-5 px-8 rounded-[40px] bg-deep-purple-700 ml-[130px] mt-[50px] duration-500 hover:text-deep-purple-300 hover:bg-deep-purple-900'>Hoziroq boshlang</button>
        </div>
      </div>

      <div className=' flex pt-9 footer_left'>
       <div className='flex flex-row'>
       <div className=' footer-card flex flex-col  py-9 ml-[100px] w-[270px] bg-deep-purple-900 cursor-pointer'>
          <p className='text-xl font-extrabold mb-7 ml-8'>CoHost</p>
          <h4 className='ml-8 '>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h4>
          <div className='flex justify-around pt-[40px] pb-5'>
            <TbBrandTwitter className='w-[40px] h-[30px] ml-3' />
            <FaFacebookF className='w-[40px] h-[30px]' />
            <GrInstagram className='w-[40px] h-[30px] mr-3' />
          </div>
        </div>
       
       <div className='flex flex-col'>
       <p className='text-xl font-bold ml-8 mb-4 mt-5'>Keraksiz havolalar</p>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Serverlar</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Windows hosting</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Bulutli hosting</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>IOS serverlari</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Linux serverlari</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Barchasi</a>
       </div>

       </div>
     <div className='flex flex-row2'>
     <div className='flex flex-col ml-[80px] divs'>
        <p className='text-xl font-bold ml-5 mb-4 mt-5'>Navigatsion</p>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Uy</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Domen</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Hosting</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Haqida</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Blog</a>
        <a href="" className='text-blue-gray-200 ml-8 mb-3'>Aloqa</a>
       </div>
       <div className=' title_bottom flex flex-col ml-[80px]'>
       <p className='text-xl font-bold ml-5 mb-4 mt-5'>Navigatsion</p>
       <div className='flex'>
       <IoLocationOutline  className='w-[30px] h-[25px] ml-3' />
       <span className='text-blue-gray-200 ml-5'>203 Fake St. Mountain View,  <br /> Frantsisko, Kaliforniya, AQSh</span>
       </div>
       <div className='flex pt-7'>
       <BsTelephone  className='w-[30px] h-[25px] ml-5' />
       <span className='text-blue-gray-200 pl-5'>+998 99 477 65 18</span>
       </div>
       <div className='flex pt-7'>
       <FaTelegramPlane className='w-[30px] h-[25px] ml-5' />
       <span className='text-blue-gray-200 pl-5'>WEB_DEVELOPER_0075</span>
       </div>
  
       </div>
     </div>

      </div>
      <div className='text-center pt-[50px] '>
      <span className='text-center hover:text-black duration-500 cursor-pointer text-blue-gray-200 '>Mualliflik huquqi © 2024 Barcha huquqlar himoyalangan | Ushbu shablon YUSUBOV MAQSUDBEY tomonidan yaratilgan.</span>
      </div>
    </div>
  )
}

export default Footer
