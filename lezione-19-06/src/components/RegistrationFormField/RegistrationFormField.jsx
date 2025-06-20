import './RegistrationFormField.css';

function RegistrationFormField({ label, type, value, onChange, error }) {
    return (
        <div>
            <label>{label}</label>
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                className={error ? 'form-field-error' : 'form-field'} />
            { error && <div className='error-text'>{error}</div> }
        </div>
    )
}

export default RegistrationFormField;