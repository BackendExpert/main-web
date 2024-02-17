import IonIcon from "@reacticons/ionicons"
import { useState } from "react"


const NavBar = () => {
    // for open main navbar when mobile screen
    const [menuOpen, SetOpenMenu] = useState(false)

    // for open submenu - About 
    const [aboutOpen, SetAboutMenu] = useState(false)

    // open about->institute submenu 
    const [openins, SetInstOpen] = useState(false)

    // open about->people submenu
    const [openPeo, SetPeoOpen] = useState(false)

    // open about->leadership
    const [openLeader, SetLeaderOpen] = useState(false)

    // open about->Administration
    const [openAdmin, SetAdminOpen] = useState(false)

    // open about->Society
    const [openSociety, SetSocietyOpen] = useState(false)

    // open about->Facilities Submenu
    const [oepnFaci, SetFaciOpen] = useState(false)

    // menus of About->institue Submenu
    let institue =[
        {name: "About Us", links: "/"},
        {name: "History", links: "/"},
        {name: "Vision and Mision", links: "/"},            
    ];  
    
    
    // menus for About->People Submenu

    let people =[
        {name: "Scientist", links: "/"},
        {name: "Academics", links: "/"},
        {name: "Non Academics", links: "/"},      
        {name: "Volunteer", links: "/"},      
        {name: "Alumin", links: "/"},                 
    ];  

    // menu for About->leadership Submenu

    let leadership = [
        {name: "Board of Govrnors", links: "/"},
        {name: "Chairman", links: "/"},
        {name: "Director", links: "/"},      
        {name: "Research Council", links: "/"},      
    ];

    // menus for About->Administration Submenu

    let administration =[
        {name: "Account Division", links: "/"},
        {name: "Administration Division", links: "/"},
        {name: "Computer Division", links: "/"},      
        {name: "Science Education and Dissemination Unit", links: "/"},      
        {name: "Instrument and Maintenace Division", links: "/"},  
        {name: "Internal Audit Division", links: "/"},    
        {name: "Office of the Director", links: "/"},  
        {name: "Procurement and Laboratory Services Division", links: "/"}, 
    ]
    
    // menu for About->Society Submenu

    let society = [
        {name: "Young Scientist Association", links: "/"},
        {name: "Welfare", links: "/"},
    ]

    // menu for About->Facilities
    
    let facility = [
        {name: "Research Center", links: "/"},
        {name: "Library", links: "/"},
        {name: "Conference Facilities", links: "/"},
    ]

    // menu of Academic Menu
    const [oepnAcad, SetAcadOpen] = useState(false)

    // open Academic->Research
    const [openResearch, SetResearchOpen] = useState(false)

    // open Academic->Study
    const [openStudy, SetStudyOpen] = useState(false)

    // menu for Academic->Research
    let researches = [
        {name: "Biological Sciences", links: "/"},
        {name: "Chemical and Physical Sciences", links: "/"},
        {name: "Conference Facilities", links: "/"},
        {name: "Computer Science, Methematics and Statistis", links: "/"},
        {name: "Earth and Space Sciences", links: "/"},
        {name: "Environment Sciences", links: "/"},
        {name: "Philosophy and Social Sciences", links: "/"},
    ]

    // menu for Academic->Study
    let studies = [
        {name: "Postgraduate Students", links: "/"},
        {name: "Undergraduate Students", links: "/"},
        {name: "Pre-University Students", links: "/"},
    ]

  return (
    <div className="text-white bg-gray-700 w-full h-16">
        <div className="justify-between flex py-4 px-8">
            <div className="flex ">
                <span className=""><IonIcon size="large" name="newspaper"></IonIcon></span>
                <span className="pl-4 pt-0 text-xl">Logo</span>
            </div>
            <div className="">
                {/* open main navbar when mobile screen for that md:hidden */}
                <div onClick={() => SetOpenMenu(!menuOpen)} className="text-3xl absolute right-7 top-4 cursor-pointer md:hidden">
                    <IonIcon name={menuOpen ? 'close' : 'menu'}></IonIcon>
                </div>

                {/*-------------------- menus in navbar start ----------------------- */}
                <ul className={`md:flex md:items-center absolute md:static md:pb-0 pb-10 md:bg-gray-700 bg-gray-800 md:z-auto z-[-1] md:mt-0 mt-[-15px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${menuOpen ? 'top-20' : 'top-[-500px]'}`}>
                    <li className="px-4 md:py-0 py-5 ">Home</li>
                    <li className="px-4 mr-12 md:py-0 pt-4 pb-4">

                        {/* Open 'about submenu */}
                        <div onClick={() => SetAboutMenu(!aboutOpen)} className="text-md absolute ml-0 pt-1 cursor-pointer">
                            <div className="flex -mt-[16px]">
                                <div className="">About</div>
                                <div className="pt-1 pl-1 ">
                                    <IonIcon name={aboutOpen ? 'chevron-up' : 'chevron-down'}></IonIcon>
                                </div>
                            </div>
                         </div>

                        {/* menus in About submenu START */}
                        <div className={`md:pr-8 pt-6 -ml-5 md:pl-8 md:pt-8 md:pb-8 rounded md:ml-[4%] md:w-11/12 md:mt-10 bg-gray-800 md:items-center md:pb-0 md:absolute md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${aboutOpen ? 'static' : 'hidden'}`}>
                            <div className="md:grid grid-cols-4 gap-2">
                                <div className="">
                                    {/* Submenu for institue */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetInstOpen(!openins)}>
                                        <h1 className="md:text-xl">Institute</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openins ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openins ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from institute */}
                                        {
                                            institue.map((ins) => (
                                                <a href={ins.links}>
                                                    <p className="py-2">{ins.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for institue END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for people */}
                                    <div className="flex md:static py-2 justify-between" onClick={() =>SetPeoOpen(!openPeo)}>
                                        <h1 className="md:text-xl">People</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openPeo ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openPeo ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from people */}
                                        {
                                            people.map((person) => (
                                                <a href={person.links}>
                                                    <p className="py-2">{person.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for people END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for leadership */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetLeaderOpen(!openLeader)}>
                                        <h1 className="md:text-xl">Leadership</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openLeader ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openLeader ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from leadership */}
                                        {
                                            leadership.map((leader) => (
                                                <a href={leader.links}>
                                                    <p className="py-2">{leader.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for leadership END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for administration */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetAdminOpen(!openAdmin)}>
                                        <h1 className="md:text-xl">Administration</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openAdmin ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openAdmin ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from administration */}
                                        {
                                            administration.map((admin) => (
                                                <a href={admin.links}>
                                                    <p className="py-2">{admin.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for administration END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for Society */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetSocietyOpen(!openSociety)}>
                                        <h1 className="md:text-xl">Society</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openSociety ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openSociety ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from society */}
                                        {
                                            society.map((soci) => (
                                                <a href={soci.links}>
                                                    <p className="py-2">{soci.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for Society END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for Facilities */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetFaciOpen(!oepnFaci)}>
                                        <h1 className="md:text-xl">Facilities</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={oepnFaci ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${oepnFaci ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from Facilities */}
                                        {
                                            facility.map((fac) => (
                                                <a href={fac.links}>
                                                    <p className="py-2">{fac.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for Facilities END*/}
                                </div>
                                <div className="">
                                    {/* Life at NIFS */}
                                    <h1 className="py-2 md:text-xl">Life at NIFS</h1>
                                     {/* Life at NIFS END*/}
                                </div>

                            </div>
                        </div>
                        {/* menus in About submenu END */}
                    </li>
                    <li className="px-4 md:py-0 pt-6 pb-4">News & Events</li>
                    <li className="px-4 mr-20 md:py-0 pt-6 pb-6">

                        {/* Open 'about submenu */}
                        <div onClick={() => SetAcadOpen(!oepnAcad)} className="text-md absolute ml-0 pt-1 cursor-pointer mr-12">
                            <div className="flex -mt-[16px]">
                                <div className="">Academic</div>
                                <div className="pt-1 pl-1 ">
                                    <IonIcon name={oepnAcad ? 'chevron-up' : 'chevron-down'}></IonIcon>
                                </div>
                            </div>
                         </div>

                        {/* menus in About submenu START */}
                        <div className={`md:pr-8 pt-6 -ml-5 md:pl-8 md:pt-8 md:pb-8 rounded md:ml-[4%] md:w-11/12 md:mt-10 bg-gray-800 md:items-center md:pb-0 md:absolute md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${oepnAcad ? 'static' : 'hidden'}`}>
                            <div className="md:grid grid-cols-2 gap-2">
                                <div className="">
                                    {/* Submenu for institue */}
                                    <div className="flex md:static py-2 justify-between" onClick={() => SetResearchOpen(!openResearch)}>
                                        <h1 className="md:text-xl">Institute</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openResearch ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openResearch ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from institute */}
                                        {
                                            researches.map((research) => (
                                                <a href={research.links}>
                                                    <p className="py-2">{research.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for institue END*/}
                                </div>
                                <div className="">
                                    {/* Submenu for people */}
                                    <div className="flex md:static py-2 justify-between" onClick={() =>SetPeoOpen(!openPeo)}>
                                        <h1 className="md:text-xl">People</h1>
                                        <div className="">
                                            <p className="md:hidden pl-2 mt-1"><IonIcon name={openPeo ? 'chevron-up' : 'chevron-down'}></IonIcon></p>
                                        </div>
                                    </div>
                                    {/* use inline-block in md:  */}
                                    <div className={`pl-3 pt-2 -pb-4 ${openPeo ? 'static' : 'md:inline-block hidden'}`}>
                                        {/* fetch data from people */}
                                        {
                                            people.map((person) => (
                                                <a href={person.links}>
                                                    <p className="py-2">{person.name}</p>
                                                </a>
                                            ))
                                        }
                                    </div>
                                     {/* Submenu for people END*/}
                                </div>
                            </div>
                        </div>
                        {/* menus in About submenu END */}
                    </li>
                    <li className="px-4 md:py-0 pt-4 pb-4">Publication</li>
                    <li className="px-4 md:py-0 pt-4 pb-4">Careers</li>
                    <li className="px-4 md:py-0 pt-4 pb-4">Contact</li>
                </ul>
                
                {/*-------------------- menus in navbar end ----------------------- */}
            </div>
        </div>

    </div>
  )
}

export default NavBar