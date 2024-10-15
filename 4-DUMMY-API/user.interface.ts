export enum Role {
    ADMIN = 'admin',
    MODERATOR = 'moderator',
    USER = 'user',
}

export type Gender = 'female' | 'male' | 'non-binary miracle'
export type BloodGroup = 'A+'| 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-'

export interface IAddress {
      address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: number,
        },
        country: string
}

export interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: BloodGroup,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: IAddress
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: string,
        name: string,
        title: string,
        address: IAddress,
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: Role
}

export interface IUsers {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}

