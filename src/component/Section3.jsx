    import React from 'react'
import AccardionCom from './AccardionCom'
// import AccardionCom from './accardion/AccardionCom'
const Section3 = () => {
    return (
        <div>
            <div className='py-5 section3 mt-6 text-white'>
                <p className='text-center pt-7 pb-5 text-xl font-semibold'>12,000 DAN ORTIQ VEB -SAYTLAR ISHONCHLI JOYLASHTIRILGAN</p>
                <div className='flex qator text-center justify-around pt-9'>
                    <div className='pl-8'>
                        <span className='font-bold text-6xl '>0</span>
                        <h4 className='font-medium'>CMS o'rnatish</h4>
                    </div>
                    <div>
                        <span className='font-bold text-6xl '>0</span>
                        <h4 className='font-medium'>Mukofotlar qo'lga kiritildi</h4>
                    </div>
                    <div>
                        <span className='font-bold text-6xl '>0</span>
                        <h4 className='font-medium'>Ro'yxatdan o'tgan domenlar</h4>
                    </div>
                    <div className='pr-8'>
                        <span className='font-bold text-6xl '>0</span>
                        <h4 className='font-medium'>Qoniqtirilgan mijozlar</h4>
                    </div>
                </div>
            </div>

            <div className='section_left flex justify-around py-6 mx-[200px] rounded-2xl bg-white '>
                <div className='flex flex-col '>
                    <p className='text-2xl font-bold pl-[45px] pb-4'>Biz haqimizda savolingiz bormi?</p>
                    <span className='pl-[45px]'>A small river named Duden flows by their place and supplies it <br /> with the necessary regelialia.  It is a paradisematic country.</span>
                </div>
                <div className='flex items-center '><button className=' btn_  rounded-2xl text-white bg-pink-300 px-9 py-5'>Aloqa qiling</button></div>
            </div>

            <div>
                <div className='flex flex-col pt-9 text-center text'>
                    <p className='text-4xl font-bold pb-3'>Tez -tez savollar beriladi</p>
                    <span className='text-xl font-normal '>Far far away, behind the word mountains, far from the <br /> countries Vokalia and Consonantia, there live the blind texts</span>
                </div>

               <AccardionCom/>
            </div>

        </div>
    )
}

export default Section3