import React from 'react';
import LineChartBench from './components/LineChartBench/LineChartBench';
import LineChartShoulder from './LineChartShoulder/LineChartShoulder';
import {Routes,Route,Link} from "react-router-dom";
import './App.css'



const App = () => {
  return(
    <>
    <nav className='nav'>
        <ul className='nav_list'>
          <li><Link to="/" className='Bench_list'>Bench</Link></li>
          <li><Link to="/shoulder" className='Shoulder_list'>Shoulder</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LineChartBench/>} />
        <Route path="/shoulder" element={<LineChartShoulder/>} />
      </Routes>
    </>
  )
}


export default App