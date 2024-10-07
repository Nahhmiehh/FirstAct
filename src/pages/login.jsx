import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm () {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="border p-4 rounded" style={{ width: '400px', backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">Login</h2>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" required />
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>

        <p className="text-center mt-3">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
