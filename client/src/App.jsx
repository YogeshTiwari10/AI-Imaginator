import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { logo2 } from './assets'
import { Home, CreatePost } from './pages'

const App = () => {
  return (
    <BrowserRouter>

      <header className='w-full flex justify-between item-center bg-white
    sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>

        <Link to="/" className='flex '>
          <img src={logo2} alt='logo' className='w-10 object-contain' />
          <p className='mt-2 ml-4 font-bold'> AI Imaginator</p>
        </Link>

        <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>

      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        
      </main>

    </BrowserRouter>
  )
}

export default App