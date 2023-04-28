import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Test1() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

            const response = await axios.get('http://localhost:8080/users');
            setUsers(response.data);

    };

    return (
        <div>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/viewpg/${user.id}`}>
                            <button>{user.id}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Test1;