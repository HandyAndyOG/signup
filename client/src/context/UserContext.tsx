import React, { createContext, useState } from 'react'
import { States } from '../Types/types'

export const UserContext = createContext<States>({
    user: '',
    setUser: () => {},
    name: '',
    setName: () => {},
})

const UserProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [user, setUser] = useState('')
    const [name, setName] = useState('')

    return (
        <UserContext.Provider value = {{ user, setUser, name, setName }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider