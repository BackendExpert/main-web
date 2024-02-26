const TestArray = () => {
    let testArraies = [
        {name: "kamal", email: "k@123", id: 1,},
        {name: "Nimal", email: "n@123", id: 2},
        {name: "Amara", email: "a@123", id: 3},
        {name: "Saman", email: "s@123", id: 4},     
    ];



  return (
    <div className="px-32 py-20">
        {
            testArraies.map((testArray) => {
                if(testArray.id == 1){
                    return (
                        <div className="text-red-500">{testArray.name}</div>
                    );
                }
                return (
                    <div className="text-blue-500">{testArray.name}</div>
                );
            })
        }
    </div>
  )
}

export default TestArray