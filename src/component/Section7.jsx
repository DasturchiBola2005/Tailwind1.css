import React from 'react'
import test from "../../public/test.webp"
import CardDefault from './CardDefault'
import CardDefault2 from './CardDefault2'
import CardDefault3 from './CardDefault3'
const Section7 = () => {
  return (
    <div>
      <div className=' text-center pt-[100px] '>
        <p className='text-4xl font-extrabold pb-5'>Oxirgi blog</p>
        <span className='leading-[30px] text-lg font-medium'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there <br /> live the blind texts. Separated they live in</span>
      </div>
      <div className=' bigin-card grid grid-cols-3 justify-around pt-[80px] pb-8'>
   <CardDefault/>
   <CardDefault2/>
   <CardDefault3/>
      </div>
    </div>
  )
}

export default Section7