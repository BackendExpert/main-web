import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  return (
    <div className="text-white bg-gray-700 w-full h-16">
        <div className="justify-between flex py-4 px-8">
            <div className="flex ">
                <span className=""><IonIcon size="large" name="newspaper"></IonIcon></span>
                <span className="pl-4 pt-0 text-xl">Logo</span>
            </div>
            <div className="">
                <ul className="md:flex">
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