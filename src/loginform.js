function LoginForm(){

    return(
        <div className='Login-container'>
        <img src='/small.png' alt='this is small' className="small image"/>
        <h2 className="heading">Login to Your Account</h2>
        <p className="tagline">See what is going on with your business</p>
        <button className="btn btn-secondary w-100 mt-4 p-2">Continue with Google</button>
        <p className="login-divider">------------- or Sign in with Email ------------- </p>
        <div className='input-container'>
            <div>
        <label>Email</label>
        <input type="email" placeholder="RQ@gmail.com" className="form-control w-100"/>
        </div>
        <div className="mt-3">
        <label>Password</label>
        <input type="password" placeholder="******"  className="form-control"/>
        </div>
        <button className="btn btn-primary w-100 mt-3">Login</button>
        </div>
        <div className='check'>
            <div>
            <input type='checkbox' className='checkbox'/> <label>Remember me</label></div>
            <span>forgot password?</span>
        </div>
        
        <p className="mt-5">Not registered yet?<span href='#' className="link-primary">Create an account</span></p>
        </div>
    )
}

export default LoginForm;