interface IAddress {
    city: string;
    zipcode: string;
    street: string;
}

interface ICompany {
    name: string;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    username: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    address: IAddress;
    phone: string;
    website: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    company: ICompany;
}
