import React, { useState } from 'react';

import { Container, ContainerForm, Form, Title } from './styles';
import Input from '~/components/Input';
import Button from '~/components/Buttons';

import { useAuth } from '~/context/auth';
import { useTheme } from '~/context/theme';

import { ReactComponent as Logo } from '~/assets/logo.svg';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const { animation } = useTheme();

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
          />
          <Input
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
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

export default SignIn;
