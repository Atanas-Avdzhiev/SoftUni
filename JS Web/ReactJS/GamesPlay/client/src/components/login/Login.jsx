import { useNavigate, Link } from 'react-router-dom';

import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from 'react';

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();
    const navigate = useNavigate();

    const initialValues = { email: '', password: '' };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);


    return (
        <section id="login-page" className="auth">
            <form onSubmit={submitHandler} id="login">

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="Sokka@gmail.com"
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    {error && (
                        <p className="auth-error">
                            <span>{error}</span>
                        </p>
                    )}

                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}