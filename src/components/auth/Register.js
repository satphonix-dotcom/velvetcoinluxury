import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/slices/authSlice';
import { motion } from 'framer-motion';
import LuxuryLayout from '../layout/LuxuryLayout';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await axios.post('/api/auth/register', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      });
      
      localStorage.setItem('token', response.data.token);
      dispatch(loginSuccess(response.data));
      navigate('/');
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
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
            <h2 className="text-3xl font-serif text-luxury-cream">Create Account</h2>
            <p className="mt-2 text-luxury-gray-400">Join our exclusive luxury marketplace</p>
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
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-luxury-black border-luxury-gray-700 text-luxury-cream rounded-md 
                           focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

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

              <div>
                <label className="block text-sm font-medium text-luxury-cream mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full bg-luxury-black border-luxury-gray-700 text-luxury-cream rounded-md 
                           focus:ring-luxury-gold focus:border-luxury-gold"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-luxury-gold text-luxury-black py-3 rounded-md font-medium
                         hover:bg-luxury-gold-light transition-colors disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-luxury-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-luxury-gold hover:text-luxury-gold-light">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </LuxuryLayout>
  );
};

export default Register;