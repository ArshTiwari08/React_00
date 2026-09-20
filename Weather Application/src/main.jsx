import { StrictMode } from "react"
import "./index.css"
import Home from "./Component/Home.jsx"
import Login from "./Component/Login.jsx"
import Register from "./Component/Resister.jsx"
import Weather from "./Component/Weather.jsx"
import Layout from "./Layout.jsx"
import ReactDOM from "react-dom/client"
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='Login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='weather' element={<Weather/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
