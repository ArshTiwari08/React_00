import UserConstextProvider from "./context/UserContextProvider"
import Login from './components/Login'
import Profile from './components/Profile'
function App(){
    return(
        <UserConstextProvider>
        <h1>simple line</h1>
        <Login/>
        <Profile/>
        </UserConstextProvider>
    )
}

export default App