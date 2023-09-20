import React from 'react'
import Header from '../component/Header'
import { Routes , Route} from 'react-router-dom'
import Dashboard from './Dashboard'

export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
     <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  )
}
