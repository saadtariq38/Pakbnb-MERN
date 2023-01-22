import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { logout, reset } from "../features/auth/authSlice"
function Navbar() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user} = useSelector((state) => state.auth)


    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary container-fluid ">
            <div class="container">
                <Link to="/">
                    <img src = "./pakbnb-logo.png" alt = "not" className="nav--pic"/>
                </Link>
                <Link class="navbar-brand title-logo" to="/">Pakbnb</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">My bnbs</Link>
                        </li>
                    </ul>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

                    <ul class="navbar-nav ">
                        {user ? (
                            <li class="nav-item">
                            <button class="btn" onClick={onLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                        ) : (
                            <>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">
                                        <FaSignInAlt /> Login
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/register">
                                    <FaUser /> register
                                    </Link>
                                </li>
                            </>
                        )}
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
  }
  
  export default Navbar