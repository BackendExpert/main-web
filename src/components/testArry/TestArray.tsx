const TestArray = () => {
    let testArraies = [
        {name: "Amara", email: "k@123" },
        {name: "Amara", email: "k@123" },

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
                    for(var i=0; i <= testArraies.length; i++){
                        <p className="">{i}</p>
                    }
                }
            })
        }
    </div>
  )
}

export default TestArray