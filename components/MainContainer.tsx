import Header from "./Header"
import TopGamesGrid from "./TopGamesGrid"

const MainContainer = () => {
  return (
    <div className="w-full md:w-[calc(100vw-230px)] overflow-x-hidden">
        <Header/>
        <TopGamesGrid/>
    </div>
  )
}

export default MainContainer