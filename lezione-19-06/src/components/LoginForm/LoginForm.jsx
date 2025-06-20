import useForm from "../../hooks/useForm";

function LoginForm() {
    const form = useForm({ email: '', password: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login con:', form.values);
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={form.values.email}
                onChange={(e) => form.setValue('email', e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={form.values.password}
                onChange={(e) => form.setValue('password', e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Login</button>
            <button type="button" onClick={form.reset}>Reset</button>
        </form>
    );
}

export default LoginForm;