
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductId from './pages/ProductId'
import Register from './pages/Register'
import HeaderNav from './components/shared/HeaderNav'
import Cart from './pages/Cart'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Purcheses from './pages/Purcheses'

function App() {


  return (
  <div> 
    <HeaderNav/>
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/product/:id' element={ <ProductId /> }/>
      <Route path='/register' element={ <Register /> }/>
      <Route path='/login' element={ <Login /> }/>
      <Route element={ <ProtectedRoutes />}>
        <Route path='/cart' element={ <Cart/> }/>
        <Route path='/purchases' element={ <Purcheses/> }/>
      </Route>
    </Routes>
  </div>
  )
}

export default App
