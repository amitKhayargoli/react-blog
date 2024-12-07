import bg from './img/bg.png';
import './Login.css';



function Login(){
    return <div className="container">
    <div className="img-div">
      <img src={bg} alt="" />
    </div>

    <div className="login-form">
      <form action="">
        <h3>Log in to your account</h3>

        <input
          type="text"
          placeholder="Enter your Email Address"
          name="email"
          id="email"
        />


        <input
          type="password"
          placeholder="Password"
          name="pass"
        />

        <a href="">Forgot Password?</a>

        <button className="login">Log In</button>

        <button className="google">
        Log In
          with Google
        </button>
      </form>
    </div>
  </div>
}

export default Login;