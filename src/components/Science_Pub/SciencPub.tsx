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
    <div className="px-32 py-24">
        <h1 className="text-center text-4xl font-semibold">Recent Scientific Publication</h1>

        <div className="flex justify-between my-16">
            {
                sciencePub.map((sciPub) => (
                    <div className="mx-10">
                        <img src={sciPub.img} alt="" className="w-full rounded-xl"/>
                        <p className="">{sciPub.title}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default SciencPub