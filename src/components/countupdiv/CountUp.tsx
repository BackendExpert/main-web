//import reacttions 
import IonIcon from "@reacticons/ionicons"

//import up package
import UpCount from "react-countup"


let coutupInfor = [
    {name: "Patient", logo: <IonIcon name="newspaper" size="large"></IonIcon>, coutdata : 12},
    {name: "Research", logo: <IonIcon name="telescope" size="large"></IonIcon>, coutdata : 54},
    {name: "People", logo: <IonIcon name="people" size="large"></IonIcon>, coutdata : 450},
    {name: "Faculties", logo: <IonIcon name="business" size="large"></IonIcon>, coutdata : 8},
    {name: "Views", logo: <IonIcon name="eye" size="large"></IonIcon>, coutdata : 1000},    
];

const CountUp = () => {
  return (
    <div className="container mx-auto px-32">
        <div className="lg:grid grid-cols-5 gap-2 lg:my-12">
           {
                coutupInfor.map((countinfo) => (
                    <div className="py-8 text-[#293352]">
                        <div className="text-center">
                            <div className="">
                                <p className="text-3xl">{countinfo.logo}</p>
                                <p className="text-2xl">{countinfo.name}</p>
                                <p className="text-2xl font-bold"><UpCount enableScrollSpy={true} end={countinfo.coutdata} /></p>
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