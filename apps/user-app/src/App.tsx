import { Homepage } from '@repo/ui/homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Homepage />} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/signup' element={<Signup/>} /> 
      </Routes>
    </BrowserRouter>

  )
}
