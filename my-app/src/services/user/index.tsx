import React, {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useEffect,
  useMemo
} from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { loginFormValues } from '../../schemas/login';
import { registerFormValues } from '../../schemas/register';
import { api } from '../../api/users';
import { userStore } from '../../store/userStore';
import paths from '../../routes/paths';

interface AuthContextType {
  login: (data: loginFormValues) => Promise<void>;
  signup: (data: registerFormValues) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const save = userStore(state => state.saveUser);
  const setToken = userStore(state => state.setAuthToken);
  const navigate = useNavigate();
  const loggedUser = userStore(state => state.loggedUser);
  const login = useCallback(
    async (data: loginFormValues) => {
      try {
        const response = await api.post('auth/login', data);
        if (response.data) {
          save(response.data);
          toast.success('Login success!', { autoClose: 2500 });
          setTimeout(() => {
            navigate(paths.dashboard);
          }, 2500);
        }
      } catch (error) {
        toast.error('E-mail/password incorrect', { autoClose: 2500 });
      }
    },
    [navigate]
  );

  const signup = useCallback(
    async (data: registerFormValues) => {
      try {
        const response = await api.post('auth/signup', data);
        if (response.data) {
          setToken(response.data);
          toast.success('Register success!', { autoClose: 2500 });
          setTimeout(() => {
            navigate(paths.login);
          }, 2500);
        }
      } catch (error) {
        toast.error('E-mail already registered', { autoClose: 2500 });
      }
    },
    [navigate]
  );
  useEffect(() => {
    if (loggedUser) navigate(paths.dashboard);
  }, [loggedUser, navigate]);

  const value = useMemo(() => ({ login, signup }), [login, signup]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
