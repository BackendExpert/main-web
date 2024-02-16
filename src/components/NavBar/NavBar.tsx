import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

const NavBar = () => {
    // for open main navbar when mobile screen
    const [menuOpen, SetOpenMenu] = useState(false)

    // for open submenu - About 
    const [aboutOpen, SetAboutMenu] = useState(false)

    // menus of About Submenu


  return (
    <div className="text-white bg-gray-700 w-full h-16">
        <div className="justify-between flex py-4 px-8">
            <div className="flex ">
                <span className=""><IonIcon size="large" name="newspaper"></IonIcon></span>
                <span className="pl-4 pt-0 text-xl">Logo</span>
            </div>
            <div className="">
                {/* open main navbar when mobile screen for that md:hidden */}
                <div onClick={() => SetOpenMenu(!menuOpen)} className="text-3xl absolute right-7 top-4 cursor-pointer md:hidden">
                    <IonIcon name={menuOpen ? 'close' : 'menu'}></IonIcon>
                </div>

                {/*-------------------- menus in navbar start ----------------------- */}
                <ul className={`md:flex md:items-center absolute md:static md:pb-0 pb-10 md:bg-gray-700 bg-gray-800 md:z-auto z-[-1] md:mt-0 mt-[-15px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menuOpen ? 'top-20' : 'top-[-500px]'}`}>
                    <li className="px-4 md:py-0 py-5">Home</li>
                    <li className="px-4 mr-12 md:py-0 py-8">

                        {/* Open 'about submenu */}
                        <div onClick={() => SetAboutMenu(!aboutOpen)} className="text-md absolute ml-0 pt-1 cursor-pointer">
                            <div className="flex -mt-[15px]">
                                <div className="">About</div>
                                <div className="pt-1 pl-1">
                                    <IonIcon name={aboutOpen ? 'chevron-down' : 'chevron-up'}></IonIcon>
                                </div>
                            </div>
                         </div>

                        {/* menus in About submenu START */}
                        <ul className={`md:pl-8 md:pt-8 md:pb-8 rounded mx-[4%] md:w-11/12 md:mt-10 bg-gray-800 md:items-center md:pb-0 pb-12 md:absolute md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${aboutOpen ? 'static' : 'hidden'}`}>
                            <li>hi all</li>
                            <li>hi all</li>
                            <li>hi all</li>
                            <li>hi all</li>
                            <li>hi all</li>
                        </ul>
                        {/* menus in About submenu END */}
                    </li>
                    <li className="px-4 md:py-0 py-5">News & Events</li>
                    <li className="px-4 md:py-0 py-5">Academic</li>
                    <li className="px-4 md:py-0 py-5">Publication</li>
                    <li className="px-4 md:py-0 py-5">Careers</li>
                    <li className="px-4 md:py-0 py-5">Contact</li>
                </ul>
                
                {/*-------------------- menus in navbar end ----------------------- */}
            </div>
        </div>

    </div>
  )
}

export default NavBar