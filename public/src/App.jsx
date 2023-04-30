import "./index.css"
import AnimeDetailPage from "./pages/AnimeDetailPage"
import LoginPage from "./pages/LoginPage"
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import SearchResultPage from "./pages/SearchResultPage"
import WatchListPage from "./pages/WatchListPage"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { useState,createContext, useEffect} from "react";

export const UsersProvider = createContext()
function App({}) {
  const [userInfo,setUserInfo] = useState('')

 useEffect(()=>{
  (userInfo != 'undefined') && setUserInfo(JSON.parse(localStorage.getItem("currentUser")))
 },[])
  
 useEffect(()=>{
  localStorage.setItem("currentUser",JSON.stringify(userInfo))
 },[userInfo])

 return (
  <div className="app">
    <UsersProvider.Provider value={{users:userInfo,setUsers:setUserInfo}} >
    <NavBar />
    <Routes>
        <Route path= "" element = {<HomePage />} />
        <Route path= "/animeDetail/:id" element = {<AnimeDetailPage />} />
        <Route path= "/srchResult" element = {<SearchResultPage />} />            
        <Route path= "/watchList" element = {<WatchListPage />} />            
        <Route path= "/loginPage" element = {<LoginPage />} />            
        <Route path = "/*" element = {<h1>Not found</h1>} />   
      </Routes>
      <Footer />
    </UsersProvider.Provider>
    
  </div>
 )
}

export default App
