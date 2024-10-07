import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vw-100">
      <form className="border p-4 rounded" style={{ width: '400px', backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">Register</h2>

        <div className="form-group mb-3">
          <label htmlFor="name">Full Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" />
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default App;
