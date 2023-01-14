import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';


const Form = () => {
    const { name, setName } = useContext(UserContext)

  return (
    <form>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <input placeholder='Email'/>
            <input type='checkbox'/>
            <button type='submit'></button>
    </form>
  )
}

export default Form