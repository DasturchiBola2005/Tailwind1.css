import React from 'react'
import google from "../../public/google.png"

const Section6 = () => {
  return (
    <div className='pt-[50px] '>
    <div className='flex flex-col items-center justify-center'>
        <h5>XIZMATLAR</h5>
        <p className='text-4xl font-extrabold pt-4'>U Qanday Ishlaydi</p>
        <div className='mt-[60px] button_div'>
            <button className='py-3 rounded-md px-6 bg-green-700 text-white'>Keyingi avlod VPS</button>
            <button className='py-3 px-6 btn-3 rounded-md text-green-700 ml-4 hover:bg-green-700 hover:text-white duration-500'>Samaradorlik</button>
            <button className='py-3 px-4 btn-3 text-green-700 ml-4 rounded-md hover:bg-green-700 duration-500 hover:text-white'>Ishlash</button>
        </div>
    </div>
    <div className='flex mt-[50px] selection-6 '>
        <div className='section-6-img ml-[100px] title_img'>
            <img className='h-[600px]' src={google} alt="" />
        </div>
        <div className='pt-[120px] pl-[20px] title-card '>
            <p className=' pb-5  text-2xl font-semibold'>Keyingi avlod VPS hosting</p>
            <span className='text-lg '>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts. <br />  Separated they live in Bookmarksgrove right at the <br /> coast of the Semantics, a large language ocean.</span>
            <h4 className='text-lg pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nesciunt voluptate, quibusdam sunt iste dolores consequatur</h4>
            <button className=' mt-8 w-[120px] h-[50px] bg-white text-cyan-600 rounded-3xl mr-[100px] border-2 border-blue-600 hover:bg-blue-800 hover:text-white  duration-500   '>Aloqa qiling</button>
        </div>
    </div>

    </div>
  )
}

export default Section6