import React,{useState} from 'react'
import { Button, Col, Input,Row } from 'reactstrap'
import { useNavigate } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('password', password)
  const navigate = useNavigate()


  const handleChange = (e,type)=>{
    switch (type) {
      case "email":
        setUsername(e.target.value)
        break;
      case "password":
        setPassword(e.target.value)
        break;
      default:
    }
  }

  const handleSubmit=()=>{
    console.log("hello") 
    localStorage.setItem('password',password)
    navigate("/dashboard")

  }
  return (
    <> 
    <div className='login-container'>
    <div className='login'>
      <Row className='w-100'>
        <Col md={12} xl={12} >
        <h1>Login Page</h1>
        <label htmlFor="userName" className='mb-3'>Email Address</label>
        <Input type='text'  className='mb-3' onChange={(e)=>handleChange(e,"email")} value={username} />
        <label htmlFor="password" className='mb-3'> password</label>
        <Input type='password' onChange={(e)=>handleChange(e,"password")} value={password}/> 
        <Button color="primary" className='mt-4  w-100 ' onClick={handleSubmit}> Submit</Button>
        </Col>
      </Row>
      </div> 
    </div>
    </>
  )
}

export default Login
