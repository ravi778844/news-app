
import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import News from './Component/News';
// import { getDefaultNormalizer } from '@testing-library/react';
import {  BrowserRouter as Router,  Switch,  Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = ()=> {
  const pageSize=5;
 const apiKey=process.env.REACT_APP_NEWS_API                                               

  const [progress, setProgress]=useState(0)

  //  useEffect(()=>{
  //   console.log("fbsdjfkbvsajd")
  // },[progress])

    return (
      <div>
         <Router>
        <NavBar/> 
        <LoadingBar
        color='#f11946'
        progress={progress} 
        
      />
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment"/></Route> 
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology"/></Route> 
        </Switch>
        </Router> 
         
        
      </div>
    )
  
}

export default App


