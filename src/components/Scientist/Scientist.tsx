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
        <div className="">
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
            </div>
        </div>
    </div>
  )
}

export default Scientist