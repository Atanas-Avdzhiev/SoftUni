import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const initialValues = { email: '', password: '', rePassword: '' };

    const registerHandler = async ({ email, password, rePassword }) => {
        if (password !== rePassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    }

    const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);


    return (
        <section id="register-page" className="content auth">
            <form onSubmit={submitHandler} id="register">
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        value={values.password}
                        onChange={changeHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="rePassword"
                        id="confirm-password"
                        value={values.rePassword}
                        onChange={changeHandler}
                    />
                    {error && (
                        <p className="auth-error">
                            <span>{error}</span>
                        </p>
                    )}
                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to="/login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    )
}