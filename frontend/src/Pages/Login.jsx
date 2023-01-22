import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {isError, isSuccess, isLoading,  message, user} = useSelector((state) => state.auth)

  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if(isLoading) {
    <Spinner />
  }


  return (
    <>
      <section style={{ paddingTop: '3%' } }>
        <h1 className='container h-100 d-flex align-items-center justify-content-center'>
          <FaSignInAlt className='me-2'/>  Login
        </h1>

        <h5 className='container h-100 d-flex align-items-center justify-content-center text-muted mt-3'>Login to your account</h5>
      </section>



      <div className="container h-100 d-flex align-items-center justify-content-center mt-1">
        <form id="loginForm" className="align-self-center col-sm-6" onSubmit={onSubmit}>
          <div class="form-floating d-flex align-items-center justify-content-center" >
            <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={onChange} />
            <label for="email">Email</label>
          </div>   
          <div class="form-floating d-flex align-items-center justify-content-center mt-3">
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" onChange={onChange} />
            <label for="password">Password</label>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="submit" className="btn btn-block btn-dark w-100 py-2">Login</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Login