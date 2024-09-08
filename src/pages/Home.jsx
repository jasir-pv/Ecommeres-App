import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import CategoryItem from '../components/CategoryItem'

const Home = () => {
  return (
    <div className='container'>
    <Announcement />
      <Navbar />
      <Slider />
      <Categories />

    </div>
  )
}

export default Home
