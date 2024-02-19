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
            <div className="lg:grid grid-cols-5 gap-2">
                <div className="">
                    <p className="">Sort By</p>
                    <div className="">
                        <select name="" id="" className="w-full border rounded py-2 px-2">
                            <option value="" selected>First Name</option>
                            <option value="">Middle Name</option>
                            <option value="">Last Name</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Scientist