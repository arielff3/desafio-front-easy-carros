import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '~/services/api';

const AuthContetx = createContext({});

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/auth', {
        email,
        password,
      });
      const { token } = response.data.data;

      localStorage.setItem('@token', token);
      setSigned(true);
    } catch (err) {
      toast.error('Usuário e/ ou Senha inválidos.');
    }
  }

  async function signOut() {
    try {
      setSigned(false);
      localStorage.clear();
    } catch (err) {
      toast.error('Ocorreu um erro ao sair.');
    }
  }

  return (
    <AuthContetx.Provider value={{ signed, signIn, signOut }}>
      {children}
    </AuthContetx.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContetx);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export default AuthContetx;

AuthProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
