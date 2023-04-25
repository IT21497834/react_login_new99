
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Test1() {

    let navigate = useNavigate()



        const onSubmit=async (e)=>{
            e.preventDefault();
            
            // await axios.post("http://localhost:8080/user",user)
            navigate("/viewpg")
        }


    return (


    

        <form onSubmit={(e)=>onSubmit(e)}>
        <div>

            <button type="Submit" to="/viewpg" >view porfile</button>

            {/* <Link className="btn btn-primary mx-2"
                        to={`/register${user.id}`}>
                        
                    View
             </Link> */}
       
        </div>
        </form>


        // <div class="login-signup">
            
        //         <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/register">Sign Up</Link>
            
        // </div>
    )
}

export default Test1
