import { FormData, FormHandlers } from '../Types/types'

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data: FormData, handlers: FormHandlers) => {
    e.preventDefault();
    if(data.name && data.email) {
        if (data.name.match(/\d|[^a-zA-Z0-9]/)) {
            handlers.setNameError('Error: Name can not contain numbers or special characters')
            return;
        }
        handlers.setNameError('')
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email)) {
            handlers.setEmailError('Error: Must be valid email address')
            return;
        }
        handlers.setEmailError('')
        fetch('http://localhost:8080/api/', {
                      method: 'POST',
                      headers: {
                          'Content-type' : 'application/json'
                      },
                      body: JSON.stringify({username: data.name, useremail: data.email})
                  }).then(response => response.json())
                  .then(data => handlers.setUsers(data.team))
                  .then(() => handlers.setLocalstorage(data.name))
                  .catch(error => console.log(error))
    }
    handlers.setName('');
    handlers.setNameError('');
    handlers.setEmailError('');
    handlers.setEmail('');
    handlers.setIsChecked(false);
}