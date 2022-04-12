import React, { Component, Fragment } from "react";
import { HashRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Pathfinder from "./pathfinderComponents/pathfinder";
import Home from "./homeComponents/home";
import Seive from "./primeComponents/seive";
import Sort from "./sortComponents/sort";
import Queen from "./queenComponents/queen";
import ConvexHull from "./convexHullComponents/convexHull";
import BinarySearch from "./binarySearchComponent/binarySearch";
import RecursiveSort from "./recursiveSortComponents/recursiveSort";
class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.log(window.innerHeight, "  ", window.innerWidth);
  }

  render() {
    return (
      // <Router basename='/'>
      //     <Switch>
      //         <Route path='/pathfinder'  element={Pathfinder}/>
      //         <Route path='/prime' element={Seive}/>
      //         <Route path='/sort' element={Sort}/>
      //         <Route path='/nqueen' element={Queen}/>
      //         <Route path='/convexhull' element={ConvexHull}/>
      //         <Route path='/binarysearch' element={BinarySearch}/>
      //         <Route path='/recursivesort' element={RecursiveSort}/>
      //         <Route path='/' element={Home}/>
      //     </Switch>
      // </Router>

      <Router>
        <Fragment>
          <Routes>
            <Route path="/pathfinder" element={<Pathfinder/>} />
            <Route path="/prime" element={<Seive/>} />
            <Route path="/sort" element={<Sort/>} />
            <Route path="/nqueen" element={<Queen/>} />
            <Route path="/convexhull" element={<ConvexHull/>} />
            <Route path="/binarysearch" element={<BinarySearch/>} />
            <Route path="/recursivesort" element={<RecursiveSort/>} />
            <Route path="/" element={<Home/>} />
          </Routes>
        </Fragment>
      </Router>
    );
  }
}

export default App;
