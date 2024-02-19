import IonIcon from "@reacticons/ionicons"

const Scientist = () => {
  return (
    <div className="container mx-auto px-32 lg:py-20">
        <h1 className="text-3xl font-semibold text-center">Scientists</h1>

        <div className="py-4">
            <div className="lg:grid grid-cols-5 gap-4">
                <div className="">
                    <p className="font-semibold">Sort by</p>
                    <div className="border my-2 py-2 px-2 rounded flex justify-between">
                        <p className="">First Name</p>
                        <p className="text-xl pt-0"><IonIcon name="caret-down"></IonIcon></p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold">Order</p>
                    <div className="border my-2 py-2 px-2 rounded flex justify-between">
                        <p className="">Ascending [A-Z]</p>
                        <p className="text-xl pt-0"><IonIcon name="caret-down"></IonIcon></p>
                    </div>
                </div>
                <div className="">
                    <button className="bg-[#293352] px-8 py-2 text-white rounded-3xl mt-9 ml-2">
                        Apply
                    </button>
                </div>
            </div>    

        </div>
    </div>
  )
}

export default Scientist