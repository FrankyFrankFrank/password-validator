
export const PasswordRule = ({ rule }) => {
   
    return (
        <li
            className={`flex items-center mb-2 ${rule.isValid ? 'text-green-500' : 'text-red-500'}`}
          >
            { rule.isValid ? (
                <i className="fas fa-check-circle mr-2" />
                ) : (
                <i className='fas fa-times-circle mr-2' />
                )}
            {rule.message}
          </li>
    )
}