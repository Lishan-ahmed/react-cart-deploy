import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
    const handleAddBookmarks = blog =>{
      console.log('blog')
    }

  return (
    <>
     
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto'>
      <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
      <Bookmarks></Bookmarks>
      </div>
      
    </>
  )
}

export default App
