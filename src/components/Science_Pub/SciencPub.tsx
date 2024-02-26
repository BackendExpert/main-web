import { Link } from "react-router-dom"

const SciencPub = () => {
    // Science Publication Data
    let sciencePub = [
        {
            link: "/SciencePub/PubInfo",
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "Stop the next pandemic? Stop illegal wildlife trade!"
        },
        {
            link: "/SciencePub/PubInfo",
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "The Science of Aji-no-moto"
        },
        {
            link: "/SciencePub/PubInfo",
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "The Present Covid-19"
        },
    ]
  return (
    <div className="lg:px-32 py-24">
        <h1 className="text-center text-4xl font-semibold">Recent Scientific Publication</h1>

        <div className="lg:grid grid-cols-3 gap-4 my-10">
            {/* ------------------ Fetch Start Science Publication ---------------------*/}
            {
                sciencePub.map((sciPub) => (
                    <Link to={sciPub.link}>
                        <div className="mx-8 my-8">
                            <img src={sciPub.img} alt="" className="w-full rounded-xl"/>
                            <p className="text-xl -mt-10 ml-4 text-white">{sciPub.title}</p>
                            <p className="mt-6 ml-2 text-xl">{sciPub.subdesc}</p>
                        </div>
                    </Link>
                ))
            }
             {/* ------------------ Fetch End Science Publication ---------------------*/}
        </div>

    </div>
  )
}

export default SciencPub