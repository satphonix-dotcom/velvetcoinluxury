import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../../store/slices/authSlice';
import { login } from '../../services/authService';
import { motion } from 'framer-motion';
import LuxuryLayout from '../layout/LuxuryLayout';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { loading, error } = useSelector(state => state.auth);
  
  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    
    try {
      const data = await login(formData.email, formData.password);
      dispatch(loginSuccess(data));
      navigate(from, { replace: true });
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'));
    }
  };

  return (
    <LuxuryLayout>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-luxury-cream">Welcome Back</h2>
            <p className="mt-2 text-luxury-gray-400">Sign in to access your luxury collection</p>
          </div>

          <div className="bg-luxury-charcoal p-8 rounded-lg shadow-xl">
            {error && (
              <div className="mb-6 bg-red-900/50 border border-red-500/50 text-red-200 px-4 py-3 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-luxury-black border-luxury-gray-700 text-luxury-cream rounded-md 
                           focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-luxury-black border-luxury-gray-700 text-luxury-cream rounded-md 
                           focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 bg-luxury-black border-luxury-gray-700 rounded 
                             text-luxury-gold focus:ring-luxury-gold"
                  />
                  <label className="ml-2 block text-sm text-luxury-gray-400">
                    Remember me
                  </label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-luxury-gold hover:text-luxury-gold-light"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-luxury-gold text-luxury-black py-3 rounded-md font-medium
                         hover:bg-luxury-gold-light transition-colors disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-luxury-gray-400">
                Don't have an account?{' '}
                <Link to="/register" className="text-luxury-gold hover:text-luxury-gold-light">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </LuxuryLayout>
  );
};

export default Login;