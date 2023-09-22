import React, { useState } from "react";
import { MdSearch } from 'react-icons/md';

import { Container, Logo, Title, Form, Input, Button } from "./styles";

import gitHubLogo from '../../assets/github-logo.svg';

export default function MainPage() {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={gitHubLogo} alt="API Github" />
      <Title>Github Search</Title>
      <Form>
        <Input
        placeholder="Usuário"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`${login}/repositories`}>
          <MdSearch size={42} color="#FFF"/>
        </Button>
      </Form>
    </Container>
  );
}
