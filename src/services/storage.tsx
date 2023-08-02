import { User } from "../model/User";

interface IDIoBank {
    login: boolean;
    user?: User;
}

const dioBank = {
    login: false,
    user: new User()
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    console.log("dioBank", dioBank);
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
