import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import './Home.css'

const Home = () => {
    const { error, setError, addedUser } = useContext(UserContext)
    const [users, setUsers] = useState<string[] | null>(null)

    useEffect(() => {
        console.log('in effect')
        const fetchUsers = () => {
            fetch('http://localhost:8080/api/')
                .then(response => response.json())
                .then(data => setUsers(data.team))
                .catch(error => setError(error))
        }
        fetchUsers()
    }, [])

  return (
    <section className='container flex h-screen'>
        <article className='bg-cogs flex justify-center flex-col w-64'>
            <div className='flex flex-col text-5xl font-bold text-white pb-5 self-center'><span>Join</span><span>The</span><span>Team</span></div>
            <div className='flex flex-col justify-center self-center' >{users ? users.map((user: string) => <li className='text-white' key={uuidv4()}>{user}</li>) : ''}</div>
        </article>

        <div className='flex flex-col px-20 justify-center gap-1'>
            <h2 className='font-semibold text-2xl mb-5'>Register</h2>
            <h3 className='font-semibold text-xl mb-2'>Team player - Be positive - Beat yesterday</h3>
            <p className='font-light text-slate-500 text-sm mb-1'>Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
            <Form setUsers={setUsers}/>
        </div>
    </section>
  )
}

export default Home