
import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
 import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { useEffect } from 'react'
import QRCode from 'react-qr-code';


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
        navigate("/testpg")
    }


    return(

        
        <div className='container98'>
            <div className='row'>

                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'><br/>User Details</h2>

                <form onSubmit={(e)=>onSubmit(e)}>

                    <div className='card'>
                        <div className='card-header'>
                            <br/>Details of user id:{user.id}


                            <table className="table1" style={{marginLeft:'80px',marginTop:'25px'}}>

                                <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <div className="tdedit">
                                        <td>{user.name}</td>
                                    </div>

                                </tr>
                                <tr>
                                    <th scope="row">Email </th>
                                    <div className="tdedit">
                                    <td>{user.email}</td>
                                    </div>
                                </tr>
                                <tr>
                                    <th scope="row">Address</th>
                                    <div className="tdedit">
                                    <td>{user.address}</td>
                                    </div>

                                </tr>

                                <tr>
                                    <th scope="row">Mobile</th>
                                    <div className="tdedit">
                                    <td>{user.mobile}</td>
                                    </div>

                                </tr>

                                <tr>
                                    <th scope="row">Password</th>
                                    <div className="tdedit">
                                    <td>{user.password}</td>
                                    </div>
                                </tr>
                                </tbody>
                            </table>



                        </div>
                    </div>

                    {/* <button className='btn btn-primary my-2' to={'/'}> */}

                    {/*<button className='buttonseperate'>*/}
                    {/*    Back to Home1*/}
                    {/*</button>*/}
                    <br/>

                    <Link className="linkbutton"
                          to={`/edituser/${user.id}`}
                    >Edit Profile</Link>

                    <Link className="linkbutton3"
                          to={`/`}
                    >Back to Home</Link><br/>



                </form>

                </div>



                    <div className='container23'>
                        <center>
                            <br />

                            <br />
                            <br />


                            <div style={{marginTop :" -50px"}}>
                                {user.name && (
                                    <QRCode
                                        name={user.name}
                                        title="GeeksForGeeks"
                                        value={user.email}
                                        bgColor={"white"}
                                        size={"150px"}


                                    />
                                )}
                            </div>

                        </center>

            </div>









            </div>
        </div>

    )
}

export default Viewpage
