import img from "../../public/rename.png"
import React from 'react'
const Section1 = () => {
  return (
    <div>
      <div className="flex section-1">
        <div className="flex flex-col ">
          <h3 className='font-bold text-indigo-900 pl-[100px] pt-9 pb-5'>IZOMETRIK XOSTING</h3>
          <p className='text-6xl font-extrabold pl-[100px] pb-5 leading-[85px]'>Dizayn, Rivojlanish, Xosting</p>
          <span className='text-xl font-normal pl-[100px] '>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</span>
          <button className=" btn  w-[200px] h-[60px] bg-deep-purple-700 text-white rounded-md hover:bg-white hover:text-deep-purple-700 duration-500 ml-[100px] mt-5">Get in touch</button>
        </div>
        <div className="flex items-center  pt-[250px] h-[300px]  w-full img-box">
          <img  src={img} alt="" />
        </div>
      </div>
      <div className="flex pt-[100px] justify-center section_bottom">
        <div className="flex justify-center flex-col mr-[60px] box-1 ">
          <p className="text-2xl font-bold pb-[5px]">Domen nomingizni qidiring</p>
          <span className="text-sm  ">Lorem ipsum dolor sitaa amet consectetur adipisicing.</span>
        </div>
        <div className="box2  bg-deep-purple-700 py-10 px-[110px]">
         <div className="center flex">
         <input className="py-4 px-[50px] outline-none " type="text" placeholder="Domen nomini kiriting" />
         <div className="input_select">
         <select className="py-[18px] px-4 outline-none ml-[0.8px] ">
            <option value=".com">.com</option>
            <option value=".net">.net</option>
            <option value=".uz">.uz</option>
            <option value=".ru">.ru</option>
          </select>
          <button className="py-4 px-9 bg-pink-400 text-white border-none ">SUBMIT</button>
         </div>
         </div>
          <div className="flex">
            <div className="rounded-xl border py-1 px-3 mx-1 mt-4 text-white">.com $9.75</div>
            <div className="rounded-xl border py-1 px-3 mx-1 mt-4 text-white">.net $9.50</div>
            <div className="rounded-xl border py-1 px-3 mx-1 mt-4 text-white">.biz $8.95</div>
            <div className="rounded-xl border py-1 px-3 mx-1 mt-4 text-white">.uz $7.80</div>
            <div className="rounded-xl border py-1 px-3 mx-1 mt-4 text-white">.org $7.95</div>
          </div>
        </div>
      </div>
      <div>

      </div>

    </div>
  )
}

export default Section1