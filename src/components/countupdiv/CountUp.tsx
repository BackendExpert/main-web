//import reacttions 
import IonIcon from "@reacticons/ionicons"

//import up package
import UpCount from "react-countup"


let coutupInfor = [
    {name: "Patient", logo: <IonIcon name="newspaper"></IonIcon>, coutdata : 100}
];

const CountUp = () => {
  return (
    <div className="container mx-auto px-32">
        <div className="md:grid grid-cols-5 gap-2 md:my-12">
            <div className="border">
                <div className="text-center">
                    {/* <p className="text-3xl"><IonIcon name="newspaper" size="large"></IonIcon></p>
                    <p className="text-2xl">Patient</p>
                    <p className="text-2xl"><UpCount end={100} /></p> */}

                    {
                        coutupInfor.map((countinfo) => (
                            <div className="">
                                <p className="">{countinfo.logo}</p>
                                <p className="">{countinfo.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountUp