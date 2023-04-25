
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
 import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'

function Viewpage() {
    let navigate = useNavigate()

    const [user,setUser]= useState({
        name:"",
        email:"",
        address:"",
        mobile:"",
        password:""

    })

    const {id}=useParams();

    useEffect(()=>{
        loadUser()
    },[])

    const loadUser =async ()=>{
        const result =await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)

    }



    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }


    return(

        
        <div className='container'>
            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>User Details</h2>

                <form onSubmit={(e)=>onSubmit(e)}>

                    <div className='card'>
                        <div className='card-header'>
                            Details of user id:{user.id}
                            <ul className = 'list-group list-group-flush'>

                                <li className='list-group-item'>
                                    <b>Name:</b>
                                    {user.name}
                                </li>


                                <li className='list-group-item'>
                                    <b>Email:</b>
                                    {user.email}
                                </li>

                                <li className='list-group-item'>
                                    <b>Address:</b>
                                    {user.address}
                                </li>


                                <li className='list-group-item'>
                                    <b>Mobile:</b>
                                    {user.mobile}
                                </li>


                                <li className='list-group-item'>
                                    <b>Password:</b>
                                    {user.password}
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* <button className='btn btn-primary my-2' to={'/'}> */}
                    <button className='buttonseperate'>
                        Back to Home
                    </button>
                </form>

                </div>
            </div>
        </div>        

    )
}

export default Viewpage
