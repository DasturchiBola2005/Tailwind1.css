import React from 'react'
import { RiScales3Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChargingStation } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaCloudMeatball } from "react-icons/fa6";
import { BsFillNutFill } from "react-icons/bs";


const Section2 = () => {
    return (
        <div className='mt-[100px] cursor-pointer  div_p'>
            <div className='flex justify-center flex-col items-center'>
                <p className='text-4xl font-extrabold pb-3 '>Nega bizni tanlaysiz ?</p>
                <h5 className='text-lg font-medium  text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus! <br />Tempore, repudiandae?</h5>
            </div>
            <div className='flex items-center justify-center  card-1'>
                <div className='nested-card-1 flex  py-[40px] px-[60px] hover:text-white hover:bg-deep-purple-700 mx-3 mt-6 bg-blue-500 duration-500'>
                    <div className='flex flex-col '>
                        <h1 className=' text-2xl font-bold pb-4 text-center'>Super tezkor server</h1>
                        <h3 className=''>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>
                    <div className='w-[90px] h-[90px] ml-7 mt-[40px] flex items-center bg-white rounded-full'>
                        <RxHamburgerMenu className=' ml-5 w-[50px] h-[50px] text-black' />
                    </div>
                </div>
                {/*  */}
                <div className=' nested-card-1 flex  py-[40px] px-[60px] hover:text-white3 hover:text-white mx-3 mt-6 bg-blue-500 hover:bg-deep-purple-700 duration-500'>
                    <div className='w-[90px] h-[90px]  mt-[40px] flex items-center  bg-white rounded-full'>
                        <RiScales3Line className=' ml-5 w-[50px] h-[50px] text-black' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-bold pb-4 text-center '>Super tezkor server</h1>
                        <h3 className='pl-4'>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>

                </div>
            </div>
            {/*  */}
            <div className=' card-2 flex items-center justify-center '>
                <div className='flex nested-card-1  py-[40px] px-[60px] mx-3 mt-6 hover:text-white bg-blue-500 hover:bg-deep-purple-700 duration-500'>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-bold pb-4 text-center'>Super tezkor server</h1>
                        <h3 className=''>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>
                    <div className='w-[90px] h-[90px] ml-7 mt-[40px] flex items-center bg-white rounded-full'>
                        <FaChargingStation className=' ml-5 w-[50px] h-[50px] text-black' />

                    </div>
                </div>
                <div className='flex nested-card-1 py-[40px] px-[60px] mx-3 mt-6 hover:text-white bg-blue-500 hover:bg-deep-purple-700 duration-500'>
                    <div className='w-[90px] h-[90px]  mt-[40px] flex items-center  bg-white rounded-full'>
                        <FaPersonWalkingLuggage className=' ml-4 w-[50px] h-[50px] text-black' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-bold pb-4 text-center '>Super tezkor server</h1>
                        <h3 className='pl-4'>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>

                </div>
            </div>

            {/*  */}
            <div className='card-3 flex items-center justify-center '>
                <div className='flex  nested-card-1  py-[40px] px-[60px] mx-3 mt-6 hover:text-white bg-blue-500 hover:bg-deep-purple-700 duration-500'>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-bold pb-4 text-center'>Super tezkor server</h1>
                        <h3 className=''>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>
                    <div className='w-[90px] h-[90px] ml-7 mt-[40px] flex items-center bg-white rounded-full'>
                        <FaCloudMeatball className=' ml-5 w-[50px] h-[50px] text-black' />
                    </div>
                </div>
                {/*  */}
                <div className='flex nested-card-1 py-[40px] px-[60px] mx-3 mt-6 hover:text-white bg-blue-500 hover:bg-deep-purple-700 duration-500'>
                    <div className='w-[90px] h-[90px]  mt-[40px] flex items-center  bg-white rounded-full'>
                        <BsFillNutFill className=' ml-5 w-[50px] h-[50px] text-black' />
                    </div>
                    <div className='flex flex-col '>
                        <h1 className='text-2xl font-bold pb-4 text-center '>Super tezkor server</h1>
                        <h3 className='pl-4'>This is a wider card with supporting  text <br /> below as a natural lead-in to additional content. <br /> This content is a little bit longer.This is a wider <br /> card with supporting text below as a natural <br /> lead-in to additional content. </h3>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Section2