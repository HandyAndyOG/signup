import React, { createContext, useState } from 'react'
import { States } from '../Types/types'

export const UserContext = createContext<States>({
    name: '',
    setName: () => {},
    email: '',
    setEmail: () => {},
    addedUser: 0,
    setAddedUser: () => {},
    error: '',
    setError: () => {},
    nameError: '',
    setNameError: () => {},
    emailError: '',
    setEmailError: () => {}
})

const UserProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const [error, setError] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [addedUser, setAddedUser] = useState(0)

    return (
        <UserContext.Provider value = {{ name, setName, email, setEmail, addedUser, setAddedUser, error, setError, nameError, setNameError, emailError, setEmailError}}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider