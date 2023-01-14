import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import Form from './Form';

const Home = () => {
    const { user, setUser } = useContext(UserContext)

  return (
    <section>
        <aside>Join the team</aside>
        <div>
            <h2>Register</h2>
            <h3>Team player - Be positive - Beat yesterday</h3>
            <p>Together we re-define the experience of online gaming through gamification and novel technical solutions.</p>
        </div>
        <Form />
    </section>
  )
}

export default Home