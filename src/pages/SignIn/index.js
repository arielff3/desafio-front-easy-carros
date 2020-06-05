import React, { useState } from 'react';

import { Container, ContainerForm, Form, Title } from './styles';
import Input from '~/components/Input';
import Button from '~/components/Buttons';

import { useAuth } from '~/context/auth';
import { useTheme } from '~/context/theme';

import { ReactComponent as Logo } from '~/assets/logo.svg';

export default function SignIn() {
  // Input email
  const [email, setEmail] = useState('');
  // Input Password
  const [password, setPassword] = useState('');

  // Hook de login
  const { signIn } = useAuth();
  // Animações do carro
  const { animation } = useTheme();

  // Função para efetuar login
  const handleSubmit = () => {
    signIn({ email, password });
  };

  return (
    <Container>
      <ContainerForm>
        <Logo />
        <Form>
          <Title>Login</Title>
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
            name="email"
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
            name="password"
            required
          />
          <Button onClick={() => handleSubmit()} type="button">
            Entrar
          </Button>
        </Form>
      </ContainerForm>
      <img src={animation} alt="car-animation" />
    </Container>
  );
}
