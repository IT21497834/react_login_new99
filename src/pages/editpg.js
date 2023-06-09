import React,{useEffect, useState} from 'react'
import axios from "axios"
import {Link, useNavigate, useParams } from 'react-router-dom'

export default function Editpg() {

    let navigate = useNavigate()

    const {id}=useParams()

    const [user,setUser]=useState ({
        name:"",
        password:"",
        email:"",
        address:"",
        mobile:"",

    })

    const{name,password,email,address,mobile}=user

    const onInputChange=(e)=>{

        setUser({...user ,[e.target.name]:e.target.value});

    }

    useEffect (()=>{
        loadUser();

    },[])

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    }

    const loadUser =async ()=>{
        const result =await  axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    return (
        <div className='container99'>
            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'><br/>Edit User</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className='mb-3'><br/>
                            <label htmlFor='Name' className='form-label'>
                                Name<br/>
                            </label>
                            <input
                                type={'text'}
                                className='form-control99'
                                placeholder='Enter Your Name'
                                name='name'
                                value={name}
                                onChange={(e)=>onInputChange(e)}
                            />


                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Password' className='form-label'>
                                <br/>Password<br/>
                            </label>
                            <input
                                type={'text'}
                                className='form-control99'
                                placeholder='Enter Your Password'
                                name='password'
                                value={password}
                                onChange={(e)=>onInputChange(e)}
                            />


                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                <br/>Email<br/>
                            </label>
                            <input
                                type={'text'}
                                className='form-control99'
                                placeholder='Enter Your Email'
                                name='email'
                                value={email}
                                onChange={(e)=>onInputChange(e)}
                            />

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Address' className='form-label'>
                                <br/>Address<br/>
                            </label>
                            <input
                                type={'text'}
                                className='form-control99'
                                placeholder='Enter Your Address'
                                name='address'
                                value={address}
                                onChange={(e)=>onInputChange(e)}
                            />

                        </div>

                        <div className='mb-3'>
                            <label htmlFor='Mobile' className='form-label'>
                                <br/>Mobile Number<br/>
                            </label>
                            <input
                                type={'text'}
                                className='form-control99'
                                placeholder='Enter Your Mobile Number'
                                name='mobile'
                                value={mobile}
                                onChange={(e)=>onInputChange(e)}
                            /><br/>

                        </div>





                        {/*<div>*/}
                        {/*    <input type = "age" name="age" >*/}
                        {/*        <select>20</select>*/}
                        {/*        <select>21</select>*/}
                        {/*        <select>22</select>*/}
                        {/*    </input>*/}
                        {/*</div>*/}

                        <button type='submit' className='buttonseperate'>Submit</button><br/>
                        <Link className='linkbutton' to="/"> Cancel</Link>

                    </form>
                </div>

            </div>

        </div>
    )
}

