import {   Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Contact } from "./pages/home/Contact"
import { Layout } from "./component/Layout"
import { AdminLogin } from "./pages/admin/AdminLogin"
import { AdminSignup } from "./pages/admin/AdminSignup"
import { Dashboard } from "./pages/admin/Dashboard"
import { StudentSignUp } from "./pages/students/StudentSignUp"
import {  StudentNavbar } from "./pages/students/StudentNavBar"
import { StudentResult } from "./pages/students/StudentResult"
import { StudentAttendance } from "./pages/students/StudentAttendance"
import StudentRoutin from "./pages/students/StudentRoutin"
import { SelectRoll } from "./pages/home/SelectRoll"

function App() {

  return (
    <>
      
        <Routes >
            <Route exact >
              <Route path="/" element={<Home/>}/>
              <Route path="/select-roll" element={<SelectRoll/>}/>
            <Route path="admin-login" element={<AdminLogin/>}/>
            <Route path="admin-signup" element={<AdminSignup/>}/>
            <Route path="student-signup" element={<StudentSignUp/>}/>
            <Route path="student-login" element={<AdminLogin/>}/>
            </Route>
        </Routes>
        <Routes>
          <Route path="/admin" exact>
            <Route path="dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
        <Routes>
          <Route path="/student" exact element={<StudentNavbar/>}>
            <Route path="result" element={<StudentResult/>}/>
            <Route path="attendance" element={<StudentAttendance/>}/>
            <Route path="routin" element={<StudentRoutin/>}/>
          </Route>
        </Routes>
     
    </>
  )
}

export default App
