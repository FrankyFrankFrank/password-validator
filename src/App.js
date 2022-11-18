import './styles.css';
import PasswordInput from './PasswordInput';

const App = () => {

  return (
    <div className='max-w-lg mx-auto py-10'>
      <PasswordInput
        validationRules={[
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
        ]}
      />
    </div>
  );
}

export default App;
