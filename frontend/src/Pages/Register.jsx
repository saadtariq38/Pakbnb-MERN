import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register, reset } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'


function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    password2: ''    
  })

  

  const {name, email, phone, password, password2} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)

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

    if(password !== password2) {
      toast.error('Passwords do not match')
    } else {
        const userData = {
          name,
          email,
          phone,
          password,
        }
        dispatch(register(userData))

      

    }
  }

  if( isLoading ) {
    return <Spinner />
  }
  

  
  return (
    <>
      <section style={{ paddingTop: '3%' }}>
        <h1 className='container h-100 d-flex align-items-center justify-content-center'>
          <FaUser className='mx-2'/>  Register
        </h1>

        <h5 className='container h-100 d-flex align-items-center justify-content-center text-muted mt-3'>Create an account</h5>
      </section>



      <div className="container h-100 d-flex align-items-center justify-content-center mt-1">
        <form id="registerForm" className="align-self-center col-sm-6" onSubmit={onSubmit}>

          <div class="form-floating mb-6 d-flex align-items-center justify-content-center">
            <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" onChange={onChange} />
            <label for="name">Name</label>
          </div>
          <div class="form-floating d-flex align-items-center justify-content-center mt-3" >
            <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={onChange} />
            <label for="email">Email</label>
          </div>
          <div class="form-floating d-flex align-items-center justify-content-center mt-3" >
            <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter contact number" onChange={onChange} />
            <label for="phone">Phone #</label>
          </div>
          <div class="form-floating d-flex align-items-center justify-content-center mt-3">
            <input type="password" class="form-control" id="password" name="password" placeholder="Enter password" onChange={onChange} />
            <label for="password">Password</label>
          </div>
          <div class="form-floating d-flex align-items-center justify-content-center mt-3">
            <input type="password" class="form-control" id="password2" name="password2" placeholder="Confirm password" onChange={onChange} />
            <label for="password">Confirm password</label>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button type="submit" className="btn btn-block btn-dark w-100 py-2" onClick={onSubmit}>Register</button>
          </div>

        </form>
      </div>
    </>
  )
  
}

export default Register