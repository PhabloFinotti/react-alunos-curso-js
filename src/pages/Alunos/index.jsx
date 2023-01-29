import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaTimes } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import {
  AlunoActions,
  AlunoContainer,
  AlunoInfo,
  ProfilePicture,
} from './styled';
import axios from '../../services/axios';

import Loading from '../../components/Loading';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await axios.get('/alunos');
      setAlunos(response.data);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      {alunos.map((aluno) => (
        <AlunoContainer>
          <div>
            <div key={String(aluno.id)}>
              <ProfilePicture>
                {get(aluno, 'Fotos[0].url', false) ? (
                  <img src={aluno.Fotos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
            </div>
            <AlunoInfo>
              <p>{aluno.nome}</p>
              <span>{aluno.email}</span>
            </AlunoInfo>
          </div>
          <AlunoActions>
            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={24} />
            </Link>
            <Link to={`/aluno/${aluno.id}/delete`}>
              <FaTimes size={24} />
            </Link>
          </AlunoActions>
        </AlunoContainer>
      ))}
    </Container>
  );
}
