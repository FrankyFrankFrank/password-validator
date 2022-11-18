import './styles.css';
import React, { useState } from 'react';

const App = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    password: '',
    rules: [
      {
        id: 1,
        isValid: false,
        regex: /(?=.{8,})/,
        message: 'Password must be at least 8 characters long'
      },
      {
        id: 2,
        isValid: false,
        regex: /\d/,
        message: 'Password must contain at least one number'
      },
      {
        id: 3,
        isValid: false,
        regex: /[!@#$%^&*]/,
        message: 'Password must contain at least one special character'
      }
    ]
  });

  const handlePasswordChange = e => {
    const { value } = e.target;
    const rules = [...passwordValidation.rules];
    const updatedRules = rules.map(rule => {
      rule.isValid = rule.regex.test(value);
      return rule;
    });

    setPasswordValidation({
      ...passwordValidation,
      password: value,
      rules: updatedRules
    });
  };

  const getAllFailingRules = () => {
    return passwordValidation.rules.filter(rule => !rule.isValid);
  };

  return (
    <div className='p-4'>
      <label for="password">Password</label>
      <input
        id="password"
        className={'border'}
        type={'password'}
        value={passwordValidation.password}
        onChange={handlePasswordChange}
      />
      <ul>
        {getAllFailingRules().map(rule => (
          <li
            key={rule.id}
          >{rule.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
