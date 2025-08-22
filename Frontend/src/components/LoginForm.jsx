import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(password, email);
            dispatch(login(data.user))
            navigate({to:"/dashboard"})
            setLoading(false);
            console.log("signin success")
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md text-white">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
className={`bg-lime-400 hover:bg-lime-500 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="cursor-pointer text-sm text-gray-600">
                        Don't have an account? <span onClick={() => state(false)} className="text-blue-500 hover:text-blue-700">Register</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;