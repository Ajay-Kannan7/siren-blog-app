import TechPage from './components/tech/tech';
import HomePage from './components/home/home';
import SportsPage from './components/sports/sports';
import HollywoodPage from './components/hollywood/hollywood';
import FoodPage from './components/food/food';
import FitnessPage from './components/fitness/fitness';
import TechBlogPage from './components/blog/techblog';
import SportsBlogPage from './components/blog/sportsblog';
import FoodBlogPage from './components/blog/foodblog';
import HollywoodBlogPage from './components/blog/hollywoodblog';
import FitnessBlogPage from './components/blog/fitnessblog';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons'
import "./_common.scss";
import dataJson from "./components/alldata.json"
import homeJson from "./components/home/homedata.json"
import { BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';

function App() {

  let [iconValue,iconChange]=useState({
    initialValue:faBars
  });

  function handleClick(){
    let navBox=document.querySelector(".NavBarLogo nav");
    navBox.classList.toggle("displayOn")
    iconChange(()=>{
      if(iconValue.initialValue===faBars){
        return{
          initialValue:faXmark
        }
      }
      else if(iconValue.initialValue===faXmark){
        return{
          initialValue:faBars
        }
      }
    })
  }

  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
      <div className="NavBarLogo">
        <h1 className="mainLogo"><span className="rotateLogo">The</span> Siren</h1>
        <FontAwesomeIcon icon={iconValue.initialValue} onClick={handleClick} className="hamburger-menu"/>
        <nav>
          <NavLink className="navlinks" to="/">Home</NavLink>
          <NavLink className="navlinks" to="/category/technology">Tech</NavLink>
          <NavLink className="navlinks" to="/category/sports">Sports</NavLink>
          <NavLink className="navlinks" to="/category/hollywood">Hollywood</NavLink>
          <NavLink className="navlinks" to="/category/food">Food</NavLink>
          <NavLink className="navlinks" to="/category/fitness">Fitness</NavLink>
        </nav>
        <hr />
      </div>
      <Routes>
        <Route path="/" element={<HomePage data={homeJson}/>}></Route>
        <Route path="/category/technology" element={<TechPage data={dataJson}/>}></Route>
        <Route path="/category/technology/:id" element={<TechBlogPage data={dataJson}/>}></Route>
        <Route path="/category/sports" element={<SportsPage data={dataJson}/>}></Route>
        <Route path="/category/sports/:id" element={<SportsBlogPage data={dataJson}/>}></Route>
        <Route path="/category/hollywood" element={<HollywoodPage data={dataJson}/>}></Route>
        <Route path="/category/hollywood/:id" element={<HollywoodBlogPage data={dataJson}/>}></Route>
        <Route path="/category/food" element={<FoodPage data={dataJson}/>}></Route>
        <Route path="/category/food/:id" element={<FoodBlogPage data={dataJson}/>}></Route>
        <Route path="/category/fitness" element={<FitnessPage data={dataJson}/>}></Route>
        <Route path="/category/fitness/:id" element={<FitnessBlogPage data={dataJson}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
