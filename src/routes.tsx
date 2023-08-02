import { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import { AppContext } from "./components/AppContext"
import Conta from "./pages/Conta"
import ContaInfo from "./pages/ContaInfo"
import Home from "./pages/Home"
import UserInfo from "./pages/UserInfo"

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return(
        <Routes>
            <Route path='/' element={ isLoggedIn ? <Conta /> : <Home/> } />
            <Route path='/conta/:id' element={ isLoggedIn ? <Conta /> : <Home/> } />
            <Route path='/infoconta' element={ isLoggedIn ? <ContaInfo /> : <Home/> }/>
            <Route path='/infouser' element={ isLoggedIn ? <UserInfo /> : <Home/> }/>
        </Routes>
    )
}

export default MainRoutes
