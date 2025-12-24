// import "./login.css"
import { useNavigate } from "react-router-dom"
export default function Login() {
  const navigate = useNavigate()  
  return (
    <>
    <div className='loginCard'>
      <h1>Hapening Now</h1>
      <h2>Join today.</h2>
      <button>Sign up with Google</button>
      <button>Sign up with Channeli</button>
      <h3>-------------OR------------</h3>
      <button>Create account</button>
      <div className='footer'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</div>
      <h2>Already have an account?</h2>
      <button  onClick={()=>navigate("Dashboard")}>Login</button>

    </div>
    </>

  )
}
 