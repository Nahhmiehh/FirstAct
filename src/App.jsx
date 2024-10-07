import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from'./pages/registration';
import LoginForm from'./pages/login';

function App () {
  return (
    <div>
      <RegistrationForm />
      <LoginForm />
    </div>
  );
};

export default App;
