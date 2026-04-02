import './App.css'
import Banner from './Components/Banner/Banner'
import Card from './Components/Card/Card'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/NavBar/NavBar'
import Ratting from './Components/Ratting/Ratting'
import WorkFlow from './Components/WorkFlow/WorkFlow'

function App() {


  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Ratting></Ratting>
      <Card></Card>
      <WorkFlow></WorkFlow>
      <Footer></Footer>
    </>
  )
}

export default App
