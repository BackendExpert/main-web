const SciencPub = () => {
    let sciencePub = [
        {
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "Stop the next pandemic? Stop illegal wildlife trade!"
        },
        {
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "The Science of Aji-no-moto"
        },
        {
            img: "https://wallpapercave.com/wp/wp1870777.jpg", 
            title: "Awareness", 
            subdesc: "The Present Covid-19"
        },
    ]
  return (
    <div className="lg:px-32 py-24">
        <h1 className="text-center text-4xl font-semibold">Recent Scientific Publication</h1>

        <div className="lg:grid grid-cols-3 gap-4 my-10">
            {
                sciencePub.map((sciPub) => (
                    <div className="mx-8 my-8">
                        <img src={sciPub.img} alt="" className="w-full rounded-xl"/>
                        <p className="text-xl -mt-10 ml-4 text-white">{sciPub.title}</p>
                        <p className="mt-6 ml-2 text-xl">{sciPub.subdesc}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default SciencPub