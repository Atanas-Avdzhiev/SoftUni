import { useNavigate, Link } from 'react-router-dom';
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";
import { useState } from 'react';
import styles from './login.module.css';

export default function Login() {

    const navigate = useNavigate();

    const login = useLogin();
    const [error, setError] = useState('');

    const initialValues = { email: '', password: '' };

    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };

    const { values, changeHandler, submitHandler } = useForm(initialValues, loginHandler);

    return (
        <section className={styles.loginPage}>
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandler} id="login" className={styles.form} data-testid="login-form">

                    <div className={styles.container}>
                        <div className={styles.brandLogo}></div>
                        <h1>Login</h1>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={changeHandler}
                            placeholder="pesho@abv.com"
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={values.password}
                            onChange={changeHandler}
                        />

                        {error && (
                            <p className={styles.authError}>
                                <span>{error}</span>
                            </p>
                        )}

                        <input type="submit" className={`${styles.btn} submit`} value="Login" />
                        <p className={styles.field}>
                            <span>Don't have an account? <Link to="/register">Register</Link></span>
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}
