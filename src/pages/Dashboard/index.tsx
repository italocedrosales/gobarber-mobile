import React from 'react';

import { Text, Button } from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Text style={{ fontSize: 32, color: '#fff' }}>Dashboard</Text>
      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
