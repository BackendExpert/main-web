const TestArray = () => {
    let testArraies = [
        {name: "kamal", email: "k@123", id: 1},
        {name: "Nimal", email: "n@123", id: 2},
        {name: "Amara", email: "a@123", id: 3},
        {name: "Saman", email: "s@123", id: 4},
     
    ];
  return (
    <div className="px-32 py-20">
        {
            testArraies.map((textArray) => (
                <div className="">
                    <p className="font-bold text-3xl">{textArray.name}</p>
                    <p className="">{textArray.email}</p>
                </div>
            ))
        }
    </div>
  )
}

export default TestArray