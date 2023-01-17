import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { handleSubmit } from '../helperfunctions/handleSubmit'
import { Prop, FormData, FormHandlers } from '../Types/types'


const Form: React.FC<Prop> = ({ setUsers, setLocalstorage }) => {
    const { name, setName, email, setEmail, nameError, setNameError, emailError, setEmailError } = useContext(UserContext)
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const formData: FormData = {
        name: name,
        email: email,
        isChecked: isChecked,
        nameError: nameError,
        emailError: emailError,
      };
      
      const formHandlers: FormHandlers = {
        setName,
        setEmail,
        setUsers,
        setIsChecked,
        setNameError,
        setEmailError,
        setLocalstorage
      };

  return (
    <form className='flex flex-col' onSubmit={(e) => handleSubmit(e, formData, formHandlers)}>
            <input className={nameError ? 'border-solid border-2 border-rose-500 rounded px-2 py-0.5 my-0.5' : 'border-solid border border-slate-400 rounded px-2 py-0.5 my-0.5'} placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required/>
            {nameError ? <p className='text-rose-500'>{nameError}</p> : ''}
            <input className={emailError ? 'border-solid border-2 border-rose-500 rounded px-2 py-0.5 my-0.5' : 'border-solid border border-slate-400 rounded px-2 py-0.5 my-0.5'} placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
            {emailError ? <p className='text-rose-500'>{emailError}</p> : ''}
            <div className='flex flex-row pb-4'>
                <input type='checkbox' checked={isChecked} onChange={() => setIsChecked(!isChecked)} required/><span className='font-medium pl-1'>I agree to the terms</span><span className='text-white'> and I'll bring nice fika every friday ;)</span>
            </div>
            <button className='border-solid border-2 border-[#357edd] bg-[#357edd] rounded text-white w-48 px-1.5 py-0.5 my-0.5 hover:scale-105 transition duration-300' type='submit'>I'm in, sign me up!</button>
    </form>
  )
}

export default Form