import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar'
import Dropdown from './Dropdown'
import Things from './Things'
import Images from './Images'

const Main = () => {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Nav/>
      <SearchBar/>
      <Dropdown/>
      <Things/>
      <Images/>
    </div>
  )
}

export default Main
