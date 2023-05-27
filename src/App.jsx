
import './App.css'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Dashboard } from './components/Dashboard'
import { BrowserRouter,Routes ,Route} from 'react-router-dom'
import { Products } from './components/Products'
import { Users } from './components/Users'
import { Categories } from './components/Categories'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route path='/' element = {<Dashboard/>} />
          <Route path='/products' element={<Products/>}/>
          <Route path='/users' element={<Users></Users>}/>
          <Route path='/categories' element={<Categories></Categories>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
