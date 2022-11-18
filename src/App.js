import './styles.css';
import React, { useState } from 'react';

const App = () => {
  const [passwordValidation, setPasswordValidation] = useState({
    password: '',
    rules: [
      {
        id: 1,
        name: 'minLength',
        value: 8,
        isValid: false,
        message: 'Password must be at least 8 characters long'
      },
      {
        id: 2,
        name: 'hasNumber',
        value: true,
        isValid: false,
        message: 'Password must contain at least one number'
      },
      {
        id: 3,
        name: 'hasSpecialChar',
        value: true,
        isValid: false,
        message: 'Password must contain at least one special character'
      }
    ]
  });

  const handlePasswordChange = e => {
    const { value } = e.target;
    const rules = [...passwordValidation.rules];
    const updatedRules = rules.map(rule => {
      if (rule.name === 'minLength') {
        return {
          ...rule,
          isValid: value.length >= rule.value
        };
      }
      if (rule.name === 'hasNumber') {
        return {
          ...rule,
          isValid: /\d/.test(value)
        };
      }
      if (rule.name === 'hasSpecialChar') {
        return {
          ...rule,
          isValid: /[^a-zA-Z0-9]/.test(value)
        };
      }
  
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
          <li>{rule.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
