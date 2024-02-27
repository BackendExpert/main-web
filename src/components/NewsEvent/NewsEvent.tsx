// import the all news and event list
import newsevetlist from "./NewsEventList"

const NewsEvent = () => {

  return (
    <div className="lg:px-32 px-8 py-24">
        <h1 className="text-3xl font-semibold text-center">News and Events</h1>
        <div className="">
          {
            newsevetlist.map((news) => (
              <div className="">
                <img src={news.img} alt="" />
              </div>
            ))
          }
        </div>        
    </div>
  )
}

export default NewsEvent