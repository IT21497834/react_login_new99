import React, { useEffect, useState , } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function Test1() {
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {

        let loggeduserid = localStorage.getItem("user_id")
        console.log("userid"+loggeduserid)

        setUserId(parseInt(loggeduserid))
            const response = await axios.get('http://localhost:8080/users');
            setUsers(response.data);


    };

    return (

        <div>


                            <ul>
                                {users.filter(user=>user.id === userId).map(user => (
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