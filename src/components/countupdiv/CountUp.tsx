//import reacttions 
import IonIcon from "@reacticons/ionicons"

//import up package
import UpCount from "react-countup"

const CountUp = () => {
  return (
    <div className="container mx-auto px-32">
        <div className="md:grid grid-cols-5 gap-2 md:my-12">
            <div className="">
                <span className="text-3xl"><IonIcon name="newspaper" size="large"></IonIcon></span>
                <span className="">Patient</span>
                <span className=""></span>
            </div>
        </div>
    </div>
  )
}

export default CountUp