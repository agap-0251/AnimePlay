import "./index.css"
import {Routes,Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoadingContainer from "./components/LoadingContainer"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import { useState,createContext, useEffect,lazy,Suspense} from "react";

const AnimeDetailPage = lazy(() => import("./pages/AnimeDetailPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const WatchListPage = lazy(() => import("./pages/WatchListPage"));

export const UsersProvider = createContext()
function App({}) {
  const [userInfo,setUserInfo] = useState('')

 useEffect(()=>{
  (userInfo != 'undefined') && setUserInfo(JSON.parse(localStorage.getItem("currentUser")))
   
 },[])
  
 useEffect(()=>{
  localStorage.setItem("currentUser",JSON.stringify(userInfo))
  if(userInfo === null) {
    localStorage.setItem("currentUser",JSON.stringify(""))
    setUserInfo("")
  }

 },[userInfo])

 return (
  <div className="app">
    <UsersProvider.Provider value={{users:userInfo,setUsers:setUserInfo}} >
    <NavBar />
    <Suspense fallback = {<LoadingContainer />}>
        <Routes>
            <Route path= "" element = {<HomePage />} />
            <Route path= "/animeDetail/:id" element = {<AnimeDetailPage />} />
            <Route path= "/srchResult" element = {<SearchResultPage />} />            
            <Route path= "/watchList" element = {<WatchListPage />} />            
            <Route path= "/loginPage" element = {<LoginPage />} />            
            <Route path = "/*" element = {<h1>Not found</h1>} />   
          </Routes>
    </Suspense>
      <Footer />
    </UsersProvider.Provider>
    
  </div>
 )
}

export default App
