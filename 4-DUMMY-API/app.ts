import { IUsers, IUser } from './user.interface';

async function getUsers(): Promise<IUsers | null> {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Error response')
        }
        const data: IUsers = await response.json()
        return data;

    } catch(e) {
        if (e instanceof Error) {
            console.error(e.message)
        } else {
            console.error(`Произошла ошибка при получении пользователей - ${e}`)
        }
        return null
    }
}

function assertUser(obj: unknown): asserts obj is IUsers {
    if (typeof obj === 'object' && !!obj && 'users' in obj) {
        return
    }
    throw new Error('Not users');
}

async function load() {
    const data = await getUsers();
    assertUser(data)
    console.log(data.limit)
}

load()