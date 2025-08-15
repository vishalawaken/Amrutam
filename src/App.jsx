import React from 'react'
import Announcement_Bar from './components/Announcement_Bar'
import Navbar from './components/Navbar'
import Search_Bar from './components/Search_Bar'
import Categories from './components/categories'
const App = () => {
  return (
    <div>
      <Announcement_Bar></Announcement_Bar>
      <Navbar></Navbar>
      <Search_Bar></Search_Bar>
      <Categories></Categories>
      </div>
  )
}

export default App