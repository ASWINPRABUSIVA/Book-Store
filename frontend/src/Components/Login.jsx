import React from 'react';
import './Login.css';

 

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <p>Please enter your details.</p>
        
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>

          <div className="form-options">
            <div>
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign in</button>
          <button type="button" className="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Google icon" />
            Sign in with Google
          </button>
        </form>
        
        <p className="signup-prompt">
          Don't have an account? <a href="/register">Sign up for free!</a>
        </p>
      </div>
      
      <div className="login-image">
        {/* Replace 'image.png' with your actual image URL or import */}
        <img src="path/to/your/image.png"  />
      </div>
    </div>
  );
}

export default Login;
