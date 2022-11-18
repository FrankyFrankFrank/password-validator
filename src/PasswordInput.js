import './styles.css';
import React, { useState } from 'react';
import { PasswordRule } from './PasswordRule';

const PasswordInput = ({ validationRules }) => {
  const [passwordValidation, setPasswordValidation] = useState({
    password: '',
    rules: validationRules
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

  return (
    <div className='mb-4'>
      <label
        for="password"
        className='block text-gray-700 text-sm font-bold mb-2 uppercase tracking-widest'
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
          <PasswordRule
            key={rule.id}
            rule={rule}
          />
        ))}
      </ul>
    </div>
  );
}

export default PasswordInput;
