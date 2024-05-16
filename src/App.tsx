import { useEffect, useState } from "react"
import NavBar from "./scenes/navbar"
import { SelectedPage } from "./shared/Types"
import HomePage from "./scenes/home"
import Benefits from "./benefits"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // When the component unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="app text-3xl font-bold ">
      <NavBar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <HomePage setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
    </div>

  )
}

export default App
