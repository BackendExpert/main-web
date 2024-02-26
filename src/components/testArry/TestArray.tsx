const TestArray = () => {
    let testArraies = [
        {name: "kamal", email: "k@123" },
        {name: "Nimal", email: "n@123" },
        {name: "Amara", email: "a@123" },
        {name: "Saman", email: "s@123" },     
    ];



  return (
    <div className="px-32 py-20">
        {
            testArraies.map((testArray, index) => {
                if(index == 0){
                    return <p className="">{testArray.name}</p>
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