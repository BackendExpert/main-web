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
                <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"></div>

                <ul className={`md:flex md:items-center absolute md:static md:pb-0 pb-10 md:bg-gray-700 bg-gray-800 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in`}>
                    <li className="px-4">Home</li>
                    <li className="px-4">About</li>
                    <li className="px-4">News & Events</li>
                    <li className="px-4">Academic</li>
                    <li className="px-4">Publication</li>
                    <li className="px-4">Careers</li>
                    <li className="px-4">Contact</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default NavBar