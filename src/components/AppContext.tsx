import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"
import { User } from "../model/User"

interface IAppContext {
    userName: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setUser: (user: User) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ user, setUser] = useState<User>(new User())

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, user } = JSON.parse(storage)
        const userIsLoggedIn = (login && user !== null && user !== undefined)
        setUser((userIsLoggedIn) ? user : new User())
        setIsLoggedIn(login)
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ userName: user.name || '', isLoggedIn, setIsLoggedIn, setUser }}>
        { children }
      </AppContext.Provider>
    )
}
