import { useState } from 'react';
import axios from 'axios';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword]= useState('');
    const [error, setError] = useState ('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = { 'Project-ID': 'ab293aa5-2bd0-4d39-a844-1fdaaa3b9f90', 'User-Name': username, 'User-Secret': password }

        try {
           await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload(); 

        } catch (error) {
            setError('Oops, no mathcing Credentials found silly')

        }


    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Welcome to Jeffsenger Chat App!</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className ="input" placeholder="Username" required />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className ="input" placeholder="Password" required />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Chat Away!</span>
                            </button>
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>
                </div>
            </div>
    )
}

export default LoginForm;