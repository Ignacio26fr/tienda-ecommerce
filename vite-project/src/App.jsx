
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CarWidget from './components/CarWidget/CarWidget'


function App() {
  

  return (
    <>
    <header className='header'>
     <ItemListContainer title="Reffinato"></ItemListContainer>
      <CarWidget></CarWidget> 
     
     
     </header>
     <NavBar></NavBar>
    </>
  )
}

export default App
