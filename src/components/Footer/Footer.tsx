
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
            </div>
        </div>
    </div>
  )
}

export default Footer