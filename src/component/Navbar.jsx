import React from 'react'
// import logo from "../../public/menu.png"
const Navbar = () => {
  return (
    <div className=' Navbar h-[90px] flex items-center justify-between '>
      <p className='text-[20px] font-bold pl-[100px]'>CoHost</p>
      <div className="box1 flex  items-center  ">
        <div className='title-a'>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">HOME</a>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">ABOUT</a>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">DOMAIN</a>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">HOSTING</a>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">BLOG</a>
          <a className='text-sm  mx-[20px] hover:text-blue-500 duration-500 ' href="">CONTACT</a>
        </div>
        <button className='w-[120px] h-[50px] bg-white text-cyan-600 rounded-3xl mr-[100px] ml-[25px] border-2 border-blue-600 hover:bg-blue-800 hover:text-white  duration-500   '>Search</button>
      </div>
    </div>
    // <div>
    //   <nav className='navbar'>
    //     <div className='logo'>
    //       <a href="">CoHost</a>
    //     </div>
    //     <div className="menu">
    //       <div className="menu-links">
    //         <a href="">Home</a>
    //         <a href="">Abaut</a>
    //         <a href="">Contact</a>
    //         <a href="">Blog</a>
    //       </div>
    //       <button className='log-in'>Log In</button>
    //     </div>
    //     <div className="menu-btn">
    //       <img src={logo} alt="" />z  
    //     </div>
    //   </nav>
    // </div>
  )
}

export default Navbar