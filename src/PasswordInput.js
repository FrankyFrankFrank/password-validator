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

  const hasFailedRules = () => {
    if (passwordValidation.password.length === 0) return false;
    return passwordValidation.rules.some(rule => !rule.isValid);
};

  return (
    <div className={`mb-4 border-t-8 py-8 transition-all duration-1000 ${(passwordValidation.password.length && !hasFailedRules()) ? 'border-green-700' : 'border-white'} ${ hasFailedRules() && 'border-red-700'}`}>
      <label
        for="password"
        className='block text-gray-200 text-sm font-bold mb-2 uppercase tracking-widest'
      >Password</label>
      <input
        id="password"
        className='appearance-none border-b border-l w-full py-2 px-3 mb-4 text-white bg-transparent leading-tight focus:outline-none focus:shadow-outline'
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
