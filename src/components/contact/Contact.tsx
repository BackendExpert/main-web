
const Contact = () => {
  return (
    <div className="container mx-auto px-32 py-16 text-[#293352]">
        <h1 className="text-center font-semibold text-4xl">Contact Us</h1>
        <div className="my-8">
            <h2 className="text-2xl font-semibold">Office Location</h2>
            <hr className="mb-4" />

            <div className="lg:grid grid-cols-3 gap-4">
                <div className="">
                    <p className="text-xl pt-4 pb-4 font-semibold">Headquarters</p>
                    <div className="">
                        <p>National Institute of Fundemental Studies</p>
                        <p>Hanthana Road</p>
                        <p>Kandy</p>
                        <p>Sri Lanka</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact