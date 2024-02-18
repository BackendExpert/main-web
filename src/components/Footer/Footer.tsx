
const Footer = () => {
    let about = [
        {title: "About"},
        {name: "Board of Governors", link: "/"},
        {name: "Director", link: "/"},
        {name: "Research Council", link: "/"},
        {name: "Alumni", link: "/"},
        {name: "Join", link: "/"},

    ];

  return (
    <div className="">
        <div className="contaier mx-auto px-12">
            <div className="md:grid grid-cols-4 gap-2">
                <div className="">
                    {
                        
                        about.map((abo) => (
                            <div className="">
                                <h1 className="">{abo.title}</h1> 
                                <a href={abo.link}>
                                    <p className="">{abo.name}</p>
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