import { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../store/slices/authSlice';
import { getCurrentUser, setAuthToken } from '../services/authService';

export const useAuth = () => {
  const dispatch = useDispatch();
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (token) {
        setAuthToken(token);
        try {
          const userData = await getCurrentUser();
          if (userData) {
            await dispatch(loginSuccess({ user: userData, token }));
          } else {
            await dispatch(loginFailure('Session expired'));
          }
        } catch (error) {
          await dispatch(loginFailure(error.message));
        }
      }

      setLoading(false)
    };

    initializeAuth();
  }, [dispatch]);

  return loading
  
};

export default useAuth;
