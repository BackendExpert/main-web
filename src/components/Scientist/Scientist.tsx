
const Scientist = () => {
  return (
    <div className="container mx-auto px-32 lg:py-20">
        <h1 className="text-3xl font-semibold text-center">Scientists</h1>

        <div className="">
            <div className="lg:grid grid-cols-5 gap-4">
                <div className="">
                    <p className="font-semibold">Sort by</p>
                    <div className="border my-2 py-2 px-2 rounded">
                        First Name
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold">Order</p>
                    <div className="border my-2 py-2 px-2 rounded">
                        First Name
                    </div>
                </div>
            </div>    

        </div>
    </div>
  )
}

export default Scientist