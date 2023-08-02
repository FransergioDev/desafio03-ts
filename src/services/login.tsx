import { api } from "../api"
import { User } from "../model/User";

export const login = async (email: string, password: string): Promise<{loggedIn: boolean, user?: User}> => {
    const data: User | any = await api
    const emailIsNotValid = (email !== data.email);
    const passwordIsNotValid = (password !== data.password)

    if(emailIsNotValid || passwordIsNotValid ) return { loggedIn: false }


    return { loggedIn: true, user: data }
}
