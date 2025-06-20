import { useState } from "react";
import './RegistrationForm.css'
import RegistrationFormField from "../RegistrationFormField/RegistrationFormField.jsx";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const updateField = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

        if (errors[field]) setErrors(prev => ({
            ...prev,
            [field]: null
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'Username obbligatorio';
        } else if (formData.username.length < 3) { newErrors.username = 'Username deve contenere almeno 3 caratteri'; }

        if (!formData.email.trim()) {
            newErrors.email = 'Email obbligatoria';
        } else if (!formData.email.includes('@')) { newErrors.email = 'Email non valida'; }

        if (!formData.password) {
            newErrors.password = 'Password obbligatoria';
        } else if (formData.password.length < 6) { newErrors.password = 'Password deve contenere almeno 6 caratteri'; }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validateForm()) {
            alert("Form inviato correttamente!");
            console.log('Dati form:', formData);   
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <RegistrationFormField 
                label="Username" 
                type="text" 
                value={formData.username} 
                onChange={(e) => updateField('username', e.target.value)}
                error={errors.username} />
            <RegistrationFormField 
                label="Email" 
                type="email" 
                value={formData.email} 
                onChange={(e) => updateField('email', e.target.value)}
                error={errors.email} />
            <RegistrationFormField 
                label="Password" 
                type="password" 
                value={formData.password} 
                onChange={(e) => updateField('password', e.target.value)}
                error={errors.password} />
            <button type="submit">Registrati</button>
        </form>
    )
}

export default RegistrationForm;