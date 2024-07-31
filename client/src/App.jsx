import {   Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Contact } from "./pages/home/Contact"
import { Layout } from "./component/Layout"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminSignup } from "./pages/admin/AdminSignup"
import { Dashboard } from "./pages/admin/Dashboard"

function App() {

  return (
    <>
      
        <Routes >
            <Route exact element={<Layout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="contact" element={<Contact/>}/>
            </Route>
        </Routes>
        <Routes>
          <Route path="/admin" exact>
            <Route path="login" element={<AdminLogin/>}/>
            <Route path="signup" element={<AdminSignup/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
     
    </>
  )
}

export default App
