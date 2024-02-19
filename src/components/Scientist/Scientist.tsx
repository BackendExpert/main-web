const Scientist = () => {
    // drop down menu for sort by
    let sortBy = [
        {name: "First Name"},
        {name: "Middle Name"},
        {name: "last Name"},                
    ];

    // drop down menu for sort by
    let orderBy = [
        {name: "Ascending  [A-Z]"},
        {name: "Descending [Z-A]"},
    ];

    return (
    <div className="container mx-auto lg:px-32 px-8 py-20">
        <h1 className="text-center font-semibold text-3xl">Scientists</h1>
        <div className="my-5">
            <div className="lg:grid grid-cols-5 gap-4">
                <div className="">
                    <p className="">Sort By</p>
                    <div className="">
                        <select name="" id="" className="w-full border rounded py-2">
                            {
                                sortBy.map((sort) => (
                                    <option value="" className="">{sort.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="">
                    <p className="">Sort By</p>
                    <div className="">
                        <select name="" id="" className="w-full border rounded py-2">
                            {
                                orderBy.map((order) => (
                                    <option value="" className="">{order.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="">
                    <button className="mt-5 bg-[#293352] py-2 px-8 text-white rounded-3xl duration-500 hover:shadow-xl">
                        Apply
                    </button>
                </div>
            </div>
            <div className="my-4">
                <div className="lg:grid grid-cols-3 gap-4">
                    <div className="mb-12">
                        <img src="https://wallpaperaccess.com/full/1617671.jpg" alt="" className="rounded"/>
                        <div className="-mt-16 text-white pl-4">
                            <p className="font-bold">Prof.Ananda Kulasooriya</p>
                            <p className="">Honorary Visiting Research Professer</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <img src="https://wallpaperaccess.com/full/1617671.jpg" alt="" className="rounded"/>
                        <div className="-mt-16 text-white pl-4">
                            <p className="font-bold">Prof.Ananda Kulasooriya</p>
                            <p className="">Honorary Visiting Research Professer</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <img src="https://wallpaperaccess.com/full/1617671.jpg" alt="" className="rounded"/>
                        <div className="-mt-16 text-white pl-4">
                            <p className="font-bold">Prof.Ananda Kulasooriya</p>
                            <p className="">Honorary Visiting Research Professer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scientist