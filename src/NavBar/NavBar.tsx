import IonIcon from "@reacticons/ionicons"

const NavBar = () => {
  return (
    <div className="text-white bg-gray-700 w-full h-16">
        <div className=" flex py-4 px-8">
            <span className=""><IonIcon size="large" name="newspaper"></IonIcon></span>
            <span className="pl-4 pt-0 text-xl">Logo</span>
        </div>
    </div>
  )
}

export default NavBar