import { useState } from "react";
import './CompleteForm.css'
import RegistrationFormField from "../RegistrationFormField/RegistrationFormField.jsx";

function CompleteForm() {
    const interests = ['Sport', 'Cinema', 'Musica', 'Giochi', 'Libri'];

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        country: '',
        gender: '',
        newsletter: false,
        interests: []
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

    const handleInterestChange = (interest) => {
        setFormData(prev => ({
            ...prev,
            interests: prev.interests.includes(interest) 
                ? prev.interests.filter(i => i !== interest) 
                : [...prev.interests, interest]
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
            <div className="country">
                <label>Paese</label>
                <select value={formData.country} onChange={(e) => updateField('country', e.target.value)}>
                    <option value="">Seleziona...</option>
                    <option value="italia">Italia</option>
                    <option value="francia">Francia</option>
                    <option value="spagna">Spagna</option>
                </select>
            </div>

            <div className="form-row">
                <label>Genere</label>
                <div className="gender">
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={formData.gender === 'male'} 
                            onChange={(e) => updateField('gender', e.target.value)} />
                        Maschio
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={formData.gender === 'female'} 
                            onChange={(e) => updateField('gender', e.target.value)} />
                        Femmina
                    </label>
                </div>
            </div>
            
            
            <div className="form-row">
                <label>
                    <input 
                        type="checkbox" 
                        checked={formData.newsletter}
                        onChange={(e) => updateField('newsletter', e.target.checked)} />
                    Iscriviti alla newsletter                    
                </label>
            </div>

            <div className="form-row">
                <label>Interessi</label>
                <div className="interests">
                    {
                        interests.map(
                            (interest) => <label key={interest}>
                                <input 
                                    type="checkbox" 
                                    checked={formData.interests.includes(interest)}
                                    onChange={() => handleInterestChange(interest)} />
                                {interest}
                            </label>
                        )
                    }
                </div>
            </div>
            <button type="submit">Registrati</button>
        </form>
    )
}

export default CompleteForm;