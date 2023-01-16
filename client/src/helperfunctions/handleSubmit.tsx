import React from "react";

export const handleSubmit = (e: React.FormEvent<HTMLFormElement>, name: string, email: string, setUsers: React.Dispatch<React.SetStateAction<string[] | null>>, setName: React.Dispatch<React.SetStateAction<string>>, setEmail: React.Dispatch<React.SetStateAction<string>>, setIsChecked: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.preventDefault();
    if(name && email) {
        fetch('http://localhost:8080/api/', {
                      method: 'POST',
                      headers: {
                          'Content-type' : 'application/json'
                      },
                      body: JSON.stringify({username: name, useremail: email})
                  }).then(response => response.json())
                  .then(data => setUsers(data.team))
                  .catch(error => console.log(error))
    }
    setName('');
    setEmail('');
    setIsChecked(false)
}