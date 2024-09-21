import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from '../actions/authActions'; // Import the loginRequest action
import '../css/login.scss';
import logo from "../assets/images/linkedin.png";
import facebook from "../assets/images/instagram.png";
import google from "../assets/images/google.png";
import linkedin from "../assets/images/linkedin.png";

const LoginComponent = () => {
    const [login, setLogin] = useState(true);
    const [signUpForm, setSignUpForm] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [signInForm, setSignInForm] = useState({
        email: '',
        password: ''
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Access login state from the Redux store
    const loginState = useSelector((state) => state.auth);

    const handleToggle = () => {
        setLogin(!login);
    };

    const handleSignUpChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSignInChange = (e) => {
        const { name, value } = e.target;
        setSignInForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        setSignUpForm({ name: '', email: '', password: '' });
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        const credentials = {
            username: signInForm.email,
            password: signInForm.password
        };
        dispatch(loginRequest(credentials)); // Dispatch the login request
    };

    // Use useEffect to watch the login state and redirect if successful
    useEffect(() => {
        if (loginState.isAuthenticated) {
            navigate('/assignments '); // Redirect to the homepage
        }
    }, [loginState, navigate]);

    return (
        <div className="login">
            <div className={`login__colored-container ${login ? 'login__colored-container--left' : 'login__colored-container--right'}`}></div>
            <div className={`login__welcome-back ${login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                <div className="login__welcome-back__logo-container">
                    <img className="login__welcome-back__logo-container--image" src={logo} alt="Budwriter" />
                    Grading System
                </div>
                <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__main-container__text-container">
                        <span className="login__welcome-back__main-container__text-container--title">
                            Welcome Back!
                        </span>
                        <span className="login__welcome-back__main-container__text-container--secondary">
                            Grade assignments in one go, Lets get started!
                        </span>
                    </div>
                    <div onClick={handleToggle} className="login__welcome-back__main-container__button-container">
                        Sign In
                    </div>
                </div>
            </div>
            <div className={`login__create-container ${login ? 'login__create-container--active' : 'login__create-container--inactive'}`}>
                Create Account
                <div className="login__create-container__social-container">
                    <img className="login__create-container__social-container--facebook-icon" src={facebook} alt="" />
                    <img className="login__create-container__social-container--google-icon" src={google} alt="" />
                    <img className="login__create-container__social-container--linkedin-icon" src={linkedin} alt="" />
                </div>
                <span className="login__create-container--info-text">or use email for your registration</span>
                <div className="login__create-container__form-container">
                    <form className="login__create-container__form-container__form" onSubmit={handleSignUp}>
                        <input
                            className="login__create-container__form-container__form--name"
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={signUpForm.name}
                            onChange={handleSignUpChange}
                            required
                        />
                        <input
                            className="login__create-container__form-container__form--email"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={signUpForm.email}
                            onChange={handleSignUpChange}
                            required
                        />
                        <input
                            className="login__create-container__form-container__form--password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={signUpForm.password}
                            onChange={handleSignUpChange}
                            required
                        />
                        <button className="login__create-container__form-container__form--submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
            <div className={`login__login-container ${!login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                <div className="login__login-container__logo-container">
                    <img className="login__login-container__logo-container--image" src={logo} alt="Budwriter" />
                    Grading System
                </div>
                <div className="login__login-container__main-container">
                    <div className="login__login-container__main-container__social-container">
                        <img className="login__login-container__main-container__social-container--facebook-icon" src={facebook} alt="" />
                        <img className="login__login-container__main-container__social-container--google-icon" src={google} alt="" />
                        <img className="login__login-container__main-container__social-container--linkedin-icon" src={linkedin} alt="" />
                    </div>
                    <span className="login__login-container__main-container--info-text">or use email for your login</span>
                    <div className="login__login-container__main-container__form-container">
                        <form className="login__login-container__main-container__form-container__form" onSubmit={handleSignIn}>
                            <input
                                className="login__login-container__main-container__form-container__form--email"
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={signInForm.email}
                                onChange={handleSignInChange}
                                required
                            />
                            <input
                                className="login__login-container__main-container__form-container__form--password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={signInForm.password}
                                onChange={handleSignInChange}
                                required
                            />
                            <button className="login__login-container__main-container__form-container__form--submit">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`login__hello-container ${!login ? 'login__hello-container--active' : 'login__hello-container--inactive'}`}>
                <div className="login__welcome-back__main-container__text-container">
                    <span className="login__welcome-back__main-container__text-container--title">
                        Hello, stranger!
                    </span>
                    <span className="login__welcome-back__main-container__text-container--secondary">
                        Enter your personal details!
                    </span>
                </div>
                <div onClick={handleToggle} className="login__welcome-back__main-container__button-container">
                    Sign Up
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
