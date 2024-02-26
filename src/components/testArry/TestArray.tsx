const TestArray = () => {
    let testArraies = [
        {name: "Amara", email: "k@123" },
        {name: "Jehan", email: "k@123" },
        {name: "kamal", email: "k@123" },
        {name: "Nimal1", email: "n@123" },
        {name: "Nimal2", email: "n@123" },
        {name: "Nimal3", email: "n@123" },
        {name: "Nimal4", email: "n@123" },
        {name: "Nimal5", email: "n@123" },
    ];



  return (
    <div className="px-32 py-20">
        {
            testArraies.map((testArray, index) => {
                if(index == 0){
                    return <p className="text-red-500 text-3xl">{testArray.name}</p>
                }
                else{
                    if(index <= 2){
                        return <p className="">{testArray.name}</p>
                    }
                }
            })
        }
    </div>
  )
}

export default TestArray