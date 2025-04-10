import React from 'react'
// import { useUserAuth } from '../../hooks/useUserAuth'
import DashboardLayout from '../../layouts/DashboardLayout';
const Home = () => {
  return (
    <DashboardLayout activeMenu="Dashboard">
      <div className='my-5 mx-auto'>
        Home
      </div>
    </DashboardLayout>
  )
}

export default Home
