export class User {
    email: string;
    password: string;
    name: string;
    balance: number;
    id: string;

    constructor(
        email?: string,
        password?: string,
        name?: string,
        balance?: number,
        id?: string
    ){
        this.email = email||'';
        this.password = password || '';
        this.name = name || '';
        this.balance = balance || 0;
        this.id = id || '';
    }
}