
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Content from './components/Content'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'
import Main from './components/Main'
import Jackets from './components/Jackets'
import Jacketss from './components/Jacketss'
import Shirts from './components/Shirts'

import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom"
import Pants from './components/Pants'
function App() {


  return (
    <>
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path = "/" element = {<Main />} />
          <Route path = "/pants" element = {<Pants />} />  
          <Route path = "/jackets" element = {<Jacketss />} />  
          <Route path = "/shirts" element = {<Shirts />} />  
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
