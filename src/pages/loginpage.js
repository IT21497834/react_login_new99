import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function Loginpage() {

    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");
    let navigate = useNavigate();

    // const onChange=async (e)=>{
    //
    //     e.preventDefault();
    //     await axios.post("http://localhost:8080/user",user)
    //     navigate("/testpg")
    // }
    // let onChange=(e) => {
    //     setEmail(e.target.value);
    //     setPassword(e.target.value);
    // }


    async function login(e) {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:8080/user/authenticate`, {

                email: email,
                password: password,

            }).then((result) =>
            {
                console.log(result.data);

                if (result.data.authenticated=== false)
                {
                    alert("Incorrect Email or Password");
                }
                else if(result.data.authenticated === true)
                {
                    alert("Login Success");
                    localStorage.setItem("user_id",result.data.user_id)
                    // const userId=response.data.id
                    navigate(`/testpg`);

                }
                else
                {
                    alert("something wrong.try again");
                }
            }, fail => {
                console.error(fail); // Error!
            });
        }

        catch (err) {
            alert(err);
        }

    }


    return (

        <div className="container">
            <div className="forms">

                <div className="form login">
                    <span className="title">Login</span>
                    <hr></hr>

                    {/*<form onSubmit={(e)=>onSubmit(e)}>*/}
                        <div className="input-field">
                            <input type="text" placeholder="Enter your email" required

                        //     onSubmit={(e) =>onChange=(e)}
                                   value={email}
                                   onChange={(e) => {
                                       setEmail(e.target.value);
                                   }
                                   }
                            />

                        </div>


                        <div className="input-field">
                            <input type="password" className="password" placeholder="Enter your password" required

                            value={password}

                                   onChange={(e) => {
                                       setPassword(e.target.value);
                                   }
                                   }
                            />
                        </div>

                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="logCheck" />
                                <label for="logCheck" className="text">Remember me</label>
                            </div>
                            
                            <div className='FP'>
                            <a href="#" className="text">Forgot password?</a>
                            </div>

                        </div>

                        <div className="input-field button">
                            {/* <input type="button" value="Login" /> */}
                            <button to="/testpg" onClick={login}>Login</button>

                        </div>
                    {/*</form>*/}

                    <div className="login-signup">
                        <span className="text">Not a member?
                            {/* <a href="" class="text signup-link">Signup Now</a> */}
                            <Link id="button-1" className="btn btn-dark btn-outline-primary" to="/register">Sign Up</Link>
                        </span>
                    </div>
                </div>


            </div>
        </div >

    )
}

export default Loginpage
