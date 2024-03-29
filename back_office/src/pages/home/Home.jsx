import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from '../../components/widget/Widget'
import Feature from '../../components/feature/Feature'
import DemandsPerUserBarChart from '../../components/chart/Chart'
import { getRecruteursIds } from '../../data/users'

import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


export async function loader(){
  const data = await getRecruteursIds()

  return { data }
}

const Home = () => {
  const {data} = useLoaderData()
  console.log(data)
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type='users' />
            <Widget type='orders' />
            <Widget type='earnings' />
            <Widget type='balance' />
          </div>
          <div className="charts">
            <Feature />
            <DemandsPerUserBarChart userIds={[data]} />
          </div>
        </div>
    </div>
  )
}

export default Home