import { api } from "../api"

export const login = async (email: string, password: string): Promise<boolean> => {
    const data: any = await api
    const emailIsNotValid = (email !== data.email);
    const passwordIsNotValid = (password !== data.password)

    if(emailIsNotValid || passwordIsNotValid ) return false

    return true
}
