import { useState } from 'react';

function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);

    const setValue = (field, value) => setValues(prev => ({ ...prev, [field]: value }));

    const reset = () => setValues(initialValues);

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

    return { values, setValue, reset, validateForm };
}

export default useForm;