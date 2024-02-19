//import reacttions 
import IonIcon from "@reacticons/ionicons"

//import up package
import UpCount from "react-countup"


let coutupInfor = [
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 12},
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 54},
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 450},
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 8},
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 1000},    
];

const CountUp = () => {
  return (
    <div className="container mx-auto px-32">
        <div className="md:grid grid-cols-5 gap-2 md:my-12">
           {
                coutupInfor.map((countinfo) => (
                    <div className="border py-8">
                        <div className="text-center">
                            <div className="">
                                <p className="text-3xl">{countinfo.logo}</p>
                                <p className="text-2xl">{countinfo.name}</p>
                                <p className="text-2xl font-semibold"><UpCount end={countinfo.coutdata} /></p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CountUp