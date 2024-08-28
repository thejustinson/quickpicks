import MainContainer from '@/components/MainContainer'
import SideBar from '@/components/SideBar'
import React from 'react'

const Home = () => {
  return (
    <main className='flex flex-col md:flex-row w-screen'>
      <SideBar/>
      <MainContainer/>
    </main>
  )
}

export default Home