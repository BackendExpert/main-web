import IonIcon from "@reacticons/ionicons"
import { useState } from "react"

const NavBar = () => {
    const [menuOpen, SetOpenMenu] = useState(false)


  return (
    <div className="text-white bg-gray-700 w-full h-16">
        <div className="justify-between flex py-4 px-8">
            <div className="flex ">
                <span className=""><IonIcon size="large" name="newspaper"></IonIcon></span>
                <span className="pl-4 pt-0 text-xl">Logo</span>
            </div>
            <div className="">
                <div onClick={() => SetOpenMenu(!menuOpen)} className="text-3xl absolute right-7 top-4 cursor-pointer md:hidden">
                    <IonIcon name={menuOpen ? 'menu' : 'close'}></IonIcon>
                </div>

                <ul className={`md:flex md:items-center absolute md:static md:pb-0 pb-10 md:bg-gray-700 bg-gray-800 md:z-auto z-[-1] md:mt-0 mt-[-15px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menuOpen ? 'top-20' : 'top-[-500px]'}`}>
                    <li className="px-4 md:py-0 py-5">Home</li>
                    <li className="px-4 mr-4 md:py-0 py-5">
                        <div className="w-auto flex">
                            <div className="">About</div>
                            <div onClick={() => SetOpenMenu(!menuOpen)} className="text-md absolute ml-12 pt-1 cursor-pointer">
                                <IonIcon name="chevron-down"></IonIcon>
                            </div>
                        </div>

                        <ul className="hidden">
                            <li>hi all</li>
                        </ul>
                    </li>
                    <li className="px-4 md:py-0 py-5">News & Events</li>
                    <li className="px-4 md:py-0 py-5">Academic</li>
                    <li className="px-4 md:py-0 py-5">Publication</li>
                    <li className="px-4 md:py-0 py-5">Careers</li>
                    <li className="px-4 md:py-0 py-5">Contact</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default NavBar