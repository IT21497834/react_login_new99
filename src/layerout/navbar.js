import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';

export default function

    () {




    return (
        <div className="nav">
            <div className="nav1">

                <div className="nav2">


                    <div className="nav-contain">

                        <Link className="nav3" to="/testpg">
                            <b>FRESCO</b>
                        </Link>

                        <a className="nav4" href="https://www.youtube.com/">
                            Home
                        </a>

                        <Link className="nav5" to="/home_room">
                            Room Booking
                        </Link>

                        <Link className="nav6" to="/home_hall">Hotel Booking</Link>

                    </div>
                </div>
            </div>

        </div>
    )
}