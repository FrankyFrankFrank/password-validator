
export const PasswordRule = ({ rule }) => {
   
    return (
        <li
            className={`flex items-center mb-2 transition-all duration-500 ${rule.isValid ? 'text-slate-500' : 'text-red-700'}`}
          >
            <i className={`fas ${rule.isValid ? 'fa-check-circle' : 'fa-times-circle'} mr-2`}></i>
            {rule.message}
          </li>
    )
}