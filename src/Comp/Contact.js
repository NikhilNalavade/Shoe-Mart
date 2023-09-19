import React, { useState } from 'react'
import '../contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Massage: ''
        }
    )

    let name, value
    const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...users, [name]: value})
        }

    const senddata = async (e) =>
    {
        const{ Name, Email, Subject, Massage} = users
        e.preventDefault();
        const option = {
            method: 'POST',
            headers: {
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Massage
            })
        }
        const res = await fetch('https://shoe-mart-contact-default-rtdb.firebaseio.com/Massage.json', option)
        console.log(res)
        if(res)
        {
            alert("Your Message Sent")
        }
        else
        {
            alert("Error")
        }
    }

    
  return (
    <>
    <div className='contact_container'>
        <div className='contant'>
            <h2># Contact us    </h2>
            <div className='form'>
                <form method='POST'>
                    <input type='text' name='Name' value={users.Name} placeholder='Enter Your Name' required autoComplete='off' onChange={data}></input>
                    <input type='email' name='Email' value={users.Email} placeholder='Enter Your E-mail' required autoComplete='off' onChange={data}></input>
                    <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data}></input>
                    <textarea name='Massage' value={users.Massage} placeholder='Enter Your Opinion' autoComplete='off' onChange={data}></textarea>
                    {
                        isAuthenticated ?
                        <button type='submit' onClick={senddata}>Send</button>
                        : <button type='submit' onClick={() => loginWithRedirect()}>Send</button>
                    }
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact