// import the logos Start

import Sllogo from "../../assets/pngegg.png"
import FB from "../../assets/faceb.png"
import Linkedin from "../../assets/linkedin.png"
import Inster from "../../assets/inster.png"
import Youtube from "../../assets/faceb.png"
import Tx from "../../assets/tx.png"

// import the logos END


const Footer = () => {

// ------------------Footer Menus Stert-----------------------
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

// -------------------- Footer Menu END -----------------


// ------ Footer Social Icons Start --------------

    let scoialIons = [
        {logo: FB, link: "/"},
        {logo: Tx, link: "/"},
        {logo: Inster, link: "/"},
        {logo: Youtube, link: "/"},
        {logo: Linkedin, link: "/"},
    ]

// ------ Footer Social Icons End --------------

  return (
    <div className="bg-[#293352] text-white">
        <div className="contaier mx-auto px-20">
            <div className="lg:grid grid-cols-4 gap-2">

                {/* ------------------------- Footer Menu Start ----------------------- */}

                {/* About Start */}
                    <div className="py-12 lg:px-8">
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
                {/* About END */}

                {/* Research Start */}
                <div className="py-12 lg:px-8">
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
                {/* Research End */}

                {/* Disseminations Start */}
                <div className="py-12 lg:px-8">
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
                {/* Disseminations END */}


                {/* Contacts Start */}
                <div className="py-12 lg:px-8">
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
                {/* Contacts End */}
            </div>

            {/* ------------------------- Footer Menu END ----------------------- */}

            
            <div className="py-8 lg:px-6 lg:flex lg:justify-between">

                {/* Logo With Text Start */}
                <div className="lg:flex">
                    <img src={Sllogo} alt="SLLOGO" className="w-20 h-20 lg:ml-0 ml-[35%]" />
                    <div className="pt-4 lg:px-4 text-md lg:text-left text-center">
                        <p className="">National Institute of Fundamental Studies</p>
                        <p className="">Ministry of Education</p>                        
                    </div>
                </div>
                {/* Logo With Text End */}

                {/* Social Icons Start */}
                <div className="flex pt-5">
                    {
                        scoialIons.map((sIons) =>(
                            <a href={sIons.link}>
                                <img src={sIons.logo} alt="" className="h-10 lg:px-4 px-2"/>
                            </a>
                        ))
                    }
                </div>
                {/* Social Icons End */}
            </div>

            {/* Footer centered text */}
            <div className="pt-4 pb-8 text-center">
                <p className="">&copy; National Institute of Fundamental Studies, Hanthana Road, Kandy, Sri Lanka</p>
            </div>
            {/* Footer centered text */}
        </div>
    </div>
  )
}

export default Footer