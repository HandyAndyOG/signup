import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { handleSubmit } from '../helperfunctions/handleSubmit'
import { Prop } from '../Types/types'


const Form: React.FC<Prop> = ({ setUsers }) => {
    const { name, setName, email, setEmail } = useContext(UserContext)
    const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <form className='flex flex-col' onSubmit={(e) => handleSubmit(e, name, email, setUsers, setName, setEmail, setIsChecked)}>
            <input className='border-solid border border-slate-400 rounded px-2 py-0.5 my-0.5' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
            <input className='border-solid border border-slate-400 rounded px-2 py-0.5 my-0.5' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} required/><span className='font-medium'>I agree to the terms</span><span className='text-white'> and I'll bring nice fika every friday ;)</span>
            <button className='border-solid border-2 border-[#357edd] bg-[#357edd] rounded text-white w-48 px-1.5 py-0.5 my-0.5 hover:scale-105 transition duration-300' type='submit'>I'm in, sign me up!</button>
    </form>
  )
}

export default Form