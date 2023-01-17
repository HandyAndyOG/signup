import React, { useState, useEffect } from 'react'
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState<string[] | undefined>()
    const [localstorage, setLocalstorage] = useState<string | undefined>()

    useEffect(() => {
        if(users) {
            localStorage.setItem('users', JSON.stringify(users || []));
        }
        const localData = JSON.parse(localStorage.getItem('users')!) as string[];
        if (localData) {
            setUsers(localData)
        } else {
        const fetchUsers = async () => {
            try {
                const data = await fetch('http://localhost:8080/api/')
                const response = await data.json()
                setUsers(response.team)
                localStorage.setItem('users', JSON.stringify(response.team))
            } catch (err) {
                console.log(err)
            }
        }
        fetchUsers()
        }
    }, [localstorage])
    
  return (
    <section className='container flex h-screen'>
        <article className='bg-cogs flex justify-center flex-col w-64'>
            <div className='flex flex-col text-5xl font-bold text-white pb-5 self-center'><span>Join</span><span>the</span><span>team</span></div>
            <div className='flex flex-col justify-center self-center' >{users ? users.map((user: string) => <li className='text-white' key={uuidv4()}>{user}</li>) : 'no users'}</div>
        </article>

        <div className='flex flex-col px-20 justify-center gap-1'>
            <h2 className='font-semibold text-2xl mb-10'>Register</h2>
            <h3 className='font-semibold text-xl mb-2'>Team player - Be positive - Beat yesterday</h3>
            <p className='font-light text-slate-600 text-sm mb-1'>Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
            <Form setUsers={setUsers} setLocalstorage={setLocalstorage}/>
        </div>
    </section>
  )
}

export default Home