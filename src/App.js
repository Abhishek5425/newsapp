import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {
//   apiKey= process.env.REACT_APP_NEWS_API
//   state = {
//     progress:0
//   }

  // setProgress = (progress)=>{
  //   setState({progress: progress})
  // }
  const App = ()=> {
    // eslint-disable-next-line
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)
    return (
      <div>
         <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize='5' country="in" category="general"/>} > </Route> 
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pagesize='5' country="in" category="business"/>} > </Route> 
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize='5' country="in" category="entertainment"/>} > </Route> 
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pagesize='5' country="in" category="general"/>} > </Route> 
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pagesize='5' country="in" category="health"/>} > </Route> 
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pagesize='5' country="in" category="science"/>} > </Route> 
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pagesize='5' country="in" category="sports"/>} > </Route> 
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize='5' country="in" category="technology"/>} > </Route> 
        </Routes>
        </Router>
      </div>
    )
  }

  export default App;