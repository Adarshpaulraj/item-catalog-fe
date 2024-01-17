import { BrowserRouter,Routes,Route } from "react-router-dom"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import Create from "./components/Create"
import Footer from "./components/Footer"
import Men from "./components/Screen/Men"
import ViewById from "./components/common/ViewById"
import Women from "./components/Screen/women"
import Edit from "./components/Edit"
import Blazer from "./components/Screen/Blazer"
import Tops from "./components/Screen/Tops"
import FormalShirt from "./components/Screen/FormalShirt"
import Kurtis from "./components/Screen/Kurtis"

 function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/create"  element={<><Header/><Create/></>}/>
     <Route path="/signup"  element={<SignUp/>}/>
     <Route path="/login"  element={<><Login/></>}/>
     <Route path="/home"  element={<><Header/><Home/></>}/>
     <Route path="/signup"  element={<SignUp/>}/>
     <Route path="/women"  element={<><Header/><Women/></>}/>
     <Route path="/men"  element={<><Header/><Men/></>}/>
     <Route path="/blazer"  element={<><Header/><Blazer/></>}/>
     <Route path="/kurtis"  element={<><Header/><Kurtis/></>}/>
     <Route path="/tops"  element={<><Header/><Tops/></>}/>
     <Route path="/formalshirt"  element={<><Header/><FormalShirt/></>}/>
      <Route path="/edit/:id"  element={<><Header/><Edit/></>}/>
     <Route path="/item/:id"  element={<><Header/><ViewById/></>}/>
     <Route path="/*"  element={<SignUp/>}/>
     <Route path="/dashboard"  element={<><Header/><Dashboard/></>}/>

     </Routes>
    <Footer/>
    </BrowserRouter>
     </>
  )
}

export default App
