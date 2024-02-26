const TestArray = () => {
    let testArraies = [
        {name: "Jehan", email: "k@123" },
        {name: "kamal", email: "k@123" },
        {name: "Nimal", email: "n@123" },
        {name: "Amara", email: "a@123" },
    ];



  return (
    <div className="px-32 py-20">
        {
            testArraies.map((testArray, index) => {
                if(index == 0){
                    return <p className="text-red-500 text-3xl">{testArray.name}</p>
                }
                else{
                    return <p className="">{testArray.name}</p>
                }
            })
        }
    </div>
  )
}

export default TestArray