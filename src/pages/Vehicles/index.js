/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import { MdAdd, MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';

import api from '~/services/api';
import { useAuth } from '~/context/auth';

import Input from '~/components/Input';
import Button from '~/components/Buttons';
import {
  Container,
  Search,
  VehiclesContainer,
  Title,
  Section,
  Logoff,
} from './styles';

export default function Vehicles() {
  // Veículos [{}]
  const [vehicles, setVehicles] = useState([]);
  // Input
  const [plate, setPlate] = useState('');
  // Token
  const token = localStorage.getItem('@token');

  const { signOut } = useAuth();

  // Função para deslogar
  const handleLogoff = () => {
    signOut();
  };

  // Função para adicionar Placa
  const handleVehicle = async () => {
    try {
      await api.post(
        '/vehicle',
        {
          plate,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPlate('');
    } catch (err) {
      toast.error(
        'Placa de veículo inválida, a placa deverá ter o seguinte formato: XXX0000 ou XXX0X000'
      );
    }
  };

  // Função Para Deletar Placa
  const handleDelete = async id => {
    try {
      await api.delete(`/vehicle/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (err) {
      toast.error(
        'Placa de veículo inválida, a placa deverá ter o seguinte formato: XXX0000 ou XXX0X000'
      );
    }
  };

  // Carrega a lista de placas e monitora qualquer alteração
  useEffect(() => {
    const load = async () => {
      const response = await api.get('/vehicle', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setVehicles(response.data.data);
    };
    load();
  }, [token, vehicles]);

  return (
    <Section>
      <Logoff onClick={() => handleLogoff()}>Sair</Logoff>
      <Title>Veículos</Title>
      <Container>
        <Search>
          <Input
            value={plate}
            onChange={e => setPlate(e.target.value)}
            placeholder="Adicionar Placa"
            type="email"
            name="plate"
          />
          <Button type="button" onClick={() => handleVehicle()}>
            <MdAdd />{' '}
          </Button>
        </Search>
        <VehiclesContainer>
          {vehicles.length > 0 ? (
            <ul>
              {vehicles.map(vehicle => (
                <li key={vehicle.id}>
                  <p>{vehicle.plate}</p>
                  <button
                    type="button"
                    onClick={() =>
                      window.confirm(
                        `Deseja realmente deletar a placa ${vehicle.plate}`
                      ) && handleDelete(vehicle.id)
                    }
                  >
                    <MdDeleteForever size={20} color="#f90919" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <h3>Nenhuma placa encontrada.</h3>
          )}
        </VehiclesContainer>
      </Container>
    </Section>
  );
}
