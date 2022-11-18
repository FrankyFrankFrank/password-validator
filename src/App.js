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

  const renderIcon = rule => {
    return rule.isValid ? (
      <i className="fas fa-check-circle mr-2" />
    ) : (
      <i className='fas fa-times-circle mr-2' />
    );
  };

  return (
    <div className='p-4'>
      <label
        for="password"
        className='block text-gray-700 text-sm font-bold mb-2'
      >Password</label>
      <input
        id="password"
        className='shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        type={'password'}
        value={passwordValidation.password}
        onChange={handlePasswordChange}
      />
      <ul>
        {passwordValidation.rules.map(rule => (
          <li
            key={rule.id}
            className={`flex items-center mb-2 ${rule.isValid ? 'text-green-500' : 'text-red-500'}`}
          >
            { renderIcon(rule) }
            {rule.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
