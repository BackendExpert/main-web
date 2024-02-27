// import the all news and event list
import newsevetlist from "./NewsEventList"

const NewsEvent = () => {

  return (
    <div className="lg:px-32 px-8 py-24">
        <h1 className="text-3xl font-semibold text-center">News and Events</h1>
        
        {
            newsevetlist.map((news) => (
                <div className="">
                    <p className="">{news.title}</p>
                </div>
            ))
        }
    </div>
  )
}

export default NewsEvent