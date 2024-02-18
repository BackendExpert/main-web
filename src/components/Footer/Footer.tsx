// import the logos Start

import Sllogo from "../../assets/pngegg.png"
import FB from "../../assets/faceb.png"
import FB from "../../assets/faceb.png"
import FB from "../../assets/faceb.png"
import FB from "../../assets/faceb.png"
import FB from "../../assets/faceb.png"

// import the logos END


const Footer = () => {

    // Footer menu About
    let about = [
        {title: "About"},
        {name: "Board of Governors", link: "/"},
        {name: "Director", link: "/"},
        {name: "Research Council", link: "/"},
        {name: "Alumni", link: "/"},
        {name: "Join", link: "/"},
    ];

    //Footer manu Research
    let research = [
        {title: "Research"},
        {name: "Research Division", link: "/"},
        {name: "Research Collaboration", link: "/"},
        {name: "Research Funding", link: "/"},
        {name: "Young Scientist Association (YSA)", link: "/"},
    ];
    
    //Footer manu Dissemination
    let disseminations = [
        {title: "Dissemination"},
        {name: "Reports", link: "/"},
        {name: "Research Publication", link: "/"},
        {name: "Blog", link: "/"},
    ];

    //Footer manu Dissemination
    let contacts = [
        {title: "Contact"},
        {name: "Directory", link: "/"},
        {name: "Right to Information", link: "/"},
        {name: "Scientists", link: "/"},
        {name: "Staff Profile", link: "/"},
    ];

  return (
    <div className="bg-[#293352] text-white">
        <div className="contaier mx-auto px-12">
            <div className="md:grid grid-cols-4 gap-2">
                <div className="py-12 px-8">
                    {                        
                        about.map((abo) => (
                            <div className="">
                                <h1 className="text-2xl py-2">{abo.title}</h1> 
                                <a href={abo.link}>
                                    <p className="text-md">{abo.name}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="py-12 px-8">
                    {                        
                        research.map((res) => (
                            <div className="">
                                <h1 className="text-2xl py-2">{res.title}</h1> 
                                <a href={res.link}>
                                    <p className="text-md">{res.name}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="py-12 px-8">
                    {                        
                        disseminations.map((dissemination) => (
                            <div className="">
                                <h1 className="text-2xl py-2">{dissemination.title}</h1> 
                                <a href={dissemination.link}>
                                    <p className="text-md">{dissemination.name}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
                <div className="py-12 px-8">
                    {                        
                        contacts.map((contact) => (
                            <div className="">
                                <h1 className="text-2xl py-2">{contact.title}</h1> 
                                <a href={contact.link}>
                                    <p className="text-md">{contact.name}</p>
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="">
                <div className="">

                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer